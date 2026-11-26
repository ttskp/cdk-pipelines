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

// publib hardcodes `npm publish`; use `npm stage publish` to match OIDC trust and postpone 2FA
project.github?.tryFindWorkflow('release')?.file?.addOverride(
  'jobs.release_npm.steps.9.run',
  '[ "$PUBLIB_DRYRUN" = "true" ] && echo "dry run" || npm stage publish --tag "$NPM_DIST_TAG" --access public dist/js/*.tgz',
);
project.synth();