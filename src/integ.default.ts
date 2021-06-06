import { App, Stack } from '@aws-cdk/core';
import { BuildSpecPipeline } from './BuildSpecPipeline';

const app = new App();
const stack = new Stack(app, 'tts-cdk-pipelines-integration-test');

new BuildSpecPipeline(stack, 'BuildPipelineWithProjectName', {
  projectName: 'tts-cdk-pipelines',
  // codeArtifactDomain: 'tts',
});
