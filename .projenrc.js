const { awscdk } = require('projen');

const project = new awscdk.AwsCdkConstructLibrary({

  name: 'build-pipelines',
  packageName: '@tts-cdk/build-pipelines',

  author: 'tts Knowledge Products GmbH',
  authorAddress: 'info@tt-s.com',
  authorOrganization: true,

  repositoryUrl: 'https://github.com/ttskp/cdk-pipelines.git',
  defaultReleaseBranch: 'main',

  gitignore: ['.idea/', 'cdk.out/', 'cdk.context.json'],

  cdkVersion: '2.31.1',
  cdkVersionPinning: true,

  bundledDeps: ['yaml'],
  devDeps: [
    'ts-node',
    '@aws-sdk/client-cloudformation',
    '@aws-sdk/client-sts',
  ],

  deps: [
  ],

  dependabot: true,

  // cdkDependencies: undefined,        /* Which AWS CDK modules (those that start with "aws-cdk-lib/") does this library require when consumed? */
  // cdkTestDependencies: undefined,    /* AWS CDK modules required for testing. */
  // deps: [],                          /* Runtime dependencies of this module. */
  // description: undefined,            /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],                       /* Build dependencies for this module. */
  // packageName: undefined,            /* The "name" in package.json. */
  // projectType: ProjectType.UNKNOWN,  /* Which type of project this is (library/app). */
  // releaseWorkflow: undefined,        /* Define a GitHub workflow for releasing from "main" when new versions are bumped. */

  /*
  publishToMaven: {
    mavenGroupId: 'com.tts.cdk',
    mavenArtifactId: 'build-pipelines',
    javaPackage: 'com.tts.cdk.buildpipelines',
    mavenRepositoryUrl: process.env.MAVEN_REPOSITORY_URL ?? '',
    mavenServerId: process.env.MAVEN_SERVER_ID ?? '',
  },
   */

  /*
  publishToPypi: {
    distName: 'tts-cdk-build-pipelines',
    module: 'tts_cdk.build_pipelines',
    twineRegistryUrl: process.env.TWINE_REPOSITORY_URL ?? '',
    twineUsernameSecret: process.env.TWINE_USERNAME ?? 'aws',
    twinePasswordSecret: process.env.TWINE_PASSWORD ?? '',
  },
   */

  // npmAccess: NpmAccess.PUBLIC,
});

project.synth();
