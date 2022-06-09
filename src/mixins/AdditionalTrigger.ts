import { Stack } from 'aws-cdk-lib';
import { Rule, Schedule } from 'aws-cdk-lib/aws-events';
import { CodePipeline as CodePipelineTarget } from 'aws-cdk-lib/aws-events-targets';
import { CodePipeline } from 'aws-cdk-lib/pipelines';
import { CodePipelineMixin } from './Mixin';

export abstract class AdditionalTrigger {

  public static ssmParameterChange(...parameterNames: string[]): CodePipelineMixin {
    return new SsmParameterChangeTrigger(parameterNames);
  }

  public static schedule(schedule: Schedule): CodePipelineMixin {
    return new ScheduledTrigger(schedule);
  }
}

class ScheduledTrigger extends CodePipelineMixin {

  readonly schedule: Schedule;

  constructor(schedule: Schedule) {
    super();
    this.schedule = schedule;
  }

  postDoBuildPipeline(_codePipeline: CodePipeline) {
    new Rule(Stack.of(_codePipeline), 'ScheduledTriggerRule', {
      schedule: this.schedule,
      targets: [new CodePipelineTarget(_codePipeline.pipeline)],
    });
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
