# CDK (Code) Pipeline Constructs

## Pipeline Constructs

### `MultiDeployCodePipeline` [![Status badge](https://img.shields.io/badge/Status-Working-green.svg)](https://shields.io/)

A [`CodePipeline`](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.pipelines.CodePipeline.html) for conveniently deploy across multiple stages, multiple accounts and multiple regions.

Support for:
* [![Status badge](https://img.shields.io/badge/Status-Working-green.svg)](https://shields.io/) Deployment Stages and Targets from different sources (SSM parameters, AWS Organization)
* [![Status badge](https://img.shields.io/badge/Status-Working-green.svg)](https://shields.io/) Additional Triggers, e.g. if an SSM parameter changes
* [![Status badge](https://img.shields.io/badge/Status-InProgress-yellow.svg)](https://shields.io/) Idempotent Stack deployment (similar to StackSets)
* [![Status badge](https://img.shields.io/badge/Status-InProgress-yellow.svg)](https://shields.io/) Auto Approve/Reject of manual approval actions based on git-tags or conventional commits

### `PackerBuildPipeline` [![Status badge](https://img.shields.io/badge/Status-Idea-yellow.svg)](https://shields.io/)

A [`MultiDeployCdkPipeline`]() for creating and distributing EC2 Machine Images (AMIs) across multiple accounts and regions. AMI Ids are stored in SSM parameters, similar to AWS's public parameters for Amazon Linux.

### `BuildSpecPipeline` [![Status badge](https://img.shields.io/badge/Status-Working-green.svg)](https://shields.io/)

A convenience [`Pipeline`](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_codepipeline.Pipeline.html) intented to perform an arbitrary build tasks described in an [AWS CodeBuild Buildspec](https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html) file. 

The Buildspec file can either be provided as an object using the property `buildspec` or a path to a project file using the property `buildSpecFile` or if none is provided as a property, the construct tries to read the Buildspec from the file `buildspec.yml` located in the project root directory.

`BuildSpecPipeline` allows you to simplify access to AWS CodeArtifact by adding a non-standard property to the `env` node called `code-artifact`. If this property is present, `BuildSpecPipeline` will add all commands to automatically login to AWS CodeArtifact repositories. You don't have to add those commands as part of the build stage. Currently, only `pip` and `npm` repositories are supported.

<dl>
    <dt>Python: <code>pip</code>, <code>jsii-twine</code>:</dt>
    <dd>Uses AWS CLI to log into an AWS CodeArtifact <code>pip</code>-repository before <code>preBuild</code> and sets a CodeArtifact authentication token for <code>twine</code> before <code>postBuild</code>.</dd>
    <dt>NodeJs: <code>npm</code>, <code>jsii-npm</code>:</dt>
    <dd>Uses AWS CLI to log into an AWS CodeArtifact <code>npm</code>-repository before <code>preBuild</code> and sets a CodeArtifact authentication token for <code>npm</code>-registry before <code>postBuild</code>.</dd>
</dl>

`BuildSpecPipeline` has the following restrictions:
* Only AWS CodeCommit repositories are supported.
* Deployments have to be scripted as part of the BuildSpec
* No Self-Mutate
