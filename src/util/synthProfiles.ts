import { CodeBuildStep, IFileSetProducer } from 'aws-cdk-lib/pipelines';

export abstract class SynthCommands {

  public static readonly projenCdkApp: string[] = [
    'yarn install',
    'npx projen',
    'npx cdk synth',
  ];

}

export abstract class SynthProfiles {

  public static projenCdkApp(input?: IFileSetProducer): IFileSetProducer {
    return new CodeBuildStep('Synth', {
      commands: SynthCommands.projenCdkApp,
      input: input,
    });
  }

}