import { Stack } from 'aws-cdk-lib';
import { Rule, Schedule } from 'aws-cdk-lib/aws-events';
import { CodePipeline as CodePipelineTarget } from 'aws-cdk-lib/aws-events-targets';
import { CodePipeline } from 'aws-cdk-lib/pipelines';
import { CodePipelineMixin } from './Mixin';

/**
 * Convenience class to create additional trigger {CodePipelineMixin}s for
 * executing a CodePipeline if certain events occur other than a code change.
 */
export abstract class AdditionalTrigger {

  /**
   * Create an additional trigger {CodePipelineMixin} for a SSM parameter value change.
   * @param parameterNames
   */
  public static ssmParameterChange(...parameterNames: string[]): CodePipelineMixin {
    return new SsmParameterChangeTrigger(parameterNames);
  }

  /**
   * Create an additional trigger {CodePipelineMixin} based on a schedule.
   * @param schedule
   */
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
