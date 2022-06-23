import BackButton from '@components/BackButton';
import BlogContent from '@components/BlogContent';
import Layout from '@components/Layout';
import { getAllBlogs, getBlogBySlug, IBlogInfo } from '@utils/getBlog';
import Anchor from 'components/Anchor';
import React from 'react';

interface IPathParams {
	slug: string;
}

interface IPathsProps {
	params: IPathParams;
}

interface IBlogProps {
	blogInfo: IBlogInfo;
}

const Blog = (props: IBlogProps) => {
	const {
		blogInfo: { title, content, menu_active },
	} = props;

	return (
		<Layout menu={menu_active ? <Anchor content={content} /> : undefined}>
			<BackButton />
			<BlogContent title={title} content={content} />
		</Layout>
	);
};

export default Blog;

export async function getStaticProps({ params }: IPathsProps) {
	const blogInfo = getBlogBySlug(params.slug);

	const props = {
		blogInfo,
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
