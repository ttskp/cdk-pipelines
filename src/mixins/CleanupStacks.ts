import { CustomResource, DefaultStackSynthesizer, Stack } from 'aws-cdk-lib';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { RetentionDays } from 'aws-cdk-lib/aws-logs';
import { Provider } from 'aws-cdk-lib/custom-resources';
import { CodePipeline } from 'aws-cdk-lib/pipelines';
import { MultiDeployCodePipeline } from '../pipelines';
import { CleanupStacksFunction } from './functions/CleanupStacks-function';
import { CodePipelineMixin } from './Mixin';


export class CleanupStacksMixin extends CodePipelineMixin {

  private readonly qualifier: string;

  constructor(cdkQualifier: string = DefaultStackSynthesizer.DEFAULT_QUALIFIER) {
    super();
    this.qualifier = cdkQualifier;
  }

  preDoBuildPipeline(_codePipeline: CodePipeline) {

    if (!(_codePipeline instanceof MultiDeployCodePipeline)) {
      console.warn('Cannot use CleanupStacks mixin for this type of pipeline. Needs to be' +
        ' MultiDeployCodePipeline.');
    }

    const multiDeployPipeline = _codePipeline as MultiDeployCodePipeline;
    const stack = Stack.of(multiDeployPipeline);

    console.log(stack.node);

    // TODO determine qualifier programmatically somehow
    //const qualifier = stack.node.tryGetContext(BOOTSTRAP_QUALIFIER_CONTEXT) ?? DefaultStackSynthesizer.DEFAULT_QUALIFIER;

    const cleanupFunction = new CleanupStacksFunction(stack, 'CleanupStacks', {
      environment: {
        CDK_QUALIFIER: this.qualifier,
      },
    });
    cleanupFunction.addToRolePolicy(new PolicyStatement({
      actions: ['sts:AssumeRole'],
      resources: [`arn:aws:iam::*:role/cdk-${this.qualifier}-deploy-role-*`],
    }));

    const provider = new Provider(stack, 'CleanupPreviousStacksProvider', {
      onEventHandler: cleanupFunction,
      logRetention: RetentionDays.ONE_MONTH,
    });

    multiDeployPipeline.stacks.forEach(({ stackName, account, region }) => {
      new CustomResource(stack, `CPS-${stackName}-${account}-${region}`, {
        serviceToken: provider.serviceToken,
        properties: {
          stackName,
          account,
          region,
        },
      });
    });

  }
}