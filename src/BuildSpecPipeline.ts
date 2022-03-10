import * as fs from 'fs';
import * as path from 'path';
import { BuildEnvironment, BuildSpec, LinuxBuildImage, PipelineProject } from 'aws-cdk-lib/aws-codebuild';
import { Repository, RepositoryProps } from 'aws-cdk-lib/aws-codecommit';
import { Artifact, Pipeline } from 'aws-cdk-lib/aws-codepipeline';
import { CodeBuildAction, CodeCommitSourceAction, CodeCommitTrigger } from 'aws-cdk-lib/aws-codepipeline-actions';
import { Duration, RemovalPolicy } from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import * as YAML from 'yaml';
import { CodeArtifactFeature } from './features/codeArtifact';
import { BuildProjectFeature } from './features/core';
import { SSMParametersFeature } from './features/ssm';

type dict = Record<string, any>;

/**
 * @summary Properties used for BuildSpecPipeline construct
 */
export interface BuildSpecPipelineProps {

  readonly projectName?: string;
  readonly projectDescription?: string;

  readonly existingRepositoryObj?: Repository;
  readonly repositoryProps?: RepositoryProps;
  readonly retainRepository?: boolean;

  readonly branch?: string;

  readonly buildEnvironment?: BuildEnvironment;

  readonly buildSpec?: dict;
  readonly buildSpecFile?: string;
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
  public readonly codebuildProject: PipelineProject;

  public readonly props: BuildSpecPipelineProps;
  public readonly buildSpec: dict;

  public readonly features: Array<BuildProjectFeature> = [];

  constructor(scope: Construct, name: string, props?: BuildSpecPipelineProps) {
    super(scope, name);

    this.props = { ...buildSpecPipelinePropsDefaults, ...props };
    this.buildSpec = this.readBuildSpec();

    this.features.push(
      new CodeArtifactFeature(this),
      new SSMParametersFeature(this),
    );

    this.repository = this.createOrUseRepository();
    this.codebuildProject = this.createCodebuildProject();
    this.pipeline = this.createPipeline();
  }

  private createOrUseRepository(): Repository {

    if (this.props?.existingRepositoryObj && this.props?.repositoryProps) {
      throw new Error('Cannot specify both repository properties and an existing repository');
    }

    let repository: Repository;

    if (this.props?.existingRepositoryObj) {
      repository = this.props.existingRepositoryObj;

    } else if (this.props?.repositoryProps) {
      repository = new Repository(this, 'Repository', this.props.repositoryProps);
      repository.applyRemovalPolicy(this.props?.retainRepository ? RemovalPolicy.RETAIN : RemovalPolicy.DESTROY);

    } else {

      repository = new Repository(this, 'Repository', {
        repositoryName: this.getProjectName(this.props),
      });
      repository.applyRemovalPolicy(this.props?.retainRepository ? RemovalPolicy.RETAIN : RemovalPolicy.DESTROY);
    }

    return repository;
  }

  private createPipeline() {

    const sourceOutput = new Artifact('source');
    const sourceAction = new CodeCommitSourceAction({
      actionName: 'SourceAction',
      trigger: CodeCommitTrigger.EVENTS,
      repository: this.repository,
      branch: this.props.branch,
      output: sourceOutput,
      codeBuildCloneOutput: true,
    });

    const codeBuildAction = new CodeBuildAction({
      actionName: 'BuildAction',
      input: sourceOutput,
      project: this.codebuildProject,
    });

    return new Pipeline(this, 'Pipeline', {
      stages: [{
        stageName: 'SourceCheckout',
        actions: [sourceAction],
      }, {
        stageName: 'Build',
        actions: [codeBuildAction],
      }],
    });
  }

  private readBuildSpec(): dict {

    let buildSpec: dict = {};

    if (this.props?.buildSpec) {
      buildSpec = this.props.buildSpec;

    } else if (this.props?.buildSpecFile ) { // TODO file does not exist
      buildSpec = this.readBuildSpecFromFile(this.props.buildSpecFile);

    } else { // TODO file does not exist
      buildSpec = this.readBuildSpecFromFile('buildspec.yml');
    }

    return buildSpec;
  }

  private readBuildSpecFromFile(file: string) {
    const buildSpecYaml = fs.readFileSync(file).toString('UTF8');
    return YAML.parse(buildSpecYaml);
  }

  private getProjectName(props: BuildSpecPipelineProps) {
    return props.projectName ?? path.basename(process.cwd());
  }

  private createCodebuildProject() {

    if (!this.buildSpec.phases.pre_build) {
      Object.defineProperty(this.buildSpec.phases, 'pre_build', { value: {} });
    }

    if (!this.buildSpec.phases.pre_build.commands) {
      Object.defineProperty(this.buildSpec.phases.pre_build, 'commands', { value: [] });
    }

    if (!this.buildSpec.phases.post_build) {
      Object.defineProperty(this.buildSpec.phases, 'post_build', { value: {} });
    }

    if (!this.buildSpec.phases.post_build.commands) {
      Object.defineProperty(this.buildSpec.phases.post_build, 'commands', { value: [] });
    }

    this.features.forEach(feature => {
      this.buildSpec.phases.pre_build.commands = [
        ...feature.preBuildCommands,
        ...this.buildSpec.phases.pre_build.commands,
      ];
      this.buildSpec.phases.post_build.commands = [
        ...feature.postBuildCommands,
        ...this.buildSpec.phases.post_build.commands,
      ];
    });

    const buildProject = new PipelineProject(this, 'PipelineProject', {
      projectName: `${this.getProjectName(this.props)}-Build`,
      buildSpec: BuildSpec.fromObject(this.buildSpec),
      environment: this.props.buildEnvironment ?? {
        buildImage: LinuxBuildImage.STANDARD_5_0,
        privileged: false,
      },
      description: `CodePipeline for ${this.props.projectName}`,
      timeout: Duration.hours(1),
    });

    this.features.forEach(feature => {
      feature.policyStatements.forEach(statement => buildProject.addToRolePolicy(statement));
    });

    return buildProject;
  }
}
