import { getLast } from './array';
import { getAnchorByTitle, getTargetStringCount } from './string';

export interface IMdHeadingInfo {
	level: 1 | 2 | 3 | 4 | 5 | 6;
	title: string;
	children: IMdHeadingInfo[];
}

/**
 * Not use currently
 * @deprecated
 */
export const headingParse = (mdContent: string): IMdHeadingInfo[] => {
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
			title,
			children: [],
		};

		if (!pre.length) {
			pre.push(currentHeadingInfo);
		} else {
			insertHeadingInfo(pre, currentHeadingInfo);
		}

		return pre;
	}, []);

	return parsedResult;
};

export const insertHeadingInfo = (headingInfo: IMdHeadingInfo[], target: IMdHeadingInfo) => {
	const fatherInfo: IMdHeadingInfo[] = headingInfo;
	const resultLastNode = getLast(headingInfo);

	if (target.level <= resultLastNode.level) {
		fatherInfo.push(target);
		return;
	}

	if (resultLastNode.children.length) {
		insertHeadingInfo(resultLastNode.children, target);
	} else {
		resultLastNode.children.push(target);
	}
};
