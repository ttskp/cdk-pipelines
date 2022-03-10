import { Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { Stack } from 'aws-cdk-lib/core';
import { BuildSpecPipeline } from '../BuildSpecPipeline';
import { BuildProjectFeature } from './core';

function stamp(template: string, params: Record<string, string>) {
  // @ts-ignore
  const { domain, repo, account } = params;
  return eval('`'+template+'`');
}

const toolTemplate: Record<string, Record<string, Array<any>>> = {
  'npm': {
    preBuild: [
      'aws codeartifact login --tool npm --domain ${domain} --repository ${repo} --domain-owner ${account}',
    ],
  },
  'jsii-npm': {
    postBuild: [
      'export NPM_REGISTRY=\\`aws codeartifact get-repository-endpoint --domain ${domain} --repository ${repo} --format npm --query repositoryEndpoint --output text\\`',
      'export NPM_TOKEN=$CODEARTIFACT_AUTH_TOKEN',
    ],
  },
  'pip': {
    preBuild: ['aws codeartifact login --tool pip --domain ${domain} --repository ${repo} --domain-owner ${account}'],
  },
  'jsii-twine': {
    postBuild: [
      'export TWINE_REPOSITORY_URL=\\`aws codeartifact get-repository-endpoint --domain ${domain} --repository ${repo} --format pypi --query repositoryEndpoint --output text\\`',
      'export TWINE_USERNAME=aws',
      'export TWINE_PASSWORD=$CODEARTIFACT_AUTH_TOKEN',
    ],
  },
};

export interface CodeArtifactFeatureProps {
  readonly domain: string;
  readonly repos: Record<string, string>;
}

export class CodeArtifactFeature extends BuildProjectFeature {

  constructor(pipeline: BuildSpecPipeline) {

    super();

    const params: CodeArtifactFeatureProps = pipeline.buildSpec.env?.['code-artifact'];

    if (params?.domain && params?.repos) {

      const region = Stack.of(pipeline).region;
      const account = Stack.of(pipeline).account;
      const domain = params.domain;

      this.policyStatements.push(new PolicyStatement({
        actions: ['codeartifact:*'],
        resources: [
          `arn:aws:codeartifact:${region}:${account}:domain/${params.domain}`,
          `arn:aws:codeartifact:${region}:${account}:package/${params.domain}/*`,
          `arn:aws:codeartifact:${region}:${account}:repository/${params.domain}/*`,
        ],
        effect: Effect.ALLOW,
      }));

      this.policyStatements.push(new PolicyStatement({
        actions: ['sts:GetServiceBearerToken'],
        resources: ['*'],
        effect: Effect.ALLOW,
        conditions: {
          StringEquals: {
            'sts:AWSServiceName': 'codeartifact.amazonaws.com',
          },
        },
      }));

      this.preBuildCommands.push(
        `export CODEARTIFACT_AUTH_TOKEN=\`aws codeartifact get-authorization-token --domain ${domain} --query authorizationToken --output text\``,
      );

      Object.keys(params.repos).forEach(repo => {
        Object.values(params.repos[repo]).forEach(tool => {
          toolTemplate[tool]?.preBuild?.forEach(t => this.preBuildCommands.push(stamp(t, { domain, repo, account })));
          toolTemplate[tool]?.postBuild?.forEach(t => this.postBuildCommands.push(stamp(t, { domain, repo, account })));
        });
      });
    }
  }
}

