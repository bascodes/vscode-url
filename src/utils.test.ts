import { buildVsCodeRemoteUrl } from './utils.js';
import { test, expect } from 'vitest';

test('buildVsCodeRemoteUrl', () => {
  expect(buildVsCodeRemoteUrl('container', 'workspace')).toEqual({
    hex: '7b22636f6e7461696e65724e616d65223a22636f6e7461696e6572227d',
    config: { containerName: 'container' },
    workspace: 'workspace',
    url: 'vscode-remote://dev-container+7b22636f6e7461696e65724e616d65223a22636f6e7461696e6572227d/workspace',
  });
});
