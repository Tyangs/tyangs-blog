import { headingParse, IMdHeadingInfo, insertHeadingInfo } from '../headingParse';

describe('parse Markdown heading to heading info', () => {
	it('insert same level headingInfo to headingInfo list', () => {
		const headingInfoList: IMdHeadingInfo[] = [
			{
				level: 2,
				title: 'About Me',
				children: [],
			},
		];
		const target: IMdHeadingInfo = {
			level: 2,
			title: 'About My Family',
			children: [],
		};

		insertHeadingInfo(headingInfoList, target);

		expect(headingInfoList).toEqual([
			{
				level: 2,
				title: 'About Me',
				children: [],
			},
			{
				level: 2,
				title: 'About My Family',
				children: [],
			},
		]);
	});
	it('insert children level headingInfo to headingInfo list', () => {
		const headingInfoList: IMdHeadingInfo[] = [
			{
				level: 2,
				title: 'About Me',
				children: [],
			},
		];
		const target: IMdHeadingInfo = {
			level: 3,
			title: 'About My Life',
			children: [],
		};

		insertHeadingInfo(headingInfoList, target);

		expect(headingInfoList).toEqual([
			{
				level: 2,
				title: 'About Me',
				children: [
					{
						level: 3,
						title: 'About My Life',
						children: [],
					},
				],
			},
		]);
	});
	it('insert children level headingInfo to a complicated headingInfo list', () => {
		const headingInfoList: IMdHeadingInfo[] = [
			{
				level: 2,
				title: 'About Me',
				children: [
					{ level: 3, title: 'About My Work', children: [] },
					{
						level: 3,
						title: 'About My Game',
						children: [
							{
								level: 4,
								title: 'About LOL',
								children: [],
							},
						],
					},
				],
			},
		];
		const target1: IMdHeadingInfo = {
			level: 3,
			title: 'About Music I Like',
			children: [],
		};
		insertHeadingInfo(headingInfoList, target1);

		const target2: IMdHeadingInfo = {
			level: 4,
			title: 'About Jay',
			children: [],
		};
		insertHeadingInfo(headingInfoList, target2);

		expect(headingInfoList).toEqual([
			{
				level: 2,
				title: 'About Me',
				children: [
					{ level: 3, title: 'About My Work', children: [] },
					{
						level: 3,
						title: 'About My Game',
						children: [
							{
								level: 4,
								title: 'About LOL',
								children: [],
							},
						],
					},
					{
						level: 3,
						title: 'About Music I Like',
						children: [
							{
								level: 4,
								title: 'About Jay',
								children: [],
							},
						],
					},
				],
			},
		]);
	});
	it('parse markdown heading to headingInfo', () => {
		const markdown =
			'# About Git\n## Git Flow\n## Common Git Commands\n### Setup and Config\n#### git config\n### Getting and Creating Projects\n#### git init\n#### git clone\n### Basic Snapshotting\n#### git add\n#### git status\n#### git commit\n';

		const expectResult = [
			{
				level: 2,
				title: 'Git Flow',
				children: [],
			},
			{
				level: 2,
				title: 'Common Git Commands',
				children: [
					{
						level: 3,
						title: 'Setup and Config',
						children: [{ level: 4, title: 'git config', children: [] }],
					},
					{
						level: 3,
						title: 'Getting and Creating Projects',
						children: [
							{
								level: 4,
								title: 'git init',
								children: [],
							},
							{
								level: 4,
								title: 'git clone',
								children: [],
							},
						],
					},
					{
						level: 3,
						title: 'Basic Snapshotting',
						children: [
							{
								level: 4,
								title: 'git add',
								children: [],
							},
							{
								level: 4,
								title: 'git status',
								children: [],
							},
							{
								level: 4,
								title: 'git commit',
								children: [],
							},
						],
					},
				],
			},
		];

		const parsedResult = headingParse(markdown);
		expect(parsedResult).toEqual(expectResult);
	});
});
