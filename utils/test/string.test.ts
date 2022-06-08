import { getAnchorByTitle, getPreviewContent, getTargetStringCount } from '../string';

test('parse preview content', () => {
	const mdContent = "# About Git *Young* `const a = '555'`";

	const previewContent = getPreviewContent(mdContent);
	expect(previewContent).toBe("  About Git  Young   const a = '555' ");
});

describe('get target string in long string count', () => {
	const longStr = 'Hello Tyangs Blog';
	it('return target count when target in long string', () => {
		const targetStr = 'l';

		const targetCount = getTargetStringCount(longStr, targetStr);
		expect(targetCount).toBe(3);
	});
	it('return 0 when target is not in long string', () => {
		const targetStr = 'w';

		const targetCount = getTargetStringCount(longStr, targetStr);
		expect(targetCount).toBe(0);
	});
});

test('adapter title to anchor', () => {
	const title1 = 'Ni Hao Wa';
	const title2 = '你 好 Wa';

	const anchor1 = getAnchorByTitle(title1);
	const anchor2 = getAnchorByTitle(title2);

	expect(anchor1).toBe('ni-hao-wa');
	expect(anchor2).toBe('你-好-wa');
});
