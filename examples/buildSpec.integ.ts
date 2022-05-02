import { App, Stack } from 'aws-cdk-lib';
import { BuildSpecPipeline } from '../src/pipelines';

const app = new App();

const stack = new Stack(app, 'tts-cdk-pipelines-buildSpec-integ-test');

new BuildSpecPipeline(stack, 'BuildPipelineWithProjectName', {
  projectName: 'tts-cdk-pipelines',
});

app.synth()
