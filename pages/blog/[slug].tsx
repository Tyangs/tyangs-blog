import React from 'react';
import { getAllBlogs, getBlogBySlug } from '@utils/getPost';
import { mdToHtml } from '@utils/mdToHtml';

type PathParams = {
	slug: string;
};

type PathsProps = {
	params: PathParams;
};

interface IBlogProps {
	blogInfo: { title: string; date: string; slug: string; content: string };
}

const Blog = (props: IBlogProps) => {
	const {
		blogInfo: { title, date, slug, content },
	} = props;

	return (
		<div>
			<div>{title}</div>
			<div>{date}</div>
			<div dangerouslySetInnerHTML={{ __html: content }} />
		</div>
	);
};

export default Blog;

export async function getStaticProps({ params }: PathsProps) {
	const blogInfo = getBlogBySlug(params.slug, ['title', 'date', 'slug', 'content']);
	const content = await mdToHtml(blogInfo.content || '');

	const props = {
		blogInfo: {
			...blogInfo,
			content,
		},
	};

	return {
		props,
	};
}

export const getStaticPaths = async () => {
	const blogs = getAllBlogs(['slug']);

	return {
		paths: blogs.map(blog => ({
			params: {
				slug: blog.slug,
			},
		})),
		fallback: false,
	};
};
