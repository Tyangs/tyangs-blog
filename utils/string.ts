export const getPreviewContent = (mdContent: string) => mdContent.replaceAll(/[# | * | `]/g, ' ');
