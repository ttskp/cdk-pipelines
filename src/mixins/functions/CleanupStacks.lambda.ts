import { CloudFormationClient, DeleteStackCommand } from '@aws-sdk/client-cloudformation';
import { AssumeRoleCommand, Credentials, STSClient } from '@aws-sdk/client-sts';

export const getDeploymentAccountCredentials = async (account: string, region: string) => {
  const stsClient = new STSClient({ region });
  const command = new AssumeRoleCommand({
    RoleSessionName: 'CleanupStack',
    RoleArn: `arn:aws:iam::${account}:role/cdk-${process.env.CDK_QUALIFIER}-deploy-role-${account}-${region}`,
  });

  const result = await stsClient.send(command);

  console.log(JSON.stringify(result));
  if (!result.Credentials) {
    throw new Error(`Cannot assume cdk-${process.env.CDK_QUALIFIER}-deploy-role in account/region -> ${account}/${region}.`);
  }

  return result.Credentials!;
};

export const deleteCloudFormationStack = async (stackName: string, region: string, credentials: Credentials) => {
  const client = new CloudFormationClient({
    region: region,
    credentials: {
      accessKeyId: credentials.AccessKeyId!,
      secretAccessKey: credentials.SecretAccessKey!,
      sessionToken: credentials.SessionToken,
    },
  });
  const command = new DeleteStackCommand({ StackName: stackName });
  await client.send(command);
};

const onCreate = async (event: any) => {
  console.log('Create');
  return { PhysicalResourceId: `CPS-${event.ResourceProperties.account}-${event.ResourceProperties.region}` };
};
const onUpdate = async (event: any) => {
  console.log('Update');
  return { PhysicalResourceId: event.PhysicalResourceId };
};
const onDelete = async (event: any) => {
  if (process.env.SKIP_DELETION && process.env.SKIP_DELETION == 'true') {
    console.log('Skipping Deletion.');
    return { PhysicalResourceId: event.PhysicalResourceId };
  }
  console.log('Delete');
  const { stackName, account, region } = event.ResourceProperties;
  const credentials = await getDeploymentAccountCredentials(account, region);
  await deleteCloudFormationStack(stackName, region, credentials);
  return { PhysicalResourceId: event.PhysicalResourceId };
};

export const handler = async (event: any) => {
  console.log(JSON.stringify(event));
  if (event.RequestType == 'Create') return onCreate(event);
  if (event.RequestType == 'Update') return onUpdate(event);
  if (event.RequestType == 'Delete') return onDelete(event);
  throw Error(`Invalid request type: ${event.RequestType}`);
};
