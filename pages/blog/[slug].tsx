import BackButton from '@components/BackButton';
import BlogContent from '@components/BlogContent';
import Layout from '@components/Layout';
import { BlogInfo, getAllBlogs, getBlogBySlug } from '@utils/getBlog';
import Anchor from 'components/Anchor';
import React from 'react';

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
		blogInfo: { title, content },
	} = props;

	return (
		<Layout menu={<Anchor content={content} />}>
			<BackButton />
			<BlogContent title={title} content={content} />
		</Layout>
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
