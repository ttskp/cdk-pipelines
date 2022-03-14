import { Stage, StageProps } from 'aws-cdk-lib';
import { CodePipeline, CodePipelineProps, ManualApprovalStep } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';
import { DeploymentStage, StackFactory } from './deploymentTargets';

export interface MultiDeployCodePipelineProps extends CodePipelineProps {
  readonly deploymentStages: DeploymentStage[];
}

export class StackFactoryApplicationStage extends Stage {
  constructor(scope: Construct, id: string, props: StageProps, stackFactory: StackFactory) {
    super(scope, id, props);
    stackFactory(this, props.env!);
  }
}

export class MultiDeployCodePipeline extends CodePipeline {

  protected readonly mdcProps: MultiDeployCodePipelineProps;

  constructor(scope: Construct, id: string, props: MultiDeployCodePipelineProps) {

    const mdcProps = {
      ...props,
      crossAccountKeys: true,
      reuseCrossRegionSupportStacks: true,
    };

    super(scope, id, mdcProps);
    this.mdcProps = mdcProps;
  }

  protected doBuildPipeline(): void {

    this.mdcProps.deploymentStages.forEach(stage => {

      const wave = this.addWave(`Deploy-${stage.name}`, {
        pre: stage.requireManualApproval ? [new ManualApprovalStep('Approve')] : [],
      });

      stage.targets(this).forEach(target => {
        wave.addStage(new StackFactoryApplicationStage(this, `a${target.account}-${target.region}`, {
          env: {
            account: target.account,
            region: target.region,
          },
        }, stage.stackFactory));
      });
    });
  }
}