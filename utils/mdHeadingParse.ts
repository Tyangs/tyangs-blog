import { getAnchorByTitle, getTargetStringCount } from './string';

export interface IMdHeadingInfo {
	level: 1 | 2 | 3 | 4 | 5 | 6;
	anchor: string;
	title: string;
}

export const mdHeadingParse = (mdContent: string): IMdHeadingInfo[] => {
	// start with `#`
	const startWithNumberSignArray = mdContent.split('\n').filter(c => c.startsWith('#'));

	const parsedResult = startWithNumberSignArray.reduce<IMdHeadingInfo[]>((pre, curr) => {
		const level = getTargetStringCount(curr, '#') as IMdHeadingInfo['level'];
		// pass Heading 1 case
		if (level === 1) return pre;

		const title = curr.split('# ')[1];

		const anchor = getAnchorByTitle(title);

		const currentHeadingInfo = {
			level,
			anchor,
			title,
		};

		pre.push(currentHeadingInfo);

		return pre;
	}, []);

	return parsedResult;
};

export const getHeadingAnchorMap = (mdContent: string): Record<string, string> => {
	const headingInfo = mdHeadingParse(mdContent);
	const headingAnchorMap = headingInfo.reduce<Record<string, string>>((pre, curr, index) => {
		pre[curr.title] = `heading-${index + 1}`;
		return pre;
	}, {});

	return headingAnchorMap;
};
