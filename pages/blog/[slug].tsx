import React from 'react';
import { getAllBlogs, getBlogBySlug, BlogInfo } from '@utils/getBlog';
import BackButton from '@components/BackButton';
import BlogContent from '@components/BlogContent';

type PathParams = {
	slug: string;
};

type PathsProps = {
	params: PathParams;
};

interface IBlogProps {
	blogInfo: BlogInfo;
}

const Blog = (props: IBlogProps) => {
	const {
		blogInfo: { content },
	} = props;

	return (
		<div>
			<BackButton />
			<BlogContent content={content} />
		</div>
	);
};

export default Blog;

export async function getStaticProps({ params }: PathsProps) {
	const blogInfo = getBlogBySlug(params.slug);
	const content = blogInfo.content;

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
	const blogs = getAllBlogs();

	return {
		paths: blogs.map(blog => ({
			params: {
				slug: blog.slug,
			},
		})),
		fallback: false,
	};
};
