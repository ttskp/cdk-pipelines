# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BuildSpecPipeline <a name="BuildSpecPipeline" id="@tts-cdk/build-pipelines.BuildSpecPipeline"></a>

- *Implements:* constructs.IConstruct, constructs.IDependable

#### Initializers <a name="Initializers" id="@tts-cdk/build-pipelines.BuildSpecPipeline.Initializer"></a>

```typescript
import { BuildSpecPipeline } from '@tts-cdk/build-pipelines'

new BuildSpecPipeline(scope: Construct, name: string, props?: BuildSpecPipelineProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@tts-cdk/build-pipelines.BuildSpecPipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.BuildSpecPipeline.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.BuildSpecPipeline.Initializer.parameter.props">props</a></code> | <code><a href="#@tts-cdk/build-pipelines.BuildSpecPipelineProps">BuildSpecPipelineProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@tts-cdk/build-pipelines.BuildSpecPipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="@tts-cdk/build-pipelines.BuildSpecPipeline.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@tts-cdk/build-pipelines.BuildSpecPipeline.Initializer.parameter.props"></a>

- *Type:* <a href="#@tts-cdk/build-pipelines.BuildSpecPipelineProps">BuildSpecPipelineProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@tts-cdk/build-pipelines.BuildSpecPipeline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@tts-cdk/build-pipelines.BuildSpecPipeline.with">with</a></code> | Applies one or more mixins to this construct. |

---

##### `toString` <a name="toString" id="@tts-cdk/build-pipelines.BuildSpecPipeline.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@tts-cdk/build-pipelines.BuildSpecPipeline.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@tts-cdk/build-pipelines.BuildSpecPipeline.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@tts-cdk/build-pipelines.BuildSpecPipeline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@tts-cdk/build-pipelines.BuildSpecPipeline.isConstruct"></a>

```typescript
import { BuildSpecPipeline } from '@tts-cdk/build-pipelines'

BuildSpecPipeline.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@tts-cdk/build-pipelines.BuildSpecPipeline.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@tts-cdk/build-pipelines.BuildSpecPipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@tts-cdk/build-pipelines.BuildSpecPipeline.property.buildSpec">buildSpec</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.BuildSpecPipeline.property.codebuildProject">codebuildProject</a></code> | <code>aws-cdk-lib.aws_codebuild.PipelineProject</code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.BuildSpecPipeline.property.features">features</a></code> | <code><a href="#@tts-cdk/build-pipelines.BuildProjectFeature">BuildProjectFeature</a>[]</code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.BuildSpecPipeline.property.pipeline">pipeline</a></code> | <code>aws-cdk-lib.aws_codepipeline.Pipeline</code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.BuildSpecPipeline.property.props">props</a></code> | <code><a href="#@tts-cdk/build-pipelines.BuildSpecPipelineProps">BuildSpecPipelineProps</a></code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.BuildSpecPipeline.property.repository">repository</a></code> | <code>aws-cdk-lib.aws_codecommit.Repository</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@tts-cdk/build-pipelines.BuildSpecPipeline.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildSpec`<sup>Required</sup> <a name="buildSpec" id="@tts-cdk/build-pipelines.BuildSpecPipeline.property.buildSpec"></a>

```typescript
public readonly buildSpec: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `codebuildProject`<sup>Required</sup> <a name="codebuildProject" id="@tts-cdk/build-pipelines.BuildSpecPipeline.property.codebuildProject"></a>

```typescript
public readonly codebuildProject: PipelineProject;
```

- *Type:* aws-cdk-lib.aws_codebuild.PipelineProject

---

##### `features`<sup>Required</sup> <a name="features" id="@tts-cdk/build-pipelines.BuildSpecPipeline.property.features"></a>

```typescript
public readonly features: BuildProjectFeature[];
```

- *Type:* <a href="#@tts-cdk/build-pipelines.BuildProjectFeature">BuildProjectFeature</a>[]

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@tts-cdk/build-pipelines.BuildSpecPipeline.property.pipeline"></a>

```typescript
public readonly pipeline: Pipeline;
```

- *Type:* aws-cdk-lib.aws_codepipeline.Pipeline

---

##### `props`<sup>Required</sup> <a name="props" id="@tts-cdk/build-pipelines.BuildSpecPipeline.property.props"></a>

```typescript
public readonly props: BuildSpecPipelineProps;
```

- *Type:* <a href="#@tts-cdk/build-pipelines.BuildSpecPipelineProps">BuildSpecPipelineProps</a>

---

##### `repository`<sup>Required</sup> <a name="repository" id="@tts-cdk/build-pipelines.BuildSpecPipeline.property.repository"></a>

```typescript
public readonly repository: Repository;
```

- *Type:* aws-cdk-lib.aws_codecommit.Repository

---


### MultiDeployCodePipeline <a name="MultiDeployCodePipeline" id="@tts-cdk/build-pipelines.MultiDeployCodePipeline"></a>

- *Implements:* constructs.IConstruct, constructs.IDependable

#### Initializers <a name="Initializers" id="@tts-cdk/build-pipelines.MultiDeployCodePipeline.Initializer"></a>

```typescript
import { MultiDeployCodePipeline } from '@tts-cdk/build-pipelines'

