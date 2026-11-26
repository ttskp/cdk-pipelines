import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({

  name: 'cdk-pipelines',
  packageName: '@ttskp/cdk-pipelines',
  npmTrustedPublishing: true,

  author: 'tts Knowledge Products GmbH',
  authorAddress: 'info@tt-s.com',
  authorOrganization: true,

  repositoryUrl: 'https://github.com/ttskp/cdk-pipelines.git',
  defaultReleaseBranch: 'main',

  gitignore: ['.idea/', 'cdk.out/', 'cdk.context.json'],

  bundledDeps: ['yaml'],
  devDeps: [
    'ts-node',
    '@aws-sdk/client-cloudformation',
    '@aws-sdk/client-sts',
  ],

  deps: [
  ],

  dependabot: true,

  cdkVersion: '2.278.0',
  jsiiVersion: '~6.0.0',
  packageManager: javascript.NodePackageManager.NPM,
  projenrcTs: true,
});
project.synth();