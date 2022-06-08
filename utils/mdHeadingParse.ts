import { getLast } from './array';
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
			children: [],
		};

		pre.push(currentHeadingInfo);

		return pre;
	}, []);

	return parsedResult;
};
