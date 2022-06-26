import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

// export type BlogOptionItem = 'title' | 'date' | 'slug' | 'content';
export type IBlogInfo = {
	slug: string;
	title: string;
	content: string;
	date: string;
	menu_active?: boolean;
	tag?: string;
};

const blogsDir = path.join(process.cwd(), '_blogs');

/**
 * get all blog slug(file name) from _blogs dir
 * @returns blog slug array
 */
export const getBlogSlugs = () => fs.readdirSync(blogsDir);

/**
 * get blogInfo by slug
 * @param slug blog file name in the _blogs dir
 * @returns blogInfo
 */
export const getBlogBySlug = (slug: string): IBlogInfo => {
	const realSlug = slug.replace(/\.mdx$/, '');
	const blogPath = path.join(blogsDir, `${realSlug}.mdx`);
	const fileContents = fs.readFileSync(blogPath, 'utf-8');
	const { data, content } = matter(fileContents);

	return {
		title: data.title,
		date: data.date,
		menu_active: !!data.menu_active,
		tag: data.tag || '',
		slug: realSlug,
		content,
	};
};

/**
 * get all blogInfo from the _blogs dir
 * @returns blogInfo array
 */
export const getAllBlogs = () => {
	const slugs = getBlogSlugs();
	const blogs = slugs.map(slug => getBlogBySlug(slug)).sort((a, b) => (a.date > b.date ? -1 : 1));

	return blogs;
};
