import { App, Stack } from 'aws-cdk-lib';
import { BuildSpecPipeline } from '../src/pipelines';

// cdk --app "npx ts-node examples/buildSpec.integ.ts" synth

const app = new App();

const stack = new Stack(app, 'tts-cdk-pipelines-buildSpec-integ-test');

new BuildSpecPipeline(stack, 'BuildPipelineWithProjectName', {
  projectName: 'tts-cdk-pipelines',
});

app.synth()
