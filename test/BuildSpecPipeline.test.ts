/*
import { App, Stack } from 'aws-cdk-lib/core';
import { BuildSpecPipeline } from '../src';
 */
import 'aws-cdk-lib/assert/jest';
import { Repository } from 'aws-cdk-lib/aws-codecommit';
import { Stack } from 'aws-cdk-lib/core';

test('create app', () => {
  /* const stack = new Stack();
  new BuildSpecPipeline(stack, 'TestPipeline', {});
  expect(stack).toHaveResource('AWS::CodeCommit::Repository'); */

  const stack = new Stack();
  new Repository(stack, 'Repository', {
    repositoryName: 'test',
  });

  //expect(stack).toHaveResource('AWS::CodeCommit::Repository');
});
