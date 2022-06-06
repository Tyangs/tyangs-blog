export const getPreviewContent = (mdContent: string) => mdContent.replaceAll(/[# | * | `]/g, ' ');

/**
 * Search for the count of occurrences of the target string in str.
 * @param str the string that will be searched
 * @param target target string
 * @returns the count of target in str
 */
export const getTargetStringCount = (str: string, target: string): number =>
	str.includes(target) ? str.split(target).length - 1 : 0;
