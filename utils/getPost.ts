import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type BlogOptionItem = 'title' | 'date' | 'slug' | 'content';

const blogsDir = path.join(process.cwd(), '_blogs');

// 拿到 _blogs 所有文件夹下的文件名，即  slug
export const getBlogSlugs = () => fs.readdirSync(blogsDir);

// 根据 slug 和 options 获取 post 文件内容
export const getBlogBySlug = (slug: string, options: BlogOptionItem[]) => {
	const realSlug = slug.replace(/\.md$/, '');
	const blogPath = path.join(blogsDir, `${realSlug}.md`);
	const fileContents = fs.readFileSync(blogPath, 'utf-8');
	const { data, content } = matter(fileContents);

	const result: Record<string, string> = {};

	options.forEach(option => {
		if (option === 'slug') {
			result[option] = realSlug;
		}
		if (option === 'content') {
			result[option] = content;
		}

		if (!!data[option]) {
			result[option] = data[option];
		}
	});

	return result;
};

// 获取 _blogs 下所有的 post 信息
export const getAllBlogs = (options: BlogOptionItem[] = []) => {
	const slugs = getBlogSlugs();
	const blogs = slugs
		.map(slug => getBlogBySlug(slug, options))
		.sort((a, b) => (a.date > b.date ? -1 : 1));

	return blogs;
};
