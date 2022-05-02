import { PolicyStatement } from 'aws-cdk-lib/aws-iam';

export class BuildProjectFeature {
    readonly policyStatements: Array<PolicyStatement> = [];
    readonly preBuildCommands: Array<string> = [];
    readonly postBuildCommands: Array<string> = [];
}
