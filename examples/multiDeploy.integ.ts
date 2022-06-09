import { App, DefaultStackSynthesizer, Environment, Stack, StackProps } from 'aws-cdk-lib';
import { Topic } from 'aws-cdk-lib/aws-sns';
import { CodePipelineSource } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';
import { AdditionalTrigger } from '../src';
import { DeploymentTargetsSource, IStackFactory, MultiDeployCodePipeline } from '../src';
import { SynthProfiles } from '../src';
import { CleanupStacksMixin } from '../src';

// cdk --app "npx ts-node examples/multiDeploy.integ.ts" synth

const app = new App();

const stack = new Stack(app, 'tts-cdk-pipelines-multiDeploy-integ-test', {
  env: {
    account: '1234',
    region: 'eu-west-1',
  },
  synthesizer: new DefaultStackSynthesizer({
    qualifier: 'abcdef',
  })
});

const DEV = '/pipelines/stages/dev';
const PROD = '/pipelines/stages/prod';

class AppStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);
    new Topic(this, 'Topic');
  }
}

new MultiDeployCodePipeline(stack, 'MultiDeployCodePipeline', {

  synth: SynthProfiles.projenCdkApp(
    CodePipelineSource.gitHub('ttskp/cdk-pipelines', 'main')
  ),

  deploymentStages: [{
    name: 'dev',
    targets: DeploymentTargetsSource.ssmParameter(DEV),
    stackFactory: new (class implements IStackFactory {
      create(scope: Construct, env: Environment): Stack {
        return new AppStack(scope, 'test-multi-deploy', { env });
      }
    })(),
  }, {
    name: 'prod',
    targets: DeploymentTargetsSource.ssmParameter(PROD),
    stackFactory: new (class implements IStackFactory {
      create(scope: Construct, env: Environment): Stack {
        return new AppStack(scope, 'test-multi-deploy', { env });
      }
    })(),
  }],

  mixins: [
    AdditionalTrigger.ssmParameterChange(DEV, PROD),
    new CleanupStacksMixin(),
  ],

});

app.synth()
