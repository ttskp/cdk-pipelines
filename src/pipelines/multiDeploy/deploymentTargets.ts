import { ContextProvider, Environment, Stack } from 'aws-cdk-lib';
import { ContextProvider as CXSchema } from 'aws-cdk-lib/cloud-assembly-schema';
import { Step } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';

export interface DeploymentTarget {
  readonly account: string;
  readonly region: string;
  readonly name?: string;
}

export interface IDeploymentTargetsProvider {
  provide(scope: Construct): DeploymentTarget[];
}

export interface IStackFactory {
  create(scope: Construct, env: Environment): Stack;
}

export class NoopStackFactory implements IStackFactory {
  create(scope: Construct, env: Environment): Stack {
    return new Stack(scope, 'noop-stack', { env });
  }
}

export interface DeploymentStage {
  readonly name: string;
  readonly targets: IDeploymentTargetsProvider;
  readonly stackFactory?: IStackFactory;
  readonly requireManualApproval?: boolean;
  readonly pre?: Step[];
  readonly post?: Step[];
}

export abstract class DeploymentTargetsSource {

  public static staticValue(targets: DeploymentTarget[]): IDeploymentTargetsProvider {
    return new (class DeploymentTargetsProvider {
      provide(): DeploymentTarget[] {
        return targets;
      }
    })();
  }

  public static ssmParameter(name: string): IDeploymentTargetsProvider {
    return new (class DeploymentTargetsProvider {
      provide(scope: Construct) {
        let parameterValue = DeploymentTargetsSource.ssmStringParameterLookupWithDefaultValue(scope, name, '[]');
        return JSON.parse(parameterValue) as DeploymentTarget[];
      }
    })();
  }

  private static ssmStringParameterLookupWithDefaultValue(scope: Construct, name: string, defaultValue: string): string {
    return ContextProvider.getValue(scope, {
      provider: CXSchema.SSM_PARAMETER_PROVIDER, props: { parameterName: name }, dummyValue: defaultValue,
    }).value;
  }
}
