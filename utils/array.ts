/**
 * get array last node, if array is empty, will return `undefined`.
 * @param array
 * @returns array last node
 */
export const getLast = <T extends any>(array: Array<T>) => array[array.length - 1];
