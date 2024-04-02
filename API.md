# API Reference

**Classes**

Name|Description
----|-----------
[AdditionalTrigger](#tts-cdk-build-pipelines-additionaltrigger)|Convenience class to create additional trigger {CodePipelineMixin}s for executing a CodePipeline if certain events occur other than a code change.
[BuildProjectFeature](#tts-cdk-build-pipelines-buildprojectfeature)|*No description*
[BuildSpecPipeline](#tts-cdk-build-pipelines-buildspecpipeline)|*No description*
[CleanupStacksMixin](#tts-cdk-build-pipelines-cleanupstacksmixin)|*No description*
[CodeArtifactFeature](#tts-cdk-build-pipelines-codeartifactfeature)|*No description*
[CodePipelineMixin](#tts-cdk-build-pipelines-codepipelinemixin)|*No description*
[DeploymentTargetsSource](#tts-cdk-build-pipelines-deploymenttargetssource)|*No description*
[MultiDeployCodePipeline](#tts-cdk-build-pipelines-multideploycodepipeline)|*No description*
[NoopStackFactory](#tts-cdk-build-pipelines-noopstackfactory)|*No description*
[SSMParametersFeature](#tts-cdk-build-pipelines-ssmparametersfeature)|*No description*
[StackFactoryApplicationStage](#tts-cdk-build-pipelines-stackfactoryapplicationstage)|*No description*
[SynthCommands](#tts-cdk-build-pipelines-synthcommands)|*No description*
[SynthProfiles](#tts-cdk-build-pipelines-synthprofiles)|*No description*


**Structs**

Name|Description
----|-----------
[BuildSpecPipelineProps](#tts-cdk-build-pipelines-buildspecpipelineprops)|*No description*
[CodeArtifactFeatureProps](#tts-cdk-build-pipelines-codeartifactfeatureprops)|*No description*
[DeploymentStage](#tts-cdk-build-pipelines-deploymentstage)|*No description*
[DeploymentTarget](#tts-cdk-build-pipelines-deploymenttarget)|*No description*
[MultiDeployCodePipelineProps](#tts-cdk-build-pipelines-multideploycodepipelineprops)|*No description*


**Interfaces**

Name|Description
----|-----------
[IDeploymentTargetsProvider](#tts-cdk-build-pipelines-ideploymenttargetsprovider)|*No description*
[IStackFactory](#tts-cdk-build-pipelines-istackfactory)|*No description*



## class AdditionalTrigger  <a id="tts-cdk-build-pipelines-additionaltrigger"></a>

Convenience class to create additional trigger {CodePipelineMixin}s for executing a CodePipeline if certain events occur other than a code change.


### Initializer




```ts
new AdditionalTrigger()
```



### Methods


#### *static* schedule(schedule) <a id="tts-cdk-build-pipelines-additionaltrigger-schedule"></a>

Create an additional trigger {CodePipelineMixin} based on a schedule.

```ts
static schedule(schedule: Schedule): CodePipelineMixin
```

* **schedule** (<code>[aws_events.Schedule](#aws-cdk-lib-aws-events-schedule)</code>)  *No description*

__Returns__:
* <code>[CodePipelineMixin](#tts-cdk-build-pipelines-codepipelinemixin)</code>

#### *static* ssmParameterChange(...parameterNames) <a id="tts-cdk-build-pipelines-additionaltrigger-ssmparameterchange"></a>

Create an additional trigger {CodePipelineMixin} for a SSM parameter value change.

```ts
static ssmParameterChange(...parameterNames: string[]): CodePipelineMixin
```

* **parameterNames** (<code>string</code>)  *No description*

__Returns__:
* <code>[CodePipelineMixin](#tts-cdk-build-pipelines-codepipelinemixin)</code>



## class BuildProjectFeature  <a id="tts-cdk-build-pipelines-buildprojectfeature"></a>




### Initializer




```ts
new BuildProjectFeature()
```




### Properties


Name | Type | Description 
-----|------|-------------
**policyStatements** | <code>Array<[aws_iam.PolicyStatement](#aws-cdk-lib-aws-iam-policystatement)></code> | <span></span>
**postBuildCommands** | <code>Array<string></code> | <span></span>
**preBuildCommands** | <code>Array<string></code> | <span></span>



## class BuildSpecPipeline  <a id="tts-cdk-build-pipelines-buildspecpipeline"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IDependable](#constructs-idependable)
__Extends__: [Construct](#constructs-construct)

### Initializer




```ts
new BuildSpecPipeline(scope: Construct, name: string, props?: BuildSpecPipelineProps)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **name** (<code>string</code>)  *No description*
* **props** (<code>[BuildSpecPipelineProps](#tts-cdk-build-pipelines-buildspecpipelineprops)</code>)  *No description*
  * **branch** (<code>string</code>)  *No description* __*Optional*__
  * **buildEnvironment** (<code>[aws_codebuild.BuildEnvironment](#aws-cdk-lib-aws-codebuild-buildenvironment)</code>)  *No description* __*Optional*__
  * **buildSpec** (<code>Map<string, any></code>)  *No description* __*Optional*__
  * **buildSpecFile** (<code>string</code>)  *No description* __*Optional*__
  * **existingRepositoryObj** (<code>[aws_codecommit.Repository](#aws-cdk-lib-aws-codecommit-repository)</code>)  *No description* __*Optional*__
  * **projectDescription** (<code>string</code>)  *No description* __*Optional*__
  * **projectName** (<code>string</code>)  *No description* __*Optional*__
  * **repositoryProps** (<code>[aws_codecommit.RepositoryProps](#aws-cdk-lib-aws-codecommit-repositoryprops)</code>)  *No description* __*Optional*__
  * **retainRepository** (<code>boolean</code>)  *No description* __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**buildSpec** | <code>Map<string, any></code> | <span></span>
**codebuildProject** | <code>[aws_codebuild.PipelineProject](#aws-cdk-lib-aws-codebuild-pipelineproject)</code> | <span></span>
**features** | <code>Array<[BuildProjectFeature](#tts-cdk-build-pipelines-buildprojectfeature)></code> | <span></span>
**pipeline** | <code>[aws_codepipeline.Pipeline](#aws-cdk-lib-aws-codepipeline-pipeline)</code> | <span></span>
**props** | <code>[BuildSpecPipelineProps](#tts-cdk-build-pipelines-buildspecpipelineprops)</code> | <span></span>
**repository** | <code>[aws_codecommit.Repository](#aws-cdk-lib-aws-codecommit-repository)</code> | <span></span>



## class CleanupStacksMixin  <a id="tts-cdk-build-pipelines-cleanupstacksmixin"></a>



__Extends__: [CodePipelineMixin](#tts-cdk-build-pipelines-codepipelinemixin)

### Initializer




```ts
new CleanupStacksMixin(skipDeletion?: boolean, qualifier?: string)
```

* **skipDeletion** (<code>boolean</code>)  *No description*
* **qualifier** (<code>string</code>)  *No description*


### Methods


#### preDoBuildPipeline(_codePipeline) <a id="tts-cdk-build-pipelines-cleanupstacksmixin-predobuildpipeline"></a>



```ts
preDoBuildPipeline(_codePipeline: CodePipeline): void
```

* **_codePipeline** (<code>[pipelines.CodePipeline](#aws-cdk-lib-pipelines-codepipeline)</code>)  *No description*






## class CodeArtifactFeature  <a id="tts-cdk-build-pipelines-codeartifactfeature"></a>



__Extends__: [BuildProjectFeature](#tts-cdk-build-pipelines-buildprojectfeature)

### Initializer




```ts
new CodeArtifactFeature(pipeline: BuildSpecPipeline)
```

* **pipeline** (<code>[BuildSpecPipeline](#tts-cdk-build-pipelines-buildspecpipeline)</code>)  *No description*




## class CodePipelineMixin  <a id="tts-cdk-build-pipelines-codepipelinemixin"></a>



__Implemented by__: [CleanupStacksMixin](#tts-cdk-build-pipelines-cleanupstacksmixin)
__Obtainable from__: [AdditionalTrigger](#tts-cdk-build-pipelines-additionaltrigger).[schedule](#tts-cdk-build-pipelines-additionaltrigger#tts-cdk-build-pipelines-additionaltrigger-schedule)(), [AdditionalTrigger](#tts-cdk-build-pipelines-additionaltrigger).[ssmParameterChange](#tts-cdk-build-pipelines-additionaltrigger#tts-cdk-build-pipelines-additionaltrigger-ssmparameterchange)()

### Initializer




```ts
new CodePipelineMixin()
```



### Methods


#### postDoBuildPipeline(_codePipeline) <a id="tts-cdk-build-pipelines-codepipelinemixin-postdobuildpipeline"></a>



```ts
postDoBuildPipeline(_codePipeline: CodePipeline): void
```

* **_codePipeline** (<code>[pipelines.CodePipeline](#aws-cdk-lib-pipelines-codepipeline)</code>)  *No description*




#### preDoBuildPipeline(_codePipeline) <a id="tts-cdk-build-pipelines-codepipelinemixin-predobuildpipeline"></a>



```ts
preDoBuildPipeline(_codePipeline: CodePipeline): void
```

* **_codePipeline** (<code>[pipelines.CodePipeline](#aws-cdk-lib-pipelines-codepipeline)</code>)  *No description*






## class DeploymentTargetsSource  <a id="tts-cdk-build-pipelines-deploymenttargetssource"></a>




### Initializer




```ts
new DeploymentTargetsSource()
```



### Methods


#### *static* ssmParameter(name) <a id="tts-cdk-build-pipelines-deploymenttargetssource-ssmparameter"></a>



```ts
static ssmParameter(name: string): IDeploymentTargetsProvider
```

* **name** (<code>string</code>)  *No description*

__Returns__:
* <code>[IDeploymentTargetsProvider](#tts-cdk-build-pipelines-ideploymenttargetsprovider)</code>

#### *static* staticValue(targets) <a id="tts-cdk-build-pipelines-deploymenttargetssource-staticvalue"></a>



```ts
static staticValue(targets: Array<DeploymentTarget>): IDeploymentTargetsProvider
```

* **targets** (<code>Array<[DeploymentTarget](#tts-cdk-build-pipelines-deploymenttarget)></code>)  *No description*

__Returns__:
* <code>[IDeploymentTargetsProvider](#tts-cdk-build-pipelines-ideploymenttargetsprovider)</code>



## class MultiDeployCodePipeline  <a id="tts-cdk-build-pipelines-multideploycodepipeline"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IDependable](#constructs-idependable)
__Extends__: [pipelines.CodePipeline](#aws-cdk-lib-pipelines-codepipeline)

### Initializer




```ts
new MultiDeployCodePipeline(scope: Construct, id: string, props: MultiDeployCodePipelineProps)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[MultiDeployCodePipelineProps](#tts-cdk-build-pipelines-multideploycodepipelineprops)</code>)  *No description*
  * **synth** (<code>[pipelines.IFileSetProducer](#aws-cdk-lib-pipelines-ifilesetproducer)</code>)  The build step that produces the CDK Cloud Assembly. 
  * **artifactBucket** (<code>[aws_s3.IBucket](#aws-cdk-lib-aws-s3-ibucket)</code>)  An existing S3 Bucket to use for storing the pipeline's artifact. __*Default*__: A new S3 bucket will be created.
  * **assetPublishingCodeBuildDefaults** (<code>[pipelines.CodeBuildOptions](#aws-cdk-lib-pipelines-codebuildoptions)</code>)  Additional customizations to apply to the asset publishing CodeBuild projects. __*Default*__: Only `codeBuildDefaults` are applied
  * **cliVersion** (<code>string</code>)  CDK CLI version to use in self-mutation and asset publishing steps. __*Default*__: Latest version
  * **codeBuildDefaults** (<code>[pipelines.CodeBuildOptions](#aws-cdk-lib-pipelines-codebuildoptions)</code>)  Customize the CodeBuild projects created for this pipeline. __*Default*__: All projects run non-privileged build, SMALL instance, LinuxBuildImage.STANDARD_7_0
  * **codePipeline** (<code>[aws_codepipeline.Pipeline](#aws-cdk-lib-aws-codepipeline-pipeline)</code>)  An existing Pipeline to be reused and built upon. __*Default*__: a new underlying pipeline is created.
  * **crossAccountKeys** (<code>boolean</code>)  Create KMS keys for the artifact buckets, allowing cross-account deployments. __*Default*__: false
  * **dockerCredentials** (<code>Array<[pipelines.DockerCredential](#aws-cdk-lib-pipelines-dockercredential)></code>)  A list of credentials used to authenticate to Docker registries. __*Default*__: []
  * **dockerEnabledForSelfMutation** (<code>boolean</code>)  Enable Docker for the self-mutate step. __*Default*__: false
  * **dockerEnabledForSynth** (<code>boolean</code>)  Enable Docker for the 'synth' step. __*Default*__: false
  * **enableKeyRotation** (<code>boolean</code>)  Enable KMS key rotation for the generated KMS keys. __*Default*__: false (key rotation is disabled)
  * **pipelineName** (<code>string</code>)  The name of the CodePipeline pipeline. __*Default*__: Automatically generated
  * **publishAssetsInParallel** (<code>boolean</code>)  Publish assets in multiple CodeBuild projects. __*Default*__: true
  * **reuseCrossRegionSupportStacks** (<code>boolean</code>)  Reuse the same cross region support stack for all pipelines in the App. __*Default*__: true (Use the same support stack for all pipelines in App)
  * **role** (<code>[aws_iam.IRole](#aws-cdk-lib-aws-iam-irole)</code>)  The IAM role to be assumed by this Pipeline. __*Default*__: A new role is created
  * **selfMutation** (<code>boolean</code>)  Whether the pipeline will update itself. __*Default*__: true
  * **selfMutationCodeBuildDefaults** (<code>[pipelines.CodeBuildOptions](#aws-cdk-lib-pipelines-codebuildoptions)</code>)  Additional customizations to apply to the self mutation CodeBuild projects. __*Default*__: Only `codeBuildDefaults` are applied
  * **synthCodeBuildDefaults** (<code>[pipelines.CodeBuildOptions](#aws-cdk-lib-pipelines-codebuildoptions)</code>)  Additional customizations to apply to the synthesize CodeBuild projects. __*Default*__: Only `codeBuildDefaults` are applied
  * **useChangeSets** (<code>boolean</code>)  Deploy every stack by creating a change set and executing it. __*Default*__: true
  * **deploymentStages** (<code>Array<[DeploymentStage](#tts-cdk-build-pipelines-deploymentstage)></code>)  *No description* 
  * **crossRegionReplicationBuckets** (<code>Map<string, [aws_s3.IBucket](#aws-cdk-lib-aws-s3-ibucket)></code>)  *No description* __*Optional*__
  * **mixins** (<code>Array<[CodePipelineMixin](#tts-cdk-build-pipelines-codepipelinemixin)></code>)  *No description* __*Optional*__
  * **restartExecutionOnUpdate** (<code>boolean</code>)  *No description* __*Optional*__
  * **stackFactory** (<code>[IStackFactory](#tts-cdk-build-pipelines-istackfactory)</code>)  *No description* __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**mdcProps** | <code>[MultiDeployCodePipelineProps](#tts-cdk-build-pipelines-multideploycodepipelineprops)</code> | <span></span>
**stacks** | <code>Array<[Stack](#aws-cdk-lib-stack)></code> | <span></span>

### Methods


#### protected doBuildPipeline() <a id="tts-cdk-build-pipelines-multideploycodepipeline-dobuildpipeline"></a>

Implemented by subclasses to do the actual pipeline construction.

```ts
protected doBuildPipeline(): void
```







## class NoopStackFactory  <a id="tts-cdk-build-pipelines-noopstackfactory"></a>



__Implements__: [IStackFactory](#tts-cdk-build-pipelines-istackfactory)

### Initializer




```ts
new NoopStackFactory()
```



### Methods


#### create(scope, env) <a id="tts-cdk-build-pipelines-noopstackfactory-create"></a>



```ts
create(scope: Construct, env: Environment): Stack
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **env** (<code>[Environment](#aws-cdk-lib-environment)</code>)  *No description*
  * **account** (<code>string</code>)  The AWS account ID for this environment. __*Default*__: Aws.ACCOUNT_ID which means that the stack will be account-agnostic.
  * **region** (<code>string</code>)  The AWS region for this environment. __*Default*__: Aws.REGION which means that the stack will be region-agnostic.

__Returns__:
* <code>[Stack](#aws-cdk-lib-stack)</code>



## class SSMParametersFeature  <a id="tts-cdk-build-pipelines-ssmparametersfeature"></a>



__Extends__: [BuildProjectFeature](#tts-cdk-build-pipelines-buildprojectfeature)

### Initializer




```ts
new SSMParametersFeature(pipeline: BuildSpecPipeline)
```

* **pipeline** (<code>[BuildSpecPipeline](#tts-cdk-build-pipelines-buildspecpipeline)</code>)  *No description*




## class StackFactoryApplicationStage  <a id="tts-cdk-build-pipelines-stackfactoryapplicationstage"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IDependable](#constructs-idependable)
__Extends__: [Stage](#aws-cdk-lib-stage)

### Initializer




```ts
new StackFactoryApplicationStage(scope: Construct, id: string, props: StageProps, stackFactory: IStackFactory)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[StageProps](#aws-cdk-lib-stageprops)</code>)  *No description*
* **stackFactory** (<code>[IStackFactory](#tts-cdk-build-pipelines-istackfactory)</code>)  *No description*



### Properties


Name | Type | Description 
-----|------|-------------
**stack** | <code>[Stack](#aws-cdk-lib-stack)</code> | <span></span>



## class SynthCommands  <a id="tts-cdk-build-pipelines-synthcommands"></a>




### Initializer




```ts
new SynthCommands()
```




### Properties


Name | Type | Description 
-----|------|-------------
*static* **projenCdkApp** | <code>Array<string></code> | <span></span>



## class SynthProfiles  <a id="tts-cdk-build-pipelines-synthprofiles"></a>




### Initializer




```ts
new SynthProfiles()
```



### Methods


#### *static* projenCdkApp(input?) <a id="tts-cdk-build-pipelines-synthprofiles-projencdkapp"></a>



```ts
static projenCdkApp(input?: IFileSetProducer): IFileSetProducer
```

* **input** (<code>[pipelines.IFileSetProducer](#aws-cdk-lib-pipelines-ifilesetproducer)</code>)  *No description*

__Returns__:
* <code>[pipelines.IFileSetProducer](#aws-cdk-lib-pipelines-ifilesetproducer)</code>



## struct BuildSpecPipelineProps  <a id="tts-cdk-build-pipelines-buildspecpipelineprops"></a>






Name | Type | Description 
-----|------|-------------
**branch**? | <code>string</code> | __*Optional*__
**buildEnvironment**? | <code>[aws_codebuild.BuildEnvironment](#aws-cdk-lib-aws-codebuild-buildenvironment)</code> | __*Optional*__
**buildSpec**? | <code>Map<string, any></code> | __*Optional*__
**buildSpecFile**? | <code>string</code> | __*Optional*__
**existingRepositoryObj**? | <code>[aws_codecommit.Repository](#aws-cdk-lib-aws-codecommit-repository)</code> | __*Optional*__
**projectDescription**? | <code>string</code> | __*Optional*__
**projectName**? | <code>string</code> | __*Optional*__
**repositoryProps**? | <code>[aws_codecommit.RepositoryProps](#aws-cdk-lib-aws-codecommit-repositoryprops)</code> | __*Optional*__
**retainRepository**? | <code>boolean</code> | __*Optional*__



## struct CodeArtifactFeatureProps  <a id="tts-cdk-build-pipelines-codeartifactfeatureprops"></a>






Name | Type | Description 
-----|------|-------------
**domain** | <code>string</code> | <span></span>
**repos** | <code>Map<string, string></code> | <span></span>



## struct DeploymentStage  <a id="tts-cdk-build-pipelines-deploymentstage"></a>






Name | Type | Description 
-----|------|-------------
**name** | <code>string</code> | <span></span>
**targets** | <code>[IDeploymentTargetsProvider](#tts-cdk-build-pipelines-ideploymenttargetsprovider)</code> | <span></span>
**post**? | <code>Array<[pipelines.Step](#aws-cdk-lib-pipelines-step)></code> | __*Optional*__
**pre**? | <code>Array<[pipelines.Step](#aws-cdk-lib-pipelines-step)></code> | __*Optional*__
**requireManualApproval**? | <code>boolean</code> | __*Optional*__
**stackFactory**? | <code>[IStackFactory](#tts-cdk-build-pipelines-istackfactory)</code> | __*Optional*__



## struct DeploymentTarget  <a id="tts-cdk-build-pipelines-deploymenttarget"></a>






Name | Type | Description 
-----|------|-------------
**account** | <code>string</code> | <span></span>
**region** | <code>string</code> | <span></span>
**name**? | <code>string</code> | __*Optional*__



## interface IDeploymentTargetsProvider  <a id="tts-cdk-build-pipelines-ideploymenttargetsprovider"></a>

__Obtainable from__: [DeploymentTargetsSource](#tts-cdk-build-pipelines-deploymenttargetssource).[ssmParameter](#tts-cdk-build-pipelines-deploymenttargetssource#tts-cdk-build-pipelines-deploymenttargetssource-ssmparameter)(), [DeploymentTargetsSource](#tts-cdk-build-pipelines-deploymenttargetssource).[staticValue](#tts-cdk-build-pipelines-deploymenttargetssource#tts-cdk-build-pipelines-deploymenttargetssource-staticvalue)()


### Methods


#### provide(scope) <a id="tts-cdk-build-pipelines-ideploymenttargetsprovider-provide"></a>



```ts
provide(scope: Construct): Array<DeploymentTarget>
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*

__Returns__:
* <code>Array<[DeploymentTarget](#tts-cdk-build-pipelines-deploymenttarget)></code>



## interface IStackFactory  <a id="tts-cdk-build-pipelines-istackfactory"></a>

__Implemented by__: [NoopStackFactory](#tts-cdk-build-pipelines-noopstackfactory)


### Methods


#### create(scope, env) <a id="tts-cdk-build-pipelines-istackfactory-create"></a>



```ts
create(scope: Construct, env: Environment): Stack
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **env** (<code>[Environment](#aws-cdk-lib-environment)</code>)  *No description*
  * **account** (<code>string</code>)  The AWS account ID for this environment. __*Default*__: Aws.ACCOUNT_ID which means that the stack will be account-agnostic.
  * **region** (<code>string</code>)  The AWS region for this environment. __*Default*__: Aws.REGION which means that the stack will be region-agnostic.

__Returns__:
* <code>[Stack](#aws-cdk-lib-stack)</code>



## struct MultiDeployCodePipelineProps  <a id="tts-cdk-build-pipelines-multideploycodepipelineprops"></a>






Name | Type | Description 
-----|------|-------------
**deploymentStages** | <code>Array<[DeploymentStage](#tts-cdk-build-pipelines-deploymentstage)></code> | <span></span>
**synth** | <code>[pipelines.IFileSetProducer](#aws-cdk-lib-pipelines-ifilesetproducer)</code> | The build step that produces the CDK Cloud Assembly.
**artifactBucket**? | <code>[aws_s3.IBucket](#aws-cdk-lib-aws-s3-ibucket)</code> | An existing S3 Bucket to use for storing the pipeline's artifact.<br/>__*Default*__: A new S3 bucket will be created.
**assetPublishingCodeBuildDefaults**? | <code>[pipelines.CodeBuildOptions](#aws-cdk-lib-pipelines-codebuildoptions)</code> | Additional customizations to apply to the asset publishing CodeBuild projects.<br/>__*Default*__: Only `codeBuildDefaults` are applied
**cliVersion**? | <code>string</code> | CDK CLI version to use in self-mutation and asset publishing steps.<br/>__*Default*__: Latest version
**codeBuildDefaults**? | <code>[pipelines.CodeBuildOptions](#aws-cdk-lib-pipelines-codebuildoptions)</code> | Customize the CodeBuild projects created for this pipeline.<br/>__*Default*__: All projects run non-privileged build, SMALL instance, LinuxBuildImage.STANDARD_7_0
**codePipeline**? | <code>[aws_codepipeline.Pipeline](#aws-cdk-lib-aws-codepipeline-pipeline)</code> | An existing Pipeline to be reused and built upon.<br/>__*Default*__: a new underlying pipeline is created.
**crossAccountKeys**? | <code>boolean</code> | Create KMS keys for the artifact buckets, allowing cross-account deployments.<br/>__*Default*__: false
**crossRegionReplicationBuckets**? | <code>Map<string, [aws_s3.IBucket](#aws-cdk-lib-aws-s3-ibucket)></code> | __*Optional*__
**dockerCredentials**? | <code>Array<[pipelines.DockerCredential](#aws-cdk-lib-pipelines-dockercredential)></code> | A list of credentials used to authenticate to Docker registries.<br/>__*Default*__: []
**dockerEnabledForSelfMutation**? | <code>boolean</code> | Enable Docker for the self-mutate step.<br/>__*Default*__: false
**dockerEnabledForSynth**? | <code>boolean</code> | Enable Docker for the 'synth' step.<br/>__*Default*__: false
**enableKeyRotation**? | <code>boolean</code> | Enable KMS key rotation for the generated KMS keys.<br/>__*Default*__: false (key rotation is disabled)
**mixins**? | <code>Array<[CodePipelineMixin](#tts-cdk-build-pipelines-codepipelinemixin)></code> | __*Optional*__
**pipelineName**? | <code>string</code> | The name of the CodePipeline pipeline.<br/>__*Default*__: Automatically generated
**publishAssetsInParallel**? | <code>boolean</code> | Publish assets in multiple CodeBuild projects.<br/>__*Default*__: true
**restartExecutionOnUpdate**? | <code>boolean</code> | __*Optional*__
**reuseCrossRegionSupportStacks**? | <code>boolean</code> | Reuse the same cross region support stack for all pipelines in the App.<br/>__*Default*__: true (Use the same support stack for all pipelines in App)
**role**? | <code>[aws_iam.IRole](#aws-cdk-lib-aws-iam-irole)</code> | The IAM role to be assumed by this Pipeline.<br/>__*Default*__: A new role is created
**selfMutation**? | <code>boolean</code> | Whether the pipeline will update itself.<br/>__*Default*__: true
**selfMutationCodeBuildDefaults**? | <code>[pipelines.CodeBuildOptions](#aws-cdk-lib-pipelines-codebuildoptions)</code> | Additional customizations to apply to the self mutation CodeBuild projects.<br/>__*Default*__: Only `codeBuildDefaults` are applied
**stackFactory**? | <code>[IStackFactory](#tts-cdk-build-pipelines-istackfactory)</code> | __*Optional*__
**synthCodeBuildDefaults**? | <code>[pipelines.CodeBuildOptions](#aws-cdk-lib-pipelines-codebuildoptions)</code> | Additional customizations to apply to the synthesize CodeBuild projects.<br/>__*Default*__: Only `codeBuildDefaults` are applied
**useChangeSets**? | <code>boolean</code> | Deploy every stack by creating a change set and executing it.<br/>__*Default*__: true



