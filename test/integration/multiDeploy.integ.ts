import { App, Stack, StackProps } from "aws-cdk-lib";
import { Topic } from "aws-cdk-lib/aws-sns";
import { Construct } from "constructs";
import { MultiDeployCodePipeline } from "../../src/pipelines/MultiDeployCodePipeline"
import { SynthProfiles } from "../../src/pipelines/synthProfiles"
import { DeploymentTargetsSource } from "../../src/pipelines/deploymentTargets"

// cdk --app "npx ts-node test/integration/multiDeploy.integ.ts" synth

const app = new App();

const stack = new Stack(app, 'tts-cdk-pipelines-multiDeploy-integ-test');

class AppStack extends Stack {
    constructor(scope: Construct, id: string, props: StackProps) {
      super(scope, id, props);
      new Topic(this, 'Topic');
    }
  }
  
new MultiDeployCodePipeline(stack, 'MultiDeployCodePipeline', {

    synth: SynthProfiles.projenCdkApp(),
    
    deploymentStages: [{
      name: 'dev',
      targets: DeploymentTargetsSource.ssmParameter('/pipelines/stages/dev'),
      stackFactory: ((scope, env) => new AppStack(scope, 'test-multi-deploy', { env }))
    }, {
      name: 'prod',
      targets: DeploymentTargetsSource.ssmParameter('/pipelines/stages/prod'),
      stackFactory: ((scope, env) => new AppStack(scope, 'test-multi-deploy', { env }))
    }],
  
  });

  app.synth()
  