new MultiDeployCodePipeline(scope: Construct, id: string, props: MultiDeployCodePipelineProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipeline.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipeline.Initializer.parameter.props">props</a></code> | <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipelineProps">MultiDeployCodePipelineProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@tts-cdk/build-pipelines.MultiDeployCodePipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@tts-cdk/build-pipelines.MultiDeployCodePipeline.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@tts-cdk/build-pipelines.MultiDeployCodePipeline.Initializer.parameter.props"></a>

- *Type:* <a href="#@tts-cdk/build-pipelines.MultiDeployCodePipelineProps">MultiDeployCodePipelineProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipeline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipeline.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipeline.addStage">addStage</a></code> | Deploy a single Stage by itself. |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipeline.addWave">addWave</a></code> | Add a Wave to the pipeline, for deploying multiple Stages in parallel. |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipeline.buildPipeline">buildPipeline</a></code> | Send the current pipeline definition to the engine, and construct the pipeline. |

---

##### `toString` <a name="toString" id="@tts-cdk/build-pipelines.MultiDeployCodePipeline.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@tts-cdk/build-pipelines.MultiDeployCodePipeline.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@tts-cdk/build-pipelines.MultiDeployCodePipeline.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addStage` <a name="addStage" id="@tts-cdk/build-pipelines.MultiDeployCodePipeline.addStage"></a>

```typescript
public addStage(stage: Stage, options?: AddStageOpts): StageDeployment
```

Deploy a single Stage by itself.

Add a Stage to the pipeline, to be deployed in sequence with other
Stages added to the pipeline. All Stacks in the stage will be deployed
in an order automatically determined by their relative dependencies.

###### `stage`<sup>Required</sup> <a name="stage" id="@tts-cdk/build-pipelines.MultiDeployCodePipeline.addStage.parameter.stage"></a>

- *Type:* aws-cdk-lib.Stage

---

###### `options`<sup>Optional</sup> <a name="options" id="@tts-cdk/build-pipelines.MultiDeployCodePipeline.addStage.parameter.options"></a>

- *Type:* aws-cdk-lib.pipelines.AddStageOpts

---

##### `addWave` <a name="addWave" id="@tts-cdk/build-pipelines.MultiDeployCodePipeline.addWave"></a>

```typescript
public addWave(id: string, options?: WaveOptions): Wave
```

Add a Wave to the pipeline, for deploying multiple Stages in parallel.

Use the return object of this method to deploy multiple stages in parallel.

Example:

```ts
declare const pipeline: pipelines.CodePipeline;

const wave = pipeline.addWave('MyWave');
wave.addStage(new MyApplicationStage(this, 'Stage1'));
wave.addStage(new MyApplicationStage(this, 'Stage2'));
```

###### `id`<sup>Required</sup> <a name="id" id="@tts-cdk/build-pipelines.MultiDeployCodePipeline.addWave.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@tts-cdk/build-pipelines.MultiDeployCodePipeline.addWave.parameter.options"></a>

- *Type:* aws-cdk-lib.pipelines.WaveOptions

---

##### `buildPipeline` <a name="buildPipeline" id="@tts-cdk/build-pipelines.MultiDeployCodePipeline.buildPipeline"></a>

```typescript
public buildPipeline(): void
```

Send the current pipeline definition to the engine, and construct the pipeline.

It is not possible to modify the pipeline after calling this method.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipeline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipeline.isPipeline">isPipeline</a></code> | Return whether the given object extends `PipelineBase`. |

---

##### `isConstruct` <a name="isConstruct" id="@tts-cdk/build-pipelines.MultiDeployCodePipeline.isConstruct"></a>

```typescript
import { MultiDeployCodePipeline } from '@tts-cdk/build-pipelines'

MultiDeployCodePipeline.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@tts-cdk/build-pipelines.MultiDeployCodePipeline.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isPipeline` <a name="isPipeline" id="@tts-cdk/build-pipelines.MultiDeployCodePipeline.isPipeline"></a>

```typescript
import { MultiDeployCodePipeline } from '@tts-cdk/build-pipelines'

MultiDeployCodePipeline.isPipeline(x: any)
```

Return whether the given object extends `PipelineBase`.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="@tts-cdk/build-pipelines.MultiDeployCodePipeline.isPipeline.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipeline.property.cloudAssemblyFileSet">cloudAssemblyFileSet</a></code> | <code>aws-cdk-lib.pipelines.FileSet</code> | The FileSet tha contains the cloud assembly. |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipeline.property.synth">synth</a></code> | <code>aws-cdk-lib.pipelines.IFileSetProducer</code> | The build step that produces the CDK Cloud Assembly. |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipeline.property.waves">waves</a></code> | <code>aws-cdk-lib.pipelines.Wave[]</code> | The waves in this pipeline. |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipeline.property.pipeline">pipeline</a></code> | <code>aws-cdk-lib.aws_codepipeline.Pipeline</code> | The CodePipeline pipeline that deploys the CDK app. |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipeline.property.selfMutationEnabled">selfMutationEnabled</a></code> | <code>boolean</code> | Whether SelfMutation is enabled for this CDK Pipeline. |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipeline.property.selfMutationProject">selfMutationProject</a></code> | <code>aws-cdk-lib.aws_codebuild.IProject</code> | The CodeBuild project that performs the SelfMutation. |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipeline.property.synthProject">synthProject</a></code> | <code>aws-cdk-lib.aws_codebuild.IProject</code> | The CodeBuild project that performs the Synth. |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipeline.property.usePipelineRoleForActions">usePipelineRoleForActions</a></code> | <code>boolean</code> | Allow pipeline service role used for actions if no action role configured instead of creating a new role for each action. |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipeline.property.stacks">stacks</a></code> | <code>aws-cdk-lib.Stack[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@tts-cdk/build-pipelines.MultiDeployCodePipeline.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cloudAssemblyFileSet`<sup>Required</sup> <a name="cloudAssemblyFileSet" id="@tts-cdk/build-pipelines.MultiDeployCodePipeline.property.cloudAssemblyFileSet"></a>

```typescript
public readonly cloudAssemblyFileSet: FileSet;
```

- *Type:* aws-cdk-lib.pipelines.FileSet

The FileSet tha contains the cloud assembly.

This is the primary output of the synth step.

---

##### `synth`<sup>Required</sup> <a name="synth" id="@tts-cdk/build-pipelines.MultiDeployCodePipeline.property.synth"></a>

```typescript
public readonly synth: IFileSetProducer;
```

- *Type:* aws-cdk-lib.pipelines.IFileSetProducer

The build step that produces the CDK Cloud Assembly.

---

##### `waves`<sup>Required</sup> <a name="waves" id="@tts-cdk/build-pipelines.MultiDeployCodePipeline.property.waves"></a>

```typescript
public readonly waves: Wave[];
```

- *Type:* aws-cdk-lib.pipelines.Wave[]

The waves in this pipeline.

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@tts-cdk/build-pipelines.MultiDeployCodePipeline.property.pipeline"></a>

```typescript
public readonly pipeline: Pipeline;
```

- *Type:* aws-cdk-lib.aws_codepipeline.Pipeline

The CodePipeline pipeline that deploys the CDK app.

Only available after the pipeline has been built.

---

##### `selfMutationEnabled`<sup>Required</sup> <a name="selfMutationEnabled" id="@tts-cdk/build-pipelines.MultiDeployCodePipeline.property.selfMutationEnabled"></a>

```typescript
public readonly selfMutationEnabled: boolean;
```

- *Type:* boolean

Whether SelfMutation is enabled for this CDK Pipeline.

---

##### `selfMutationProject`<sup>Required</sup> <a name="selfMutationProject" id="@tts-cdk/build-pipelines.MultiDeployCodePipeline.property.selfMutationProject"></a>

```typescript
public readonly selfMutationProject: IProject;
```

- *Type:* aws-cdk-lib.aws_codebuild.IProject

The CodeBuild project that performs the SelfMutation.

Will throw an error if this is accessed before `buildPipeline()`
is called, or if selfMutation has been disabled.

---

##### `synthProject`<sup>Required</sup> <a name="synthProject" id="@tts-cdk/build-pipelines.MultiDeployCodePipeline.property.synthProject"></a>

```typescript
public readonly synthProject: IProject;
```

- *Type:* aws-cdk-lib.aws_codebuild.IProject

The CodeBuild project that performs the Synth.

Only available after the pipeline has been built.

---

##### `usePipelineRoleForActions`<sup>Required</sup> <a name="usePipelineRoleForActions" id="@tts-cdk/build-pipelines.MultiDeployCodePipeline.property.usePipelineRoleForActions"></a>

```typescript
public readonly usePipelineRoleForActions: boolean;
```

- *Type:* boolean

Allow pipeline service role used for actions if no action role configured instead of creating a new role for each action.

---

##### `stacks`<sup>Required</sup> <a name="stacks" id="@tts-cdk/build-pipelines.MultiDeployCodePipeline.property.stacks"></a>

```typescript
public readonly stacks: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

---


### StackFactoryApplicationStage <a name="StackFactoryApplicationStage" id="@tts-cdk/build-pipelines.StackFactoryApplicationStage"></a>

- *Implements:* constructs.IConstruct, constructs.IDependable

#### Initializers <a name="Initializers" id="@tts-cdk/build-pipelines.StackFactoryApplicationStage.Initializer"></a>

```typescript
import { StackFactoryApplicationStage } from '@tts-cdk/build-pipelines'

new StackFactoryApplicationStage(scope: Construct, id: string, props: StageProps, stackFactory: IStackFactory)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@tts-cdk/build-pipelines.StackFactoryApplicationStage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.StackFactoryApplicationStage.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.StackFactoryApplicationStage.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.StageProps</code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.StackFactoryApplicationStage.Initializer.parameter.stackFactory">stackFactory</a></code> | <code><a href="#@tts-cdk/build-pipelines.IStackFactory">IStackFactory</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@tts-cdk/build-pipelines.StackFactoryApplicationStage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@tts-cdk/build-pipelines.StackFactoryApplicationStage.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@tts-cdk/build-pipelines.StackFactoryApplicationStage.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.StageProps

---

##### `stackFactory`<sup>Required</sup> <a name="stackFactory" id="@tts-cdk/build-pipelines.StackFactoryApplicationStage.Initializer.parameter.stackFactory"></a>

- *Type:* <a href="#@tts-cdk/build-pipelines.IStackFactory">IStackFactory</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@tts-cdk/build-pipelines.StackFactoryApplicationStage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@tts-cdk/build-pipelines.StackFactoryApplicationStage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@tts-cdk/build-pipelines.StackFactoryApplicationStage.synth">synth</a></code> | Synthesize this stage into a cloud assembly. |

---

##### `toString` <a name="toString" id="@tts-cdk/build-pipelines.StackFactoryApplicationStage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@tts-cdk/build-pipelines.StackFactoryApplicationStage.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@tts-cdk/build-pipelines.StackFactoryApplicationStage.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `synth` <a name="synth" id="@tts-cdk/build-pipelines.StackFactoryApplicationStage.synth"></a>

```typescript
public synth(options?: StageSynthesisOptions): CloudAssembly
```

Synthesize this stage into a cloud assembly.

Once an assembly has been synthesized, it cannot be modified. Subsequent
calls will return the same assembly.

###### `options`<sup>Optional</sup> <a name="options" id="@tts-cdk/build-pipelines.StackFactoryApplicationStage.synth.parameter.options"></a>

- *Type:* aws-cdk-lib.StageSynthesisOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@tts-cdk/build-pipelines.StackFactoryApplicationStage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@tts-cdk/build-pipelines.StackFactoryApplicationStage.isStage">isStage</a></code> | Test whether the given construct is a stage. |
| <code><a href="#@tts-cdk/build-pipelines.StackFactoryApplicationStage.of">of</a></code> | Return the stage this construct is contained with, if available. |

---

##### `isConstruct` <a name="isConstruct" id="@tts-cdk/build-pipelines.StackFactoryApplicationStage.isConstruct"></a>

```typescript
import { StackFactoryApplicationStage } from '@tts-cdk/build-pipelines'

StackFactoryApplicationStage.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@tts-cdk/build-pipelines.StackFactoryApplicationStage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStage` <a name="isStage" id="@tts-cdk/build-pipelines.StackFactoryApplicationStage.isStage"></a>

```typescript
import { StackFactoryApplicationStage } from '@tts-cdk/build-pipelines'

StackFactoryApplicationStage.isStage(x: any)
```

Test whether the given construct is a stage.

###### `x`<sup>Required</sup> <a name="x" id="@tts-cdk/build-pipelines.StackFactoryApplicationStage.isStage.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@tts-cdk/build-pipelines.StackFactoryApplicationStage.of"></a>

```typescript
import { StackFactoryApplicationStage } from '@tts-cdk/build-pipelines'

StackFactoryApplicationStage.of(construct: IConstruct)
```

Return the stage this construct is contained with, if available.

If called
on a nested stage, returns its parent.

###### `construct`<sup>Required</sup> <a name="construct" id="@tts-cdk/build-pipelines.StackFactoryApplicationStage.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@tts-cdk/build-pipelines.StackFactoryApplicationStage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@tts-cdk/build-pipelines.StackFactoryApplicationStage.property.artifactId">artifactId</a></code> | <code>string</code> | Artifact ID of the assembly if it is a nested stage. The root stage (app) will return an empty string. |
| <code><a href="#@tts-cdk/build-pipelines.StackFactoryApplicationStage.property.assetOutdir">assetOutdir</a></code> | <code>string</code> | The cloud assembly asset output directory. |
| <code><a href="#@tts-cdk/build-pipelines.StackFactoryApplicationStage.property.outdir">outdir</a></code> | <code>string</code> | The cloud assembly output directory. |
| <code><a href="#@tts-cdk/build-pipelines.StackFactoryApplicationStage.property.policyValidationBeta1">policyValidationBeta1</a></code> | <code>aws-cdk-lib.IPolicyValidationPluginBeta1[]</code> | Validation plugins to run during synthesis. |
| <code><a href="#@tts-cdk/build-pipelines.StackFactoryApplicationStage.property.stageName">stageName</a></code> | <code>string</code> | The name of the stage. |
| <code><a href="#@tts-cdk/build-pipelines.StackFactoryApplicationStage.property.account">account</a></code> | <code>string</code> | The default account for all resources defined within this stage. |
| <code><a href="#@tts-cdk/build-pipelines.StackFactoryApplicationStage.property.parentStage">parentStage</a></code> | <code>aws-cdk-lib.Stage</code> | The parent stage or `undefined` if this is the app. |
| <code><a href="#@tts-cdk/build-pipelines.StackFactoryApplicationStage.property.region">region</a></code> | <code>string</code> | The default region for all resources defined within this stage. |
| <code><a href="#@tts-cdk/build-pipelines.StackFactoryApplicationStage.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@tts-cdk/build-pipelines.StackFactoryApplicationStage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@tts-cdk/build-pipelines.StackFactoryApplicationStage.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

Artifact ID of the assembly if it is a nested stage. The root stage (app) will return an empty string.

Derived from the construct path.

---

##### `assetOutdir`<sup>Required</sup> <a name="assetOutdir" id="@tts-cdk/build-pipelines.StackFactoryApplicationStage.property.assetOutdir"></a>

```typescript
public readonly assetOutdir: string;
```

- *Type:* string

The cloud assembly asset output directory.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@tts-cdk/build-pipelines.StackFactoryApplicationStage.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

The cloud assembly output directory.

---

##### ~~`policyValidationBeta1`~~<sup>Required</sup> <a name="policyValidationBeta1" id="@tts-cdk/build-pipelines.StackFactoryApplicationStage.property.policyValidationBeta1"></a>

- *Deprecated:* Do not use this function to look up validation plugins. Use `Validations.of(stage).plugins` instead.

```typescript
public readonly policyValidationBeta1: IPolicyValidationPluginBeta1[];
```

- *Type:* aws-cdk-lib.IPolicyValidationPluginBeta1[]
- *Default:* no validation plugins are used

Validation plugins to run during synthesis.

If any plugin reports any violation,
synthesis will be interrupted and the report displayed to the user.

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@tts-cdk/build-pipelines.StackFactoryApplicationStage.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

The name of the stage.

Based on names of the parent stages separated by
hypens.

---

##### `account`<sup>Optional</sup> <a name="account" id="@tts-cdk/build-pipelines.StackFactoryApplicationStage.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The default account for all resources defined within this stage.

---

##### `parentStage`<sup>Optional</sup> <a name="parentStage" id="@tts-cdk/build-pipelines.StackFactoryApplicationStage.property.parentStage"></a>

```typescript
public readonly parentStage: Stage;
```

- *Type:* aws-cdk-lib.Stage

The parent stage or `undefined` if this is the app.

*

---

##### `region`<sup>Optional</sup> <a name="region" id="@tts-cdk/build-pipelines.StackFactoryApplicationStage.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The default region for all resources defined within this stage.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@tts-cdk/build-pipelines.StackFactoryApplicationStage.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

---


## Structs <a name="Structs" id="Structs"></a>

### BuildSpecPipelineProps <a name="BuildSpecPipelineProps" id="@tts-cdk/build-pipelines.BuildSpecPipelineProps"></a>

#### Initializer <a name="Initializer" id="@tts-cdk/build-pipelines.BuildSpecPipelineProps.Initializer"></a>

```typescript
import { BuildSpecPipelineProps } from '@tts-cdk/build-pipelines'

const buildSpecPipelineProps: BuildSpecPipelineProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@tts-cdk/build-pipelines.BuildSpecPipelineProps.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.BuildSpecPipelineProps.property.buildEnvironment">buildEnvironment</a></code> | <code>aws-cdk-lib.aws_codebuild.BuildEnvironment</code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.BuildSpecPipelineProps.property.buildSpec">buildSpec</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.BuildSpecPipelineProps.property.buildSpecFile">buildSpecFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.BuildSpecPipelineProps.property.existingRepositoryObj">existingRepositoryObj</a></code> | <code>aws-cdk-lib.aws_codecommit.Repository</code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.BuildSpecPipelineProps.property.projectDescription">projectDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.BuildSpecPipelineProps.property.projectName">projectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.BuildSpecPipelineProps.property.repositoryProps">repositoryProps</a></code> | <code>aws-cdk-lib.aws_codecommit.RepositoryProps</code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.BuildSpecPipelineProps.property.retainRepository">retainRepository</a></code> | <code>boolean</code> | *No description.* |

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@tts-cdk/build-pipelines.BuildSpecPipelineProps.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `buildEnvironment`<sup>Optional</sup> <a name="buildEnvironment" id="@tts-cdk/build-pipelines.BuildSpecPipelineProps.property.buildEnvironment"></a>

```typescript
public readonly buildEnvironment: BuildEnvironment;
```

- *Type:* aws-cdk-lib.aws_codebuild.BuildEnvironment

---

##### `buildSpec`<sup>Optional</sup> <a name="buildSpec" id="@tts-cdk/build-pipelines.BuildSpecPipelineProps.property.buildSpec"></a>

```typescript
public readonly buildSpec: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `buildSpecFile`<sup>Optional</sup> <a name="buildSpecFile" id="@tts-cdk/build-pipelines.BuildSpecPipelineProps.property.buildSpecFile"></a>

```typescript
public readonly buildSpecFile: string;
```

- *Type:* string

---

##### `existingRepositoryObj`<sup>Optional</sup> <a name="existingRepositoryObj" id="@tts-cdk/build-pipelines.BuildSpecPipelineProps.property.existingRepositoryObj"></a>

```typescript
public readonly existingRepositoryObj: Repository;
```

- *Type:* aws-cdk-lib.aws_codecommit.Repository

---

##### `projectDescription`<sup>Optional</sup> <a name="projectDescription" id="@tts-cdk/build-pipelines.BuildSpecPipelineProps.property.projectDescription"></a>

```typescript
public readonly projectDescription: string;
```

- *Type:* string

---

##### `projectName`<sup>Optional</sup> <a name="projectName" id="@tts-cdk/build-pipelines.BuildSpecPipelineProps.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

---

##### `repositoryProps`<sup>Optional</sup> <a name="repositoryProps" id="@tts-cdk/build-pipelines.BuildSpecPipelineProps.property.repositoryProps"></a>

```typescript
public readonly repositoryProps: RepositoryProps;
```

- *Type:* aws-cdk-lib.aws_codecommit.RepositoryProps

---

##### `retainRepository`<sup>Optional</sup> <a name="retainRepository" id="@tts-cdk/build-pipelines.BuildSpecPipelineProps.property.retainRepository"></a>

```typescript
public readonly retainRepository: boolean;
```

- *Type:* boolean

---

### CodeArtifactFeatureProps <a name="CodeArtifactFeatureProps" id="@tts-cdk/build-pipelines.CodeArtifactFeatureProps"></a>

#### Initializer <a name="Initializer" id="@tts-cdk/build-pipelines.CodeArtifactFeatureProps.Initializer"></a>

```typescript
import { CodeArtifactFeatureProps } from '@tts-cdk/build-pipelines'

const codeArtifactFeatureProps: CodeArtifactFeatureProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@tts-cdk/build-pipelines.CodeArtifactFeatureProps.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.CodeArtifactFeatureProps.property.repos">repos</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `domain`<sup>Required</sup> <a name="domain" id="@tts-cdk/build-pipelines.CodeArtifactFeatureProps.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `repos`<sup>Required</sup> <a name="repos" id="@tts-cdk/build-pipelines.CodeArtifactFeatureProps.property.repos"></a>

```typescript
public readonly repos: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

### DeploymentStage <a name="DeploymentStage" id="@tts-cdk/build-pipelines.DeploymentStage"></a>

#### Initializer <a name="Initializer" id="@tts-cdk/build-pipelines.DeploymentStage.Initializer"></a>

```typescript
import { DeploymentStage } from '@tts-cdk/build-pipelines'

const deploymentStage: DeploymentStage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@tts-cdk/build-pipelines.DeploymentStage.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.DeploymentStage.property.targets">targets</a></code> | <code><a href="#@tts-cdk/build-pipelines.IDeploymentTargetsProvider">IDeploymentTargetsProvider</a></code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.DeploymentStage.property.post">post</a></code> | <code>aws-cdk-lib.pipelines.Step[]</code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.DeploymentStage.property.pre">pre</a></code> | <code>aws-cdk-lib.pipelines.Step[]</code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.DeploymentStage.property.requireManualApproval">requireManualApproval</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.DeploymentStage.property.stackFactory">stackFactory</a></code> | <code><a href="#@tts-cdk/build-pipelines.IStackFactory">IStackFactory</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@tts-cdk/build-pipelines.DeploymentStage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `targets`<sup>Required</sup> <a name="targets" id="@tts-cdk/build-pipelines.DeploymentStage.property.targets"></a>

```typescript
public readonly targets: IDeploymentTargetsProvider;
```

- *Type:* <a href="#@tts-cdk/build-pipelines.IDeploymentTargetsProvider">IDeploymentTargetsProvider</a>

---

##### `post`<sup>Optional</sup> <a name="post" id="@tts-cdk/build-pipelines.DeploymentStage.property.post"></a>

```typescript
public readonly post: Step[];
```

- *Type:* aws-cdk-lib.pipelines.Step[]

---

##### `pre`<sup>Optional</sup> <a name="pre" id="@tts-cdk/build-pipelines.DeploymentStage.property.pre"></a>

```typescript
public readonly pre: Step[];
```

- *Type:* aws-cdk-lib.pipelines.Step[]

---

##### `requireManualApproval`<sup>Optional</sup> <a name="requireManualApproval" id="@tts-cdk/build-pipelines.DeploymentStage.property.requireManualApproval"></a>

```typescript
public readonly requireManualApproval: boolean;
```

- *Type:* boolean

---

##### `stackFactory`<sup>Optional</sup> <a name="stackFactory" id="@tts-cdk/build-pipelines.DeploymentStage.property.stackFactory"></a>

```typescript
public readonly stackFactory: IStackFactory;
```

- *Type:* <a href="#@tts-cdk/build-pipelines.IStackFactory">IStackFactory</a>

---

### DeploymentTarget <a name="DeploymentTarget" id="@tts-cdk/build-pipelines.DeploymentTarget"></a>

#### Initializer <a name="Initializer" id="@tts-cdk/build-pipelines.DeploymentTarget.Initializer"></a>

```typescript
import { DeploymentTarget } from '@tts-cdk/build-pipelines'

const deploymentTarget: DeploymentTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@tts-cdk/build-pipelines.DeploymentTarget.property.account">account</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.DeploymentTarget.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.DeploymentTarget.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `account`<sup>Required</sup> <a name="account" id="@tts-cdk/build-pipelines.DeploymentTarget.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@tts-cdk/build-pipelines.DeploymentTarget.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `name`<sup>Optional</sup> <a name="name" id="@tts-cdk/build-pipelines.DeploymentTarget.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

### MultiDeployCodePipelineProps <a name="MultiDeployCodePipelineProps" id="@tts-cdk/build-pipelines.MultiDeployCodePipelineProps"></a>

#### Initializer <a name="Initializer" id="@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.Initializer"></a>

```typescript
import { MultiDeployCodePipelineProps } from '@tts-cdk/build-pipelines'

const multiDeployCodePipelineProps: MultiDeployCodePipelineProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.synth">synth</a></code> | <code>aws-cdk-lib.pipelines.IFileSetProducer</code> | The build step that produces the CDK Cloud Assembly. |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.artifactBucket">artifactBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | An existing S3 Bucket to use for storing the pipeline's artifact. |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.assetPublishingCodeBuildDefaults">assetPublishingCodeBuildDefaults</a></code> | <code>aws-cdk-lib.pipelines.CodeBuildOptions</code> | Additional customizations to apply to the asset publishing CodeBuild projects. |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.cdkAssetsCliVersion">cdkAssetsCliVersion</a></code> | <code>string</code> | CDK CLI version to use in asset publishing steps. |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.cliVersion">cliVersion</a></code> | <code>string</code> | CDK CLI version to use in self-mutation step. |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.codeBuildDefaults">codeBuildDefaults</a></code> | <code>aws-cdk-lib.pipelines.CodeBuildOptions</code> | Customize the CodeBuild projects created for this pipeline. |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.codePipeline">codePipeline</a></code> | <code>aws-cdk-lib.aws_codepipeline.Pipeline</code> | An existing Pipeline to be reused and built upon. |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.crossAccountKeys">crossAccountKeys</a></code> | <code>boolean</code> | Create KMS keys for the artifact buckets, allowing cross-account deployments. |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.crossRegionReplicationBuckets">crossRegionReplicationBuckets</a></code> | <code>{[ key: string ]: aws-cdk-lib.aws_s3.IBucket}</code> | A map of region to S3 bucket name used for cross-region CodePipeline. |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.dockerCredentials">dockerCredentials</a></code> | <code>aws-cdk-lib.pipelines.DockerCredential[]</code> | A list of credentials used to authenticate to Docker registries. |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.dockerEnabledForSelfMutation">dockerEnabledForSelfMutation</a></code> | <code>boolean</code> | Enable Docker for the self-mutate step. |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.dockerEnabledForSynth">dockerEnabledForSynth</a></code> | <code>boolean</code> | Enable Docker for the 'synth' step. |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.enableKeyRotation">enableKeyRotation</a></code> | <code>boolean</code> | Enable KMS key rotation for the generated KMS keys. |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.executionMode">executionMode</a></code> | <code>aws-cdk-lib.aws_codepipeline.ExecutionMode</code> | The method that the pipeline will use to handle multiple executions. |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.pipelineName">pipelineName</a></code> | <code>string</code> | The name of the CodePipeline pipeline. |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.pipelineType">pipelineType</a></code> | <code>aws-cdk-lib.aws_codepipeline.PipelineType</code> | Type of the pipeline. |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.publishAssetsInParallel">publishAssetsInParallel</a></code> | <code>boolean</code> | Publish assets in multiple CodeBuild projects. |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.reuseCrossRegionSupportStacks">reuseCrossRegionSupportStacks</a></code> | <code>boolean</code> | Reuse the same cross region support stack for all pipelines in the App. |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM role to be assumed by this Pipeline. |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.selfMutation">selfMutation</a></code> | <code>boolean</code> | Whether the pipeline will update itself. |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.selfMutationCodeBuildDefaults">selfMutationCodeBuildDefaults</a></code> | <code>aws-cdk-lib.pipelines.CodeBuildOptions</code> | Additional customizations to apply to the self mutation CodeBuild projects. |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.synthCodeBuildDefaults">synthCodeBuildDefaults</a></code> | <code>aws-cdk-lib.pipelines.CodeBuildOptions</code> | Additional customizations to apply to the synthesize CodeBuild projects. |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.useChangeSets">useChangeSets</a></code> | <code>boolean</code> | Deploy every stack by creating a change set and executing it. |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.usePipelineRoleForActions">usePipelineRoleForActions</a></code> | <code>boolean</code> | Use pipeline service role for actions if no action role configured. |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.deploymentStages">deploymentStages</a></code> | <code><a href="#@tts-cdk/build-pipelines.DeploymentStage">DeploymentStage</a>[]</code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.mixins">mixins</a></code> | <code><a href="#@tts-cdk/build-pipelines.CodePipelineMixin">CodePipelineMixin</a>[]</code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.restartExecutionOnUpdate">restartExecutionOnUpdate</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.stackFactory">stackFactory</a></code> | <code><a href="#@tts-cdk/build-pipelines.IStackFactory">IStackFactory</a></code> | *No description.* |

---

##### `synth`<sup>Required</sup> <a name="synth" id="@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.synth"></a>

```typescript
public readonly synth: IFileSetProducer;
```

- *Type:* aws-cdk-lib.pipelines.IFileSetProducer

The build step that produces the CDK Cloud Assembly.

The primary output of this step needs to be the `cdk.out` directory
generated by the `cdk synth` command.

If you use a `ShellStep` here and you don't configure an output directory,
the output directory will automatically be assumed to be `cdk.out`.

---

##### `artifactBucket`<sup>Optional</sup> <a name="artifactBucket" id="@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.artifactBucket"></a>

```typescript
public readonly artifactBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket
- *Default:* A new S3 bucket will be created.

An existing S3 Bucket to use for storing the pipeline's artifact.

---

##### `assetPublishingCodeBuildDefaults`<sup>Optional</sup> <a name="assetPublishingCodeBuildDefaults" id="@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.assetPublishingCodeBuildDefaults"></a>

```typescript
public readonly assetPublishingCodeBuildDefaults: CodeBuildOptions;
```

- *Type:* aws-cdk-lib.pipelines.CodeBuildOptions
- *Default:* Only `codeBuildDefaults` are applied

Additional customizations to apply to the asset publishing CodeBuild projects.

---

##### `cdkAssetsCliVersion`<sup>Optional</sup> <a name="cdkAssetsCliVersion" id="@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.cdkAssetsCliVersion"></a>

```typescript
public readonly cdkAssetsCliVersion: string;
```

- *Type:* string
- *Default:* Latest version

CDK CLI version to use in asset publishing steps.

If you want to lock the `cdk-assets` version used in the pipeline, by steps
that are automatically generated for you, specify the version here.

We recommend you do not specify this value, as not specifying it always
uses the latest CLI version which is backwards compatible with old versions.

> [https://www.npmjs.com/package/cdk-assets](https://www.npmjs.com/package/cdk-assets)

---

##### `cliVersion`<sup>Optional</sup> <a name="cliVersion" id="@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.cliVersion"></a>

```typescript
public readonly cliVersion: string;
```

- *Type:* string
- *Default:* Latest version

CDK CLI version to use in self-mutation step.

If you want to lock the CDK CLI version used in the pipeline, by steps
that are automatically generated for you, specify the version here.

We recommend you do not specify this value, as not specifying it always
uses the latest CLI version which is backwards compatible with old versions.

If you do specify it, be aware that this version should always be equal to or higher than the
version of the CDK framework used by the CDK app, when the CDK commands are
run during your pipeline execution. When you change this version, the *next
time* the `SelfMutate` step runs it will still be using the CLI of the the
*previous* version that was in this property: it will only start using the
new version after `SelfMutate` completes successfully. That means that if
you want to update both framework and CLI version, you should update the
CLI version first, commit, push and deploy, and only then update the
framework version.

---

##### `codeBuildDefaults`<sup>Optional</sup> <a name="codeBuildDefaults" id="@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.codeBuildDefaults"></a>

```typescript
public readonly codeBuildDefaults: CodeBuildOptions;
```

- *Type:* aws-cdk-lib.pipelines.CodeBuildOptions
- *Default:* All projects run non-privileged build, SMALL instance, LinuxBuildImage.STANDARD_7_0

Customize the CodeBuild projects created for this pipeline.

---

##### `codePipeline`<sup>Optional</sup> <a name="codePipeline" id="@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.codePipeline"></a>

```typescript
public readonly codePipeline: Pipeline;
```

- *Type:* aws-cdk-lib.aws_codepipeline.Pipeline
- *Default:* a new underlying pipeline is created.

An existing Pipeline to be reused and built upon.

[disable-awslint:ref-via-interface]

---

##### `crossAccountKeys`<sup>Optional</sup> <a name="crossAccountKeys" id="@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.crossAccountKeys"></a>

```typescript
public readonly crossAccountKeys: boolean;
```

- *Type:* boolean
- *Default:* false

Create KMS keys for the artifact buckets, allowing cross-account deployments.

The artifact buckets have to be encrypted to support deploying CDK apps to
another account, so if you want to do that or want to have your artifact
buckets encrypted, be sure to set this value to `true`.

Be aware there is a cost associated with maintaining the KMS keys.

---

##### `crossRegionReplicationBuckets`<sup>Optional</sup> <a name="crossRegionReplicationBuckets" id="@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.crossRegionReplicationBuckets"></a>

```typescript
public readonly crossRegionReplicationBuckets: {[ key: string ]: IBucket};
```

- *Type:* {[ key: string ]: aws-cdk-lib.aws_s3.IBucket}

A map of region to S3 bucket name used for cross-region CodePipeline.

For every Action that you specify targeting a different region than the Pipeline itself,
if you don't provide an explicit Bucket for that region using this property,
the construct will automatically create a Stack containing an S3 Bucket in that region.
Passed directly through to the {@link cp.Pipeline}.

---

##### `dockerCredentials`<sup>Optional</sup> <a name="dockerCredentials" id="@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.dockerCredentials"></a>

```typescript
public readonly dockerCredentials: DockerCredential[];
```

- *Type:* aws-cdk-lib.pipelines.DockerCredential[]
- *Default:* []

A list of credentials used to authenticate to Docker registries.

Specify any credentials necessary within the pipeline to build, synth, update, or publish assets.

---

##### `dockerEnabledForSelfMutation`<sup>Optional</sup> <a name="dockerEnabledForSelfMutation" id="@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.dockerEnabledForSelfMutation"></a>

```typescript
public readonly dockerEnabledForSelfMutation: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Docker for the self-mutate step.

Set this to true if the pipeline itself uses Docker container assets
(for example, if you use `LinuxBuildImage.fromAsset()` as the build
image of a CodeBuild step in the pipeline).

You do not need to set it if you build Docker image assets in the
application Stages and Stacks that are *deployed* by this pipeline.

Configures privileged mode for the self-mutation CodeBuild action.

If you are about to turn this on in an already-deployed Pipeline,
set the value to `true` first, commit and allow the pipeline to
self-update, and only then use the Docker asset in the pipeline.

---

##### `dockerEnabledForSynth`<sup>Optional</sup> <a name="dockerEnabledForSynth" id="@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.dockerEnabledForSynth"></a>

```typescript
public readonly dockerEnabledForSynth: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Docker for the 'synth' step.

Set this to true if you are using file assets that require
"bundling" anywhere in your application (meaning an asset
compilation step will be run with the tools provided by
a Docker image), both for the Pipeline stack as well as the
application stacks.

A common way to use bundling assets in your application is by
using the `aws-cdk-lib/aws-lambda-nodejs` library.

Configures privileged mode for the synth CodeBuild action.

If you are about to turn this on in an already-deployed Pipeline,
set the value to `true` first, commit and allow the pipeline to
self-update, and only then use the bundled asset.

---

##### `enableKeyRotation`<sup>Optional</sup> <a name="enableKeyRotation" id="@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.enableKeyRotation"></a>

```typescript
public readonly enableKeyRotation: boolean;
```

- *Type:* boolean
- *Default:* false (key rotation is disabled)

Enable KMS key rotation for the generated KMS keys.

By default KMS key rotation is disabled, but will add
additional costs when enabled.

---

##### `executionMode`<sup>Optional</sup> <a name="executionMode" id="@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.executionMode"></a>

```typescript
public readonly executionMode: ExecutionMode;
```

- *Type:* aws-cdk-lib.aws_codepipeline.ExecutionMode
- *Default:* ExecutionMode.SUPERSEDED

The method that the pipeline will use to handle multiple executions.

`QUEUED` and `PARALLEL` require `pipelineType: PipelineType.V2`.

> [https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts-how-it-works.html](https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts-how-it-works.html)

---

##### `pipelineName`<sup>Optional</sup> <a name="pipelineName" id="@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.pipelineName"></a>

```typescript
public readonly pipelineName: string;
```

- *Type:* string
- *Default:* Automatically generated

The name of the CodePipeline pipeline.

---

##### `pipelineType`<sup>Optional</sup> <a name="pipelineType" id="@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.pipelineType"></a>

```typescript
public readonly pipelineType: PipelineType;
```

- *Type:* aws-cdk-lib.aws_codepipeline.PipelineType
- *Default:* PipelineType.V2 if the feature flag `CODEPIPELINE_DEFAULT_PIPELINE_TYPE_TO_V2` is true, PipelineType.V1 otherwise

Type of the pipeline.

> [https://docs.aws.amazon.com/codepipeline/latest/userguide/pipeline-types-planning.html](https://docs.aws.amazon.com/codepipeline/latest/userguide/pipeline-types-planning.html)

---

##### `publishAssetsInParallel`<sup>Optional</sup> <a name="publishAssetsInParallel" id="@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.publishAssetsInParallel"></a>

```typescript
public readonly publishAssetsInParallel: boolean;
```

- *Type:* boolean
- *Default:* true

Publish assets in multiple CodeBuild projects.

If set to false, use one Project per type to publish all assets.

Publishing in parallel improves concurrency and may reduce publishing
latency, but may also increase overall provisioning time of the CodeBuild
projects.

Experiment and see what value works best for you.

---

##### `reuseCrossRegionSupportStacks`<sup>Optional</sup> <a name="reuseCrossRegionSupportStacks" id="@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.reuseCrossRegionSupportStacks"></a>

```typescript
public readonly reuseCrossRegionSupportStacks: boolean;
```

- *Type:* boolean
- *Default:* true (Use the same support stack for all pipelines in App)

Reuse the same cross region support stack for all pipelines in the App.

---

##### `role`<sup>Optional</sup> <a name="role" id="@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A new role is created

The IAM role to be assumed by this Pipeline.

---

##### `selfMutation`<sup>Optional</sup> <a name="selfMutation" id="@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.selfMutation"></a>

```typescript
public readonly selfMutation: boolean;
```

- *Type:* boolean
- *Default:* true

Whether the pipeline will update itself.

This needs to be set to `true` to allow the pipeline to reconfigure
itself when assets or stages are being added to it, and `true` is the
recommended setting.

You can temporarily set this to `false` while you are iterating
on the pipeline itself and prefer to deploy changes using `cdk deploy`.

---

##### `selfMutationCodeBuildDefaults`<sup>Optional</sup> <a name="selfMutationCodeBuildDefaults" id="@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.selfMutationCodeBuildDefaults"></a>

```typescript
public readonly selfMutationCodeBuildDefaults: CodeBuildOptions;
```

- *Type:* aws-cdk-lib.pipelines.CodeBuildOptions
- *Default:* Only `codeBuildDefaults` are applied

Additional customizations to apply to the self mutation CodeBuild projects.

---

##### `synthCodeBuildDefaults`<sup>Optional</sup> <a name="synthCodeBuildDefaults" id="@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.synthCodeBuildDefaults"></a>

```typescript
public readonly synthCodeBuildDefaults: CodeBuildOptions;
```

- *Type:* aws-cdk-lib.pipelines.CodeBuildOptions
- *Default:* Only `codeBuildDefaults` are applied

Additional customizations to apply to the synthesize CodeBuild projects.

---

##### `useChangeSets`<sup>Optional</sup> <a name="useChangeSets" id="@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.useChangeSets"></a>

```typescript
public readonly useChangeSets: boolean;
```

- *Type:* boolean
- *Default:* true

Deploy every stack by creating a change set and executing it.

When enabled, creates a "Prepare" and "Execute" action for each stack. Disable
to deploy the stack in one pipeline action.

---

##### `usePipelineRoleForActions`<sup>Optional</sup> <a name="usePipelineRoleForActions" id="@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.usePipelineRoleForActions"></a>

```typescript
public readonly usePipelineRoleForActions: boolean;
```

- *Type:* boolean
- *Default:* false

Use pipeline service role for actions if no action role configured.

---

##### `deploymentStages`<sup>Required</sup> <a name="deploymentStages" id="@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.deploymentStages"></a>

```typescript
public readonly deploymentStages: DeploymentStage[];
```

- *Type:* <a href="#@tts-cdk/build-pipelines.DeploymentStage">DeploymentStage</a>[]

---

##### `mixins`<sup>Optional</sup> <a name="mixins" id="@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.mixins"></a>

```typescript
public readonly mixins: CodePipelineMixin[];
```

- *Type:* <a href="#@tts-cdk/build-pipelines.CodePipelineMixin">CodePipelineMixin</a>[]

---

##### `restartExecutionOnUpdate`<sup>Optional</sup> <a name="restartExecutionOnUpdate" id="@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.restartExecutionOnUpdate"></a>

```typescript
public readonly restartExecutionOnUpdate: boolean;
```

- *Type:* boolean

---

##### `stackFactory`<sup>Optional</sup> <a name="stackFactory" id="@tts-cdk/build-pipelines.MultiDeployCodePipelineProps.property.stackFactory"></a>

```typescript
public readonly stackFactory: IStackFactory;
```

- *Type:* <a href="#@tts-cdk/build-pipelines.IStackFactory">IStackFactory</a>

---

## Classes <a name="Classes" id="Classes"></a>

### AdditionalTrigger <a name="AdditionalTrigger" id="@tts-cdk/build-pipelines.AdditionalTrigger"></a>

Convenience class to create additional trigger {CodePipelineMixin}s for executing a CodePipeline if certain events occur other than a code change.

#### Initializers <a name="Initializers" id="@tts-cdk/build-pipelines.AdditionalTrigger.Initializer"></a>

```typescript
import { AdditionalTrigger } from '@tts-cdk/build-pipelines'

new AdditionalTrigger()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@tts-cdk/build-pipelines.AdditionalTrigger.schedule">schedule</a></code> | Create an additional trigger {CodePipelineMixin} based on a schedule. |
| <code><a href="#@tts-cdk/build-pipelines.AdditionalTrigger.ssmParameterChange">ssmParameterChange</a></code> | Create an additional trigger {CodePipelineMixin} for a SSM parameter value change. |

---

##### `schedule` <a name="schedule" id="@tts-cdk/build-pipelines.AdditionalTrigger.schedule"></a>

```typescript
import { AdditionalTrigger } from '@tts-cdk/build-pipelines'

AdditionalTrigger.schedule(schedule: Schedule)
```

Create an additional trigger {CodePipelineMixin} based on a schedule.

###### `schedule`<sup>Required</sup> <a name="schedule" id="@tts-cdk/build-pipelines.AdditionalTrigger.schedule.parameter.schedule"></a>

- *Type:* aws-cdk-lib.aws_events.Schedule

---

##### `ssmParameterChange` <a name="ssmParameterChange" id="@tts-cdk/build-pipelines.AdditionalTrigger.ssmParameterChange"></a>

```typescript
import { AdditionalTrigger } from '@tts-cdk/build-pipelines'

AdditionalTrigger.ssmParameterChange(parameterNames: ...string[])
```

Create an additional trigger {CodePipelineMixin} for a SSM parameter value change.

###### `parameterNames`<sup>Required</sup> <a name="parameterNames" id="@tts-cdk/build-pipelines.AdditionalTrigger.ssmParameterChange.parameter.parameterNames"></a>

- *Type:* ...string[]

---



### BuildProjectFeature <a name="BuildProjectFeature" id="@tts-cdk/build-pipelines.BuildProjectFeature"></a>

#### Initializers <a name="Initializers" id="@tts-cdk/build-pipelines.BuildProjectFeature.Initializer"></a>

```typescript
import { BuildProjectFeature } from '@tts-cdk/build-pipelines'

new BuildProjectFeature()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@tts-cdk/build-pipelines.BuildProjectFeature.property.policyStatements">policyStatements</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatement[]</code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.BuildProjectFeature.property.postBuildCommands">postBuildCommands</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.BuildProjectFeature.property.preBuildCommands">preBuildCommands</a></code> | <code>string[]</code> | *No description.* |

---

##### `policyStatements`<sup>Required</sup> <a name="policyStatements" id="@tts-cdk/build-pipelines.BuildProjectFeature.property.policyStatements"></a>

```typescript
public readonly policyStatements: PolicyStatement[];
```

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement[]

---

##### `postBuildCommands`<sup>Required</sup> <a name="postBuildCommands" id="@tts-cdk/build-pipelines.BuildProjectFeature.property.postBuildCommands"></a>

```typescript
public readonly postBuildCommands: string[];
```

- *Type:* string[]

---

##### `preBuildCommands`<sup>Required</sup> <a name="preBuildCommands" id="@tts-cdk/build-pipelines.BuildProjectFeature.property.preBuildCommands"></a>

```typescript
public readonly preBuildCommands: string[];
```

- *Type:* string[]

---


### CleanupStacksMixin <a name="CleanupStacksMixin" id="@tts-cdk/build-pipelines.CleanupStacksMixin"></a>

#### Initializers <a name="Initializers" id="@tts-cdk/build-pipelines.CleanupStacksMixin.Initializer"></a>

```typescript
import { CleanupStacksMixin } from '@tts-cdk/build-pipelines'

new CleanupStacksMixin(skipDeletion?: boolean, qualifier?: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@tts-cdk/build-pipelines.CleanupStacksMixin.Initializer.parameter.skipDeletion">skipDeletion</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.CleanupStacksMixin.Initializer.parameter.qualifier">qualifier</a></code> | <code>string</code> | *No description.* |

---

##### `skipDeletion`<sup>Optional</sup> <a name="skipDeletion" id="@tts-cdk/build-pipelines.CleanupStacksMixin.Initializer.parameter.skipDeletion"></a>

- *Type:* boolean

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@tts-cdk/build-pipelines.CleanupStacksMixin.Initializer.parameter.qualifier"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@tts-cdk/build-pipelines.CleanupStacksMixin.postDoBuildPipeline">postDoBuildPipeline</a></code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.CleanupStacksMixin.preDoBuildPipeline">preDoBuildPipeline</a></code> | *No description.* |

---

##### `postDoBuildPipeline` <a name="postDoBuildPipeline" id="@tts-cdk/build-pipelines.CleanupStacksMixin.postDoBuildPipeline"></a>

```typescript
public postDoBuildPipeline(_codePipeline: CodePipeline): void
```

###### `_codePipeline`<sup>Required</sup> <a name="_codePipeline" id="@tts-cdk/build-pipelines.CleanupStacksMixin.postDoBuildPipeline.parameter._codePipeline"></a>

- *Type:* aws-cdk-lib.pipelines.CodePipeline

---

##### `preDoBuildPipeline` <a name="preDoBuildPipeline" id="@tts-cdk/build-pipelines.CleanupStacksMixin.preDoBuildPipeline"></a>

```typescript
public preDoBuildPipeline(_codePipeline: CodePipeline): void
```

###### `_codePipeline`<sup>Required</sup> <a name="_codePipeline" id="@tts-cdk/build-pipelines.CleanupStacksMixin.preDoBuildPipeline.parameter._codePipeline"></a>

- *Type:* aws-cdk-lib.pipelines.CodePipeline

---




### CodeArtifactFeature <a name="CodeArtifactFeature" id="@tts-cdk/build-pipelines.CodeArtifactFeature"></a>

#### Initializers <a name="Initializers" id="@tts-cdk/build-pipelines.CodeArtifactFeature.Initializer"></a>

```typescript
import { CodeArtifactFeature } from '@tts-cdk/build-pipelines'

new CodeArtifactFeature(pipeline: BuildSpecPipeline)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@tts-cdk/build-pipelines.CodeArtifactFeature.Initializer.parameter.pipeline">pipeline</a></code> | <code><a href="#@tts-cdk/build-pipelines.BuildSpecPipeline">BuildSpecPipeline</a></code> | *No description.* |

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@tts-cdk/build-pipelines.CodeArtifactFeature.Initializer.parameter.pipeline"></a>

- *Type:* <a href="#@tts-cdk/build-pipelines.BuildSpecPipeline">BuildSpecPipeline</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@tts-cdk/build-pipelines.CodeArtifactFeature.property.policyStatements">policyStatements</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatement[]</code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.CodeArtifactFeature.property.postBuildCommands">postBuildCommands</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.CodeArtifactFeature.property.preBuildCommands">preBuildCommands</a></code> | <code>string[]</code> | *No description.* |

---

##### `policyStatements`<sup>Required</sup> <a name="policyStatements" id="@tts-cdk/build-pipelines.CodeArtifactFeature.property.policyStatements"></a>

```typescript
public readonly policyStatements: PolicyStatement[];
```

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement[]

---

##### `postBuildCommands`<sup>Required</sup> <a name="postBuildCommands" id="@tts-cdk/build-pipelines.CodeArtifactFeature.property.postBuildCommands"></a>

```typescript
public readonly postBuildCommands: string[];
```

- *Type:* string[]

---

##### `preBuildCommands`<sup>Required</sup> <a name="preBuildCommands" id="@tts-cdk/build-pipelines.CodeArtifactFeature.property.preBuildCommands"></a>

```typescript
public readonly preBuildCommands: string[];
```

- *Type:* string[]

---


### CodePipelineMixin <a name="CodePipelineMixin" id="@tts-cdk/build-pipelines.CodePipelineMixin"></a>

#### Initializers <a name="Initializers" id="@tts-cdk/build-pipelines.CodePipelineMixin.Initializer"></a>

```typescript
import { CodePipelineMixin } from '@tts-cdk/build-pipelines'

new CodePipelineMixin()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@tts-cdk/build-pipelines.CodePipelineMixin.postDoBuildPipeline">postDoBuildPipeline</a></code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.CodePipelineMixin.preDoBuildPipeline">preDoBuildPipeline</a></code> | *No description.* |

---

##### `postDoBuildPipeline` <a name="postDoBuildPipeline" id="@tts-cdk/build-pipelines.CodePipelineMixin.postDoBuildPipeline"></a>

```typescript
public postDoBuildPipeline(_codePipeline: CodePipeline): void
```

###### `_codePipeline`<sup>Required</sup> <a name="_codePipeline" id="@tts-cdk/build-pipelines.CodePipelineMixin.postDoBuildPipeline.parameter._codePipeline"></a>

- *Type:* aws-cdk-lib.pipelines.CodePipeline

---

##### `preDoBuildPipeline` <a name="preDoBuildPipeline" id="@tts-cdk/build-pipelines.CodePipelineMixin.preDoBuildPipeline"></a>

```typescript
public preDoBuildPipeline(_codePipeline: CodePipeline): void
```

###### `_codePipeline`<sup>Required</sup> <a name="_codePipeline" id="@tts-cdk/build-pipelines.CodePipelineMixin.preDoBuildPipeline.parameter._codePipeline"></a>

- *Type:* aws-cdk-lib.pipelines.CodePipeline

---




### DeploymentTargetsSource <a name="DeploymentTargetsSource" id="@tts-cdk/build-pipelines.DeploymentTargetsSource"></a>

#### Initializers <a name="Initializers" id="@tts-cdk/build-pipelines.DeploymentTargetsSource.Initializer"></a>

```typescript
import { DeploymentTargetsSource } from '@tts-cdk/build-pipelines'

new DeploymentTargetsSource()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@tts-cdk/build-pipelines.DeploymentTargetsSource.ssmParameter">ssmParameter</a></code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.DeploymentTargetsSource.staticValue">staticValue</a></code> | *No description.* |

---

##### `ssmParameter` <a name="ssmParameter" id="@tts-cdk/build-pipelines.DeploymentTargetsSource.ssmParameter"></a>

```typescript
import { DeploymentTargetsSource } from '@tts-cdk/build-pipelines'

DeploymentTargetsSource.ssmParameter(name: string)
```

###### `name`<sup>Required</sup> <a name="name" id="@tts-cdk/build-pipelines.DeploymentTargetsSource.ssmParameter.parameter.name"></a>

- *Type:* string

---

##### `staticValue` <a name="staticValue" id="@tts-cdk/build-pipelines.DeploymentTargetsSource.staticValue"></a>

```typescript
import { DeploymentTargetsSource } from '@tts-cdk/build-pipelines'

DeploymentTargetsSource.staticValue(targets: DeploymentTarget[])
```

###### `targets`<sup>Required</sup> <a name="targets" id="@tts-cdk/build-pipelines.DeploymentTargetsSource.staticValue.parameter.targets"></a>

- *Type:* <a href="#@tts-cdk/build-pipelines.DeploymentTarget">DeploymentTarget</a>[]

---



### NoopStackFactory <a name="NoopStackFactory" id="@tts-cdk/build-pipelines.NoopStackFactory"></a>

- *Implements:* <a href="#@tts-cdk/build-pipelines.IStackFactory">IStackFactory</a>

#### Initializers <a name="Initializers" id="@tts-cdk/build-pipelines.NoopStackFactory.Initializer"></a>

```typescript
import { NoopStackFactory } from '@tts-cdk/build-pipelines'

new NoopStackFactory()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@tts-cdk/build-pipelines.NoopStackFactory.create">create</a></code> | *No description.* |

---

##### `create` <a name="create" id="@tts-cdk/build-pipelines.NoopStackFactory.create"></a>

```typescript
public create(scope: Construct, env: Environment): Stack
```

###### `scope`<sup>Required</sup> <a name="scope" id="@tts-cdk/build-pipelines.NoopStackFactory.create.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `env`<sup>Required</sup> <a name="env" id="@tts-cdk/build-pipelines.NoopStackFactory.create.parameter.env"></a>

- *Type:* aws-cdk-lib.Environment

---




### SSMParametersFeature <a name="SSMParametersFeature" id="@tts-cdk/build-pipelines.SSMParametersFeature"></a>

#### Initializers <a name="Initializers" id="@tts-cdk/build-pipelines.SSMParametersFeature.Initializer"></a>

```typescript
import { SSMParametersFeature } from '@tts-cdk/build-pipelines'

new SSMParametersFeature(pipeline: BuildSpecPipeline)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@tts-cdk/build-pipelines.SSMParametersFeature.Initializer.parameter.pipeline">pipeline</a></code> | <code><a href="#@tts-cdk/build-pipelines.BuildSpecPipeline">BuildSpecPipeline</a></code> | *No description.* |

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@tts-cdk/build-pipelines.SSMParametersFeature.Initializer.parameter.pipeline"></a>

- *Type:* <a href="#@tts-cdk/build-pipelines.BuildSpecPipeline">BuildSpecPipeline</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@tts-cdk/build-pipelines.SSMParametersFeature.property.policyStatements">policyStatements</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatement[]</code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.SSMParametersFeature.property.postBuildCommands">postBuildCommands</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@tts-cdk/build-pipelines.SSMParametersFeature.property.preBuildCommands">preBuildCommands</a></code> | <code>string[]</code> | *No description.* |

---

##### `policyStatements`<sup>Required</sup> <a name="policyStatements" id="@tts-cdk/build-pipelines.SSMParametersFeature.property.policyStatements"></a>

```typescript
public readonly policyStatements: PolicyStatement[];
```

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement[]

---

##### `postBuildCommands`<sup>Required</sup> <a name="postBuildCommands" id="@tts-cdk/build-pipelines.SSMParametersFeature.property.postBuildCommands"></a>

```typescript
public readonly postBuildCommands: string[];
```

- *Type:* string[]

---

##### `preBuildCommands`<sup>Required</sup> <a name="preBuildCommands" id="@tts-cdk/build-pipelines.SSMParametersFeature.property.preBuildCommands"></a>

```typescript
public readonly preBuildCommands: string[];
```

- *Type:* string[]

---


### SynthCommands <a name="SynthCommands" id="@tts-cdk/build-pipelines.SynthCommands"></a>

#### Initializers <a name="Initializers" id="@tts-cdk/build-pipelines.SynthCommands.Initializer"></a>

```typescript
import { SynthCommands } from '@tts-cdk/build-pipelines'

new SynthCommands()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@tts-cdk/build-pipelines.SynthCommands.property.projenCdkApp">projenCdkApp</a></code> | <code>string[]</code> | *No description.* |

---

##### `projenCdkApp`<sup>Required</sup> <a name="projenCdkApp" id="@tts-cdk/build-pipelines.SynthCommands.property.projenCdkApp"></a>

```typescript
public readonly projenCdkApp: string[];
```

- *Type:* string[]

---

### SynthProfiles <a name="SynthProfiles" id="@tts-cdk/build-pipelines.SynthProfiles"></a>

#### Initializers <a name="Initializers" id="@tts-cdk/build-pipelines.SynthProfiles.Initializer"></a>

```typescript
import { SynthProfiles } from '@tts-cdk/build-pipelines'

new SynthProfiles()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@tts-cdk/build-pipelines.SynthProfiles.projenCdkApp">projenCdkApp</a></code> | *No description.* |

---

##### `projenCdkApp` <a name="projenCdkApp" id="@tts-cdk/build-pipelines.SynthProfiles.projenCdkApp"></a>

```typescript
import { SynthProfiles } from '@tts-cdk/build-pipelines'

SynthProfiles.projenCdkApp(input?: IFileSetProducer)
```

###### `input`<sup>Optional</sup> <a name="input" id="@tts-cdk/build-pipelines.SynthProfiles.projenCdkApp.parameter.input"></a>

- *Type:* aws-cdk-lib.pipelines.IFileSetProducer

---



## Protocols <a name="Protocols" id="Protocols"></a>

### IDeploymentTargetsProvider <a name="IDeploymentTargetsProvider" id="@tts-cdk/build-pipelines.IDeploymentTargetsProvider"></a>

- *Implemented By:* <a href="#@tts-cdk/build-pipelines.IDeploymentTargetsProvider">IDeploymentTargetsProvider</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@tts-cdk/build-pipelines.IDeploymentTargetsProvider.provide">provide</a></code> | *No description.* |

---

##### `provide` <a name="provide" id="@tts-cdk/build-pipelines.IDeploymentTargetsProvider.provide"></a>

```typescript
public provide(scope: Construct): DeploymentTarget[]
```

###### `scope`<sup>Required</sup> <a name="scope" id="@tts-cdk/build-pipelines.IDeploymentTargetsProvider.provide.parameter.scope"></a>

- *Type:* constructs.Construct

---


### IStackFactory <a name="IStackFactory" id="@tts-cdk/build-pipelines.IStackFactory"></a>

- *Implemented By:* <a href="#@tts-cdk/build-pipelines.NoopStackFactory">NoopStackFactory</a>, <a href="#@tts-cdk/build-pipelines.IStackFactory">IStackFactory</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@tts-cdk/build-pipelines.IStackFactory.create">create</a></code> | *No description.* |

---

##### `create` <a name="create" id="@tts-cdk/build-pipelines.IStackFactory.create"></a>

```typescript
public create(scope: Construct, env: Environment): Stack
```

###### `scope`<sup>Required</sup> <a name="scope" id="@tts-cdk/build-pipelines.IStackFactory.create.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `env`<sup>Required</sup> <a name="env" id="@tts-cdk/build-pipelines.IStackFactory.create.parameter.env"></a>

- *Type:* aws-cdk-lib.Environment

---


