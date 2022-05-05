import { Stack } from 'aws-cdk-lib';
import { Rule } from 'aws-cdk-lib/aws-events';
import { CodePipeline as CodePipelineTarget } from 'aws-cdk-lib/aws-events-targets';
import { CodePipeline } from 'aws-cdk-lib/pipelines';
import { CodePipelineMixin } from './Mixin';

export abstract class AdditionalTrigger {

  public static ssmParameterChange(...parameterNames: string[]): CodePipelineMixin {
    return new SsmParameterChangeTrigger(parameterNames);
  }
}

class SsmParameterChangeTrigger extends CodePipelineMixin {

  readonly parameterNames: string[];

  constructor(parameterNames: string[]) {
    super();
    this.parameterNames = parameterNames;
  }

  postDoBuildPipeline(_codePipeline: CodePipeline) {
    new Rule(Stack.of(_codePipeline), 'SsmParameterChangeTriggerRule', {
      targets: [new CodePipelineTarget(_codePipeline.pipeline)],
      eventPattern: {
        source: ['aws.ssm'],
        detailType: ['Parameter Store Change'],
        detail: {
          name: this.parameterNames,
          operation: [
            'Create',
            'Update',
            'LabelParameterVersion',
          ],
        },
      },
    });
  }
}
