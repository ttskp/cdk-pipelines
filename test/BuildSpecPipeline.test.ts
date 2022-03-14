import { Repository } from 'aws-cdk-lib/aws-codecommit';
import { Stack } from 'aws-cdk-lib';

test.skip('create app', () => {
  /* const stack = new Stack();
  new BuildSpecPipeline(stack, 'TestPipeline', {});
  expect(stack).toHaveResource('AWS::CodeCommit::Repository'); */

  const stack = new Stack();
  new Repository(stack, 'Repository', {
    repositoryName: 'test',
  });

  //expect(stack).toHaveResource('AWS::CodeCommit::Repository');
});
