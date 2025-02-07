export const jsonToHex = (config: any) => {
  const text = JSON.stringify(config);
  const encoder = new TextEncoder();
  const bytes = encoder.encode(text);
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join(
    '',
  );
};

export const buildVsCodeRemoteUrl = (
  containerId: string,
  workspace: string,
) => {
  const config = {
    containerName: containerId,
  };
  const hex = jsonToHex(config);
  return {
    hex: hex,
    config: config,
    workspace: workspace,
    url: `vscode-remote://dev-container+${hex}/${workspace}`,
  };
};
