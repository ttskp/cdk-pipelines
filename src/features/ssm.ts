import { Effect, PolicyStatement } from '@aws-cdk/aws-iam';
import { Stack } from '@aws-cdk/core';
import { BuildSpecPipeline } from '../BuildSpecPipeline';
import { BuildProjectFeature } from './core';

export class SSMParametersFeature extends BuildProjectFeature {

  constructor(pipeline: BuildSpecPipeline) {

    super();

    const region = Stack.of(pipeline).region;
    const account = Stack.of(pipeline).account;

    const parameters: Array<string> = Object.values(pipeline.buildSpec.env?.['parameter-store'] ?? []);

    if (parameters.length > 0) {
      this.policyStatements.push(new PolicyStatement({
        effect: Effect.ALLOW,
        actions: ['ssm:GetParameters', 'ssm:GetParameter'],
        resources: parameters.map((param: string) => `arn:aws:ssm:${region}:${account}:parameter${param}`),
      }));
    }
  }
}
