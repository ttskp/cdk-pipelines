import { CodeBuildStep, IFileSetProducer } from 'aws-cdk-lib/pipelines';

export class SynthProfiles {

  public static projenCdkApp(): IFileSetProducer {
    return new CodeBuildStep('Synth', {
      commands: [
        'yarn install',
        'npx projen',
        'npx cdk synth',
      ],
    });
  }

}