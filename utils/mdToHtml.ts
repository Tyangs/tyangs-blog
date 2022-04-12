import { remark } from 'remark';
import html from 'remark-html';

export const mdToHtml = async (md: any) => {
	const result = await remark()
		.use(html)
		.process(md);

	return result.toString();
};
