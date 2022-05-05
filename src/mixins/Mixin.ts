import { CodePipeline } from 'aws-cdk-lib/pipelines';

export abstract class CodePipelineMixin {

  preDoBuildPipeline(_codePipeline: CodePipeline): void {
    // intentionally empty
  }

  postDoBuildPipeline(_codePipeline: CodePipeline): void {
    // intentionally empty
  }
}
