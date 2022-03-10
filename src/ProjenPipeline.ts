import { Construct } from 'constructs';
import { BuildSpecPipeline, BuildSpecPipelineProps } from './BuildSpecPipeline';


export interface ProjenPipelineProps extends BuildSpecPipelineProps {
}

export class ProjenPipeline extends BuildSpecPipeline {

  constructor(scope: Construct, name: string, props?: ProjenPipelineProps) {
    super(scope, name, props);
  }

  protected extendBuildSpec(buildSpec: any) {
    buildSpec.phases.install.commands.push('echo HELLO PROJEN PIPELINE');
  }
}
