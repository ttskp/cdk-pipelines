import { App, Stack, StackProps } from 'aws-cdk-lib';
import { Topic } from 'aws-cdk-lib/aws-sns';
import { CodePipelineSource } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';
import { AdditionalTrigger } from '../src/mixins';
import { DeploymentTargetsSource, MultiDeployCodePipeline } from '../src/pipelines';
import { SynthProfiles } from '../src/util';

// cdk --app "npx ts-node examples/multiDeploy.integ.ts" synth

const app = new App();

const stack = new Stack(app, 'tts-cdk-pipelines-multiDeploy-integ-test', {
  env: {
    account: '1234',
    region: 'eu-west-1',
  }
});

class AppStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);
    new Topic(this, 'Topic');
  }
}

const DEV = '/pipelines/stages/dev';
const PROD = '/pipelines/stages/prod';

new MultiDeployCodePipeline(stack, 'MultiDeployCodePipeline', {

  synth: SynthProfiles.projenCdkApp(
    CodePipelineSource.gitHub('ttskp/cdk-pipelines', 'main')
  ),

  deploymentStages: [{
    name: 'dev',
    targets: DeploymentTargetsSource.ssmParameter(DEV),
    stackFactory: ((scope, env) => new AppStack(scope, 'test-multi-deploy', { env }))
  }, {
    name: 'prod',
    targets: DeploymentTargetsSource.ssmParameter(PROD),
    stackFactory: ((scope, env) => new AppStack(scope, 'test-multi-deploy', { env }))
  }],

  mixins: [
    AdditionalTrigger.ssmParameterChange(DEV, PROD),
  ],

});

app.synth()
