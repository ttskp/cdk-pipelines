import { ContextProvider, Environment } from 'aws-cdk-lib';
import { ContextProvider as CXSchema } from 'aws-cdk-lib/cloud-assembly-schema';
import { Construct } from 'constructs';

type DeploymentTargetsProvider = (scope: Construct) => DeploymentTarget[];
export type StackFactory = (scope: Construct, env: Environment) => void;

export interface DeploymentTarget {
  account: string;
  region: string;
}

export interface DeploymentStage {
  readonly name: string;
  readonly targets: DeploymentTargetsProvider;
  readonly stackFactory: StackFactory,
  readonly requireManualApproval?: boolean;
}

export class DeploymentTargetsSource {

  public static staticValue(targets: DeploymentTarget[]): DeploymentTargetsProvider {
    return () => targets;
  }

  public static ssmParameter(name: string): DeploymentTargetsProvider {
    return (scope: Construct) => {
      let parameterValue = DeploymentTargetsSource.ssmStringParameterLookupWithDefaultValue(scope, name, '[]');
      return JSON.parse(parameterValue) as DeploymentTarget[];
    };
  }

  private static ssmStringParameterLookupWithDefaultValue(scope: Construct, name: string, defaultValue: string): string {
    return ContextProvider.getValue(scope, {
      provider: CXSchema.SSM_PARAMETER_PROVIDER, props: { parameterName: name }, dummyValue: defaultValue,
    }).value;
  }
}
