import { getLast } from './array';
import { getTargetStringCount } from './string';

interface IMdHeadingInfo {
	level: 1 | 2 | 3 | 4 | 5 | 6;
	title: string;
	children: IMdHeadingInfo[];
}

export const headingParse = (mdContent: string): IMdHeadingInfo[] => {
	// start with `#`
	const startWithNumberSignArray = mdContent.split('\n').filter(c => c.startsWith('#'));

	const parsedResult: IMdHeadingInfo[] = [];

	startWithNumberSignArray.forEach(item => {
		const level = getTargetStringCount(item, '#') as IMdHeadingInfo['level'];
		// pass Heading 1 case
		if (level === 1) return;

		const title = item.split('# ')[1];

		const headingInfo = {
			level,
			title,
			children: [],
		};

		if (!parsedResult.length) {
			parsedResult.push(headingInfo);
		} else {
			insertHeadingInfo(parsedResult, headingInfo);
		}
	});

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
