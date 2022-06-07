export const getPreviewContent = (mdContent: string) =>
	mdContent.replaceAll(/[# | * | ` | -]/g, ' ');

/**
 * Search for the count of occurrences of the target string in long string.
 * @param longStr the string that will be searched
 * @param target target string
 * @returns the count of target in long string
 */
export const getTargetStringCount = (longStr: string, target: string): number =>
	longStr.includes(target) ? longStr.split(target).length - 1 : 0;

export const getAnchorByTitle = (title: string) => title.toLowerCase().replaceAll(' ', '-');
