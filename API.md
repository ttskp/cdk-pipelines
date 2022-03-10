# API Reference

**Classes**

Name|Description
----|-----------
[BuildProjectFeature](#tts-cdk-build-pipelines-buildprojectfeature)|*No description*
[BuildSpecPipeline](#tts-cdk-build-pipelines-buildspecpipeline)|*No description*
[CodeArtifactFeature](#tts-cdk-build-pipelines-codeartifactfeature)|*No description*
[CustomExtensionPipeline](#tts-cdk-build-pipelines-customextensionpipeline)|*No description*
[SSMParametersFeature](#tts-cdk-build-pipelines-ssmparametersfeature)|*No description*


**Structs**

Name|Description
----|-----------
[BuildSpecPipelineProps](#tts-cdk-build-pipelines-buildspecpipelineprops)|*No description*
[CodeArtifactFeatureProps](#tts-cdk-build-pipelines-codeartifactfeatureprops)|*No description*
[CustomExtensionPipelineProps](#tts-cdk-build-pipelines-customextensionpipelineprops)|*No description*



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



## class CodeArtifactFeature  <a id="tts-cdk-build-pipelines-codeartifactfeature"></a>



__Extends__: [BuildProjectFeature](#tts-cdk-build-pipelines-buildprojectfeature)

### Initializer




```ts
new CodeArtifactFeature(pipeline: BuildSpecPipeline)
```

* **pipeline** (<code>[BuildSpecPipeline](#tts-cdk-build-pipelines-buildspecpipeline)</code>)  *No description*




## class CustomExtensionPipeline  <a id="tts-cdk-build-pipelines-customextensionpipeline"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IDependable](#constructs-idependable)
__Extends__: [Construct](#constructs-construct)

### Initializer




```ts
new CustomExtensionPipeline(scope: Construct, name: string, props: CustomExtensionPipelineProps)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **name** (<code>string</code>)  *No description*
* **props** (<code>[CustomExtensionPipelineProps](#tts-cdk-build-pipelines-customextensionpipelineprops)</code>)  *No description*
  * **codeArtifactDomain** (<code>string</code>)  *No description* 
  * **codeArtifactDomainOwner** (<code>string</code>)  *No description* 
  * **codeArtifactRepository** (<code>string</code>)  *No description* 
  * **distBucketName** (<code>string</code>)  *No description* 
  * **branch** (<code>string</code>)  *No description* __*Optional*__
  * **buildEnvironment** (<code>[aws_codebuild.BuildEnvironment](#aws-cdk-lib-aws-codebuild-buildenvironment)</code>)  *No description* __*Optional*__
  * **existingRepositoryObj** (<code>[aws_codecommit.Repository](#aws-cdk-lib-aws-codecommit-repository)</code>)  *No description* __*Optional*__
  * **projectDescription** (<code>string</code>)  *No description* __*Optional*__
  * **projectName** (<code>string</code>)  *No description* __*Optional*__
  * **repositoryProps** (<code>[aws_codecommit.RepositoryProps](#aws-cdk-lib-aws-codecommit-repositoryprops)</code>)  *No description* __*Optional*__
  * **retainRepository** (<code>boolean</code>)  *No description* __*Optional*__


### Methods


#### protected createCustomExtensionBuildSpec(projectName, distBucketName, codeArtifactRepository, codeArtifactDomain, codeArtifactDomainOwner) <a id="tts-cdk-build-pipelines-customextensionpipeline-createcustomextensionbuildspec"></a>



```ts
protected createCustomExtensionBuildSpec(projectName: string, distBucketName: string, codeArtifactRepository: string, codeArtifactDomain: string, codeArtifactDomainOwner: string): Map<string, any>
```

* **projectName** (<code>string</code>)  *No description*
* **distBucketName** (<code>string</code>)  *No description*
* **codeArtifactRepository** (<code>string</code>)  *No description*
* **codeArtifactDomain** (<code>string</code>)  *No description*
* **codeArtifactDomainOwner** (<code>string</code>)  *No description*

__Returns__:
* <code>Map<string, any></code>



## class SSMParametersFeature  <a id="tts-cdk-build-pipelines-ssmparametersfeature"></a>



__Extends__: [BuildProjectFeature](#tts-cdk-build-pipelines-buildprojectfeature)

### Initializer




```ts
new SSMParametersFeature(pipeline: BuildSpecPipeline)
```

* **pipeline** (<code>[BuildSpecPipeline](#tts-cdk-build-pipelines-buildspecpipeline)</code>)  *No description*




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



## struct CustomExtensionPipelineProps  <a id="tts-cdk-build-pipelines-customextensionpipelineprops"></a>






Name | Type | Description 
-----|------|-------------
**codeArtifactDomain** | <code>string</code> | <span></span>
**codeArtifactDomainOwner** | <code>string</code> | <span></span>
**codeArtifactRepository** | <code>string</code> | <span></span>
**distBucketName** | <code>string</code> | <span></span>
**branch**? | <code>string</code> | __*Optional*__
**buildEnvironment**? | <code>[aws_codebuild.BuildEnvironment](#aws-cdk-lib-aws-codebuild-buildenvironment)</code> | __*Optional*__
**existingRepositoryObj**? | <code>[aws_codecommit.Repository](#aws-cdk-lib-aws-codecommit-repository)</code> | __*Optional*__
**projectDescription**? | <code>string</code> | __*Optional*__
**projectName**? | <code>string</code> | __*Optional*__
**repositoryProps**? | <code>[aws_codecommit.RepositoryProps](#aws-cdk-lib-aws-codecommit-repositoryprops)</code> | __*Optional*__
**retainRepository**? | <code>boolean</code> | __*Optional*__



