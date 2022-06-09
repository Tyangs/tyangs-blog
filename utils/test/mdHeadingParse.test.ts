import { IMdHeadingInfo, mdHeadingParse } from '../mdHeadingParse';

describe('parse Markdown heading by content', () => {
	it('parse markdown heading to headingInfo', () => {
		const markdown =
			'# About Git\n## Git Flow\n## Common Git Commands\n### Setup and Config\n#### git config\n### Getting and Creating Projects\n#### git init\n#### git clone\n### Basic Snapshotting\n#### git add\n#### git status\n#### git commit\n';

		const expectResult: IMdHeadingInfo[] = [
			{
				level: 2,
				title: 'Git Flow',
				anchor: 'git-flow',
			},
			{
				level: 2,
				title: 'Common Git Commands',
				anchor: 'common-git-commands',
			},
			{
				level: 3,
				title: 'Setup and Config',
				anchor: 'setup-and-config',
			},
			{
				level: 4,
				title: 'git config',
				anchor: 'git-config',
			},
			{
				level: 3,
				title: 'Getting and Creating Projects',
				anchor: 'getting-and-creating-projects',
			},
			{
				level: 4,
				title: 'git init',
				anchor: 'git-init',
			},
			{
				level: 4,
				title: 'git clone',
				anchor: 'git-clone',
			},
			{
				level: 3,
				title: 'Basic Snapshotting',
				anchor: 'basic-snapshotting',
			},
			{
				level: 4,
				title: 'git add',
				anchor: 'git-add',
			},
			{
				level: 4,
				title: 'git status',
				anchor: 'git-status',
			},
			{
				level: 4,
				title: 'git commit',
				anchor: 'git-commit',
			},
		];

		const parsedResult = mdHeadingParse(markdown);
		expect(parsedResult).toEqual(expectResult);
	});
});
