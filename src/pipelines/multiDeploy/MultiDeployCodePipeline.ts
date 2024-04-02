import { Stack, Stage, StageProps } from 'aws-cdk-lib';
import { Pipeline } from 'aws-cdk-lib/aws-codepipeline';
import { IBucket } from 'aws-cdk-lib/aws-s3';
import { CodePipeline, CodePipelineProps, ManualApprovalStep } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';
import { CodePipelineMixin } from '../../mixins';
import { DeploymentStage, IStackFactory, NoopStackFactory } from './deploymentTargets';

export interface MultiDeployCodePipelineProps extends CodePipelineProps {
  readonly deploymentStages: DeploymentStage[];
  readonly stackFactory?: IStackFactory;
  readonly mixins?: CodePipelineMixin[];
  readonly crossRegionReplicationBuckets?: { [region: string]: IBucket };
  readonly restartExecutionOnUpdate?: boolean;
}

export class StackFactoryApplicationStage extends Stage {

  public readonly stack: Stack;

  constructor(scope: Construct, id: string, props: StageProps, stackFactory: IStackFactory) {
    super(scope, id, props);
    this.stack = stackFactory.create(this, props.env!);
  }
}

export class MultiDeployCodePipeline extends CodePipeline {

  public readonly stacks: Stack[];

  protected readonly mdcProps: MultiDeployCodePipelineProps;

  constructor(scope: Construct, id: string, props: MultiDeployCodePipelineProps) {

    const pipeline = new Pipeline(scope, 'Pipeline', {
      crossRegionReplicationBuckets: props.crossRegionReplicationBuckets,
      crossAccountKeys: true,
      reuseCrossRegionSupportStacks: true,
      ...( props.restartExecutionOnUpdate ? { restartExecutionOnUpdate: props.restartExecutionOnUpdate } : {}),
    });


    const mdcProps = { codePipeline: pipeline, ...props };
    delete mdcProps.crossRegionReplicationBuckets;

    super(scope, id, mdcProps);
    this.mdcProps = mdcProps;

    this.stacks = [];
  }

  protected doBuildPipeline(): void {

    this.mdcProps.deploymentStages.forEach(stage => {

      const targets = stage.targets.provide(this);

      if (!targets || targets.length == 0) {
        return;
      }

      const pre = [
        ...(stage.pre ?? []),
        ...(stage.requireManualApproval ? [new ManualApprovalStep('Approve')] : []),
      ];

      const wave = this.addWave(`Deploy-${stage.name}`, {
        pre,
        post: stage.post ?? [],
      });

      const factory = stage.stackFactory ? stage.stackFactory :
        (this.mdcProps.stackFactory ? this.mdcProps.stackFactory : new NoopStackFactory());

      targets.forEach(target => {

        const appStage = new StackFactoryApplicationStage(this, target.name ?? `a${target.account}-${target.region}`, {
          env: {
            account: target.account,
            region: target.region,
          },
        }, factory);

        wave.addStage(appStage);
        this.stacks.push(appStage.stack);
      });
    });

    this.mdcProps.mixins?.forEach(mixin => {
      mixin.preDoBuildPipeline(this);
    });
    super.doBuildPipeline();
    this.mdcProps.mixins?.forEach(mixin => {
      mixin.postDoBuildPipeline(this);
    });
  }
}
