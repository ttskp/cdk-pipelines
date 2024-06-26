// ~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".
import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

/**
 * Props for CleanupStacksFunction
 */
export interface CleanupStacksFunctionProps extends lambda.FunctionOptions {
}

/**
 * An AWS Lambda function which executes src/mixins/functions/CleanupStacks.
 */
export class CleanupStacksFunction extends lambda.Function {
  constructor(scope: Construct, id: string, props?: CleanupStacksFunctionProps) {
    super(scope, id, {
      description: 'src/mixins/functions/CleanupStacks.lambda.ts',
      ...props,
      runtime: new lambda.Runtime('nodejs18.x', lambda.RuntimeFamily.NODEJS),
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../../assets/mixins/functions/CleanupStacks.lambda')),
    });
    this.addEnvironment('AWS_NODEJS_CONNECTION_REUSE_ENABLED', '1', { removeInEdge: true });
  }
}