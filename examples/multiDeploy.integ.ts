import { App, DefaultStackSynthesizer, Environment, Stack, StackProps } from 'aws-cdk-lib';
import { Effect, PolicyStatement } from "aws-cdk-lib/aws-iam";
import { Key } from "aws-cdk-lib/aws-kms";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Topic } from 'aws-cdk-lib/aws-sns';
import { AwsCustomResource, AwsSdkCall } from "aws-cdk-lib/custom-resources";
import { CodePipelineSource } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';
import {
  AdditionalTrigger,
  CleanupStacksMixin,
  DeploymentTargetsSource,
  IStackFactory,
  MultiDeployCodePipeline,
  SynthProfiles
} from '../src';


//region Cross-region SSMParameterReader
export interface SSMParameterReaderProps {
  parameterName: string;
  region: string;
}

export class SSMParameterReader extends AwsCustomResource {
  constructor(scope: Construct, name: string, props: SSMParameterReaderProps) {
    const {
      parameterName,
      region,
    } = props;

    const ssmAwsSdkCall: AwsSdkCall = {
      service: 'SSM',
      action: 'getParameter',
      parameters: {
        Name: parameterName,
      },
      region,
      physicalResourceId: { id: Date.now().toString() }, // Update physical id to always fetch the latest version
    };

    super(scope, name, {
      onUpdate: ssmAwsSdkCall,
      policy: {
        statements: [new PolicyStatement({
            resources: ['*'],
            actions: ['ssm:GetParameter'],
            effect: Effect.ALLOW,
          },
        )],
      },
    });
  }

  public getParameterValue(): string {
    return this.getResponseField('Parameter.Value').toString();
  }
}

//endregion


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
  crossRegionReplicationBuckets: ['eu-central-1'].reduce((prev: any, current) => {
    prev[current] = Bucket.fromBucketAttributes(stack, `Bucket-${current}`, {
      bucketName: new SSMParameterReader(stack, `SSMBucketName-${current}`, {
        parameterName: '/common-support-stacks/bucket-name',
        region: current,
      }).getParameterValue(),
      encryptionKey: Key.fromKeyArn(stack, `Key-${current}`, new SSMParameterReader(stack, `SSMKeyArn-${current}`, {
        parameterName: '/common-support-stacks/key-arn',
        region: current,
      }).getParameterValue())
    });
    return prev;
  }, {}),

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
