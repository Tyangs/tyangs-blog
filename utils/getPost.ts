import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// export type BlogOptionItem = 'title' | 'date' | 'slug' | 'content';
export type BlogInfo = {
	title: string;
	date: string;
	slug: string;
	content: string;
};

const blogsDir = path.join(process.cwd(), '_blogs');

// 拿到 _blogs 所有文件夹下的文件名，即  slug
export const getBlogSlugs = () => fs.readdirSync(blogsDir);

// 根据 slug 获取 blogInfo
export const getBlogBySlug = (slug: string): BlogInfo => {
	const realSlug = slug.replace(/\.md$/, '');
	const blogPath = path.join(blogsDir, `${realSlug}.md`);
	const fileContents = fs.readFileSync(blogPath, 'utf-8');
	const { data, content } = matter(fileContents);

	return {
		title: data.title,
		date: data.date,
		slug: realSlug,
		content,
	};
};

// 获取 _blogs 下所有的 blogInfo 信息
export const getAllBlogs = () => {
	const slugs = getBlogSlugs();
	const blogs = slugs.map(slug => getBlogBySlug(slug)).sort((a, b) => (a.date > b.date ? -1 : 1));

	return blogs;
};
