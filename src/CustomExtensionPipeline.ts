import { BuildEnvironment, BuildSpec } from '@aws-cdk/aws-codebuild';
import { Repository, RepositoryProps } from '@aws-cdk/aws-codecommit';
import { Construct } from '@aws-cdk/core';
import { BuildSpecPipeline } from './BuildSpecPipeline';


export interface CustomExtensionPipelineProps {
  readonly projectName?: string;
  readonly projectDescription?: string;

  readonly existingRepositoryObj?: Repository;
  readonly repositoryProps?: RepositoryProps;
  readonly retainRepository?: boolean;

  readonly branch?: string;

  readonly buildEnvironment?: BuildEnvironment;

  readonly codeArtifactDomain: string;
  readonly codeArtifactRepository: string;
  readonly codeArtifactDomainOwner: string;

  readonly distBucketName: string;
}

export class CustomExtensionPipeline extends Construct {

  constructor(scope: Construct, name: string, props: CustomExtensionPipelineProps) {
    super(scope, name);
    const customExtensionBuildSpec = this.createCustomExtensionBuildSpec(
      props?.projectName || name,
      props.distBucketName,
      props.codeArtifactRepository,
      props.codeArtifactDomain,
      props.codeArtifactDomainOwner,
    );
    new BuildSpecPipeline(scope, name, { buildSpec: customExtensionBuildSpec, ...props });
  }

  protected createCustomExtensionBuildSpec(projectName: String, distBucketName: String, codeArtifactRepository: String,
    codeArtifactDomain: String, codeArtifactDomainOwner: String): BuildSpec {
    return BuildSpec.fromObject({
      version: 0.2,
      phases: {
        install: {
          'runtime-versions': {
            python: '3.8',
          },
        },
        pre_build: {
          commands: [
            `aws codeartifact login --tool pip --repository ${codeArtifactRepository} --domain ${codeArtifactDomain} --domain-owner ${codeArtifactDomainOwner}`,
            'pip install custom_stack_wrapper',
          ],
        },
        build: {
          commands: [
            'csw --template-path src/template.yaml --output-file wrapped.yaml',
            `sam package -t wrapped.yaml --s3-bucket ${distBucketName} --s3-prefix custom-extensions/${projectName}/$CODEBUILD_BUILD_NUMBER --output-template-file packaged.yaml`,
            `aws s3 cp packaged.yaml s3://${distBucketName}/custom-extensions/${projectName}/$CODEBUILD_BUILD_NUMBER/template.yaml`,
            `aws s3 sync s3://${distBucketName}/custom-extensions/${projectName}/$CODEBUILD_BUILD_NUMBER s3://${distBucketName}/custom-extensions/${projectName}/latest --delete`,
          ],
        },
      },
    });
  }
}
