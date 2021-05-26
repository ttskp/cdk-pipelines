# API Reference

**Classes**

Name|Description
----|-----------
[BuildSpecPipeline](#tts-cdk-build-pipelines-buildspecpipeline)|*No description*


**Structs**

Name|Description
----|-----------
[BuildSpecPipelineProps](#tts-cdk-build-pipelines-buildspecpipelineprops)|*No description*



## class BuildSpecPipeline  <a id="tts-cdk-build-pipelines-buildspecpipeline"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new BuildSpecPipeline(scope: Construct, name: string, props?: BuildSpecPipelineProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **name** (<code>string</code>)  *No description*
* **props** (<code>[BuildSpecPipelineProps](#tts-cdk-build-pipelines-buildspecpipelineprops)</code>)  *No description*
  * **branch** (<code>string</code>)  *No description* __*Optional*__
  * **buildEnvironment** (<code>[BuildEnvironment](#aws-cdk-aws-codebuild-buildenvironment)</code>)  *No description* __*Optional*__
  * **buildSpec** (<code>Map<string, any></code>)  *No description* __*Optional*__
  * **buildSpecFile** (<code>string</code>)  *No description* __*Optional*__
  * **existingRepositoryObj** (<code>[Repository](#aws-cdk-aws-codecommit-repository)</code>)  *No description* __*Optional*__
  * **projectDescription** (<code>string</code>)  *No description* __*Optional*__
  * **projectName** (<code>string</code>)  *No description* __*Optional*__
  * **repositoryProps** (<code>[RepositoryProps](#aws-cdk-aws-codecommit-repositoryprops)</code>)  *No description* __*Optional*__
  * **retainRepository** (<code>boolean</code>)  *No description* __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**pipeline** | <code>[Pipeline](#aws-cdk-aws-codepipeline-pipeline)</code> | <span></span>
**repository** | <code>[Repository](#aws-cdk-aws-codecommit-repository)</code> | <span></span>

### Methods


#### protected extendBuildSpec(buildSpec) <a id="tts-cdk-build-pipelines-buildspecpipeline-extendbuildspec"></a>



```ts
protected extendBuildSpec(buildSpec: any): void
```

* **buildSpec** (<code>any</code>)  *No description*






## struct BuildSpecPipelineProps  <a id="tts-cdk-build-pipelines-buildspecpipelineprops"></a>






Name | Type | Description 
-----|------|-------------
**branch**? | <code>string</code> | __*Optional*__
**buildEnvironment**? | <code>[BuildEnvironment](#aws-cdk-aws-codebuild-buildenvironment)</code> | __*Optional*__
**buildSpec**? | <code>Map<string, any></code> | __*Optional*__
**buildSpecFile**? | <code>string</code> | __*Optional*__
**existingRepositoryObj**? | <code>[Repository](#aws-cdk-aws-codecommit-repository)</code> | __*Optional*__
**projectDescription**? | <code>string</code> | __*Optional*__
**projectName**? | <code>string</code> | __*Optional*__
**repositoryProps**? | <code>[RepositoryProps](#aws-cdk-aws-codecommit-repositoryprops)</code> | __*Optional*__
**retainRepository**? | <code>boolean</code> | __*Optional*__



