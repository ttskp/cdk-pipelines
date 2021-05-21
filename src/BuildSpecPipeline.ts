import * as path from 'path';
import { BuildEnvironment, BuildSpec, LinuxBuildImage, PipelineProject } from '@aws-cdk/aws-codebuild';
import { Repository, RepositoryProps } from '@aws-cdk/aws-codecommit';
import { Artifact, Pipeline } from '@aws-cdk/aws-codepipeline';
import { CodeBuildAction, CodeCommitSourceAction, CodeCommitTrigger } from '@aws-cdk/aws-codepipeline-actions';
import { Construct, Duration, RemovalPolicy } from '@aws-cdk/core';

/**
 * @summary Properties used for BuildSpecPipeline construct
 */
export interface BuildSpecPipelineProps {

  readonly projectName?: string;
  readonly projectDescription?: string;

  readonly existingRepositoryObj?: Repository;
  readonly repositoryProps?: RepositoryProps;
  readonly retainRepository?: boolean;

  readonly buildEnvironment?: BuildEnvironment;
  readonly buildSpecObj?: BuildSpec;
  readonly buildSpec?: { [key: string]: any };
  readonly buildSpecFile?: string;

  readonly branch?: string;
}

const buildSpecPipelinePropsDefaults: BuildSpecPipelineProps = {
  retainRepository: true,
  branch: 'master',
};

/**
 * @summary Constructs a CodePipeline and reads build specs from '.buildspec' file.
 * @param {Construct} scope - scope for all resources created by this construct
 * @param {string} id - scope-unique logical id
 * @param {BuildSpecPipelineProps} - user provided properties for this construct
 * @access public
 */
export class BuildSpecPipeline extends Construct {

  public readonly repository: Repository;
  public readonly pipeline: Pipeline;

  constructor(scope: Construct, name: string, props?: BuildSpecPipelineProps) {
    super(scope, name);

    const p = { ...buildSpecPipelinePropsDefaults, ...props };
    console.log(p);

    this.repository = this.createOrUseRepository(p);

    const sourceOutput = new Artifact('source');
    const sourceAction = new CodeCommitSourceAction({
      actionName: 'SourceAction',
      trigger: CodeCommitTrigger.EVENTS,
      repository: this.repository,
      branch: p.branch,
      output: sourceOutput,
      codeBuildCloneOutput: true,
    });

    const pipelineProject = new PipelineProject(this, 'PipelineProject', {
      projectName: `${this.getProjectName(p)}-Build`,
      buildSpec: this.getBuildSpec(p),
      environment: p.buildEnvironment ?? {
        buildImage: LinuxBuildImage.STANDARD_5_0,
        privileged: false,
      },
      description: `CodePipeline for ${p.projectName}`,
      timeout: Duration.hours(1),
    });

    const codeBuildAction = new CodeBuildAction({
      actionName: 'BuildAction',
      input: sourceOutput,
      project: pipelineProject,
    });

    this.pipeline = new Pipeline(this, 'Pipeline', {
      stages: [{
        stageName: 'SourceCheckout',
        actions: [sourceAction],
      }, {
        stageName: 'Build',
        actions: [codeBuildAction],
      }],
    });
  }

  private createOrUseRepository(props: BuildSpecPipelineProps): Repository {

    if (props?.existingRepositoryObj && props?.repositoryProps) {
      throw new Error('Cannot specify both repository properties and an existing repository');
    }

    let repository: Repository;

    if (props?.existingRepositoryObj) {
      repository = props.existingRepositoryObj;

    } else if (props?.repositoryProps) {
      repository = new Repository(this, 'Repository', props.repositoryProps);
      repository.applyRemovalPolicy(props?.retainRepository ? RemovalPolicy.RETAIN : RemovalPolicy.DESTROY);

    } else {

      repository = new Repository(this, 'Repository', {
        repositoryName: this.getProjectName(props),
      });
      repository.applyRemovalPolicy(props?.retainRepository ? RemovalPolicy.RETAIN : RemovalPolicy.DESTROY);
    }

    return repository;
  }

  private getBuildSpec(props: BuildSpecPipelineProps) {

    if (props?.buildSpecObj) {
      return props.buildSpecObj;

    } else if (props?.buildSpec) {
      return BuildSpec.fromObject(props.buildSpec);

    } else if (props?.buildSpecFile) {
      return BuildSpec.fromSourceFilename(props.buildSpecFile);

    } else {
      return BuildSpec.fromSourceFilename(path.join(process.cwd(), 'buildspec.yml'));
    }
  }

  private getProjectName(props: BuildSpecPipelineProps) {
    return props.projectName ?? path.basename(process.cwd());
  }
}
