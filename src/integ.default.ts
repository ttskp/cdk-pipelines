import { App, Stack } from '@aws-cdk/core';
import { BuildSpecPipeline } from './BuildSpecPipeline';
//import { ProjenPipeline } from './ProjenPipeline';

const app = new App();
const stack = new Stack(app, 'tts-cdk-pipelines-integration-test');

new BuildSpecPipeline(stack, 'BuildPipelineWithProjectName', {
  projectName: 'tts-cdk-pipelines',
});
/* new ProjenPipeline(stack, 'BuildPipelineWithProjectName', {
  projectName: 'tts-cdk-pipelines',
}); */
