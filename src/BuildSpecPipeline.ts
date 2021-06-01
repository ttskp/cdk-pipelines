import * as fs from 'fs';
import * as path from 'path';
import { BuildEnvironment, BuildSpec, LinuxBuildImage, PipelineProject } from '@aws-cdk/aws-codebuild';
import { Repository, RepositoryProps } from '@aws-cdk/aws-codecommit';
import { Artifact, Pipeline } from '@aws-cdk/aws-codepipeline';
import { CodeBuildAction, CodeCommitSourceAction, CodeCommitTrigger } from '@aws-cdk/aws-codepipeline-actions';
import { Effect, PolicyStatement } from '@aws-cdk/aws-iam';
import { Construct, Duration, RemovalPolicy, Stack } from '@aws-cdk/core';
import * as YAML from 'yaml';

type dict = { [key: string]: any };

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

  readonly codeArtifactDomain?: string;
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

    const p: BuildSpecPipelineProps = { ...buildSpecPipelinePropsDefaults, ...props };
    this.repository = this.createOrUseRepository(p);
    this.pipeline = this.createPipeline(p);
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

  private createPipeline(p: BuildSpecPipelineProps) {
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

    if (p.codeArtifactDomain) {
      const codeArtifactPolicy = new PolicyStatement({
        actions: ['codeartifact:*'],
        resources: [
          `arn:aws:codeartifact:${Stack.of(this).region}:${Stack.of(this).account}:package/${p.codeArtifactDomain}/*`,
          `arn:aws:codeartifact:${Stack.of(this).region}:${Stack.of(this).account}:repository/${p.codeArtifactDomain}/*`,
          `arn:aws:codeartifact:${Stack.of(this).region}:${Stack.of(this).account}:domain/${p.codeArtifactDomain}`,
        ],
        effect: Effect.ALLOW,
      });

      const codeArtifactTokenPolicyStatement = new PolicyStatement({
        actions: ['sts:GetServiceBearerToken'],
        resources: ['*'],
        effect: Effect.ALLOW,
      });
      pipelineProject.addToRolePolicy(codeArtifactPolicy);
      pipelineProject.addToRolePolicy(codeArtifactTokenPolicyStatement);
    }

    pipelineProject.addToRolePolicy(new PolicyStatement({
      actions:['ssm:GetParameter', 'ssm:GetParameters'],
      resources: ['*'],
      effect: Effect.ALLOW,
    }));

    const codeBuildAction = new CodeBuildAction({
      actionName: 'BuildAction',
      input: sourceOutput,
      project: pipelineProject,
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

  private getBuildSpec(props: BuildSpecPipelineProps) {

    let buildSpec: dict;

    if (props?.buildSpec) {
      buildSpec = props.buildSpec;

    } else if (props?.buildSpecFile) {
      buildSpec = this.readBuildSpecFromFile(props.buildSpecFile);

    } else {
      buildSpec = this.readBuildSpecFromFile('buildspec.yml');
    }

    console.log(buildSpec);

    this.extendBuildSpec(buildSpec);

    return BuildSpec.fromObject(buildSpec);
  }

  private readBuildSpecFromFile(file: string) {
    const buildSpecYaml = fs.readFileSync(file).toString('UTF8');
    return YAML.parse(buildSpecYaml);
  }

  private getProjectName(props: BuildSpecPipelineProps) {
    return props.projectName ?? path.basename(process.cwd());
  }

  // @ts-ignore
  protected extendBuildSpec(buildSpec: any) {
    // INTENTIONALLY EMPTY
  }
}
