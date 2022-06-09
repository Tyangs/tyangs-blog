import { getHeadingAnchorMap } from '@utils/mdHeadingParse';
import React, { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import { HeadingProps } from 'react-markdown/lib/ast-to-react';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import styles from './index.module.scss';
interface BlogContentProps {
	title: string;
	content: string;
}

const BlogContent = (props: BlogContentProps) => {
	const { title, content } = props;

	const customComponents = useMemo(() => {
		const headingAnchorMap = getHeadingAnchorMap(content);

		return {
			h2: ({ children }: HeadingProps) => (
				<h2 id={headingAnchorMap[children[0] as string]}>{children[0]}</h2>
			),
			h3: ({ children }: HeadingProps) => (
				<h3 id={headingAnchorMap[children[0] as string]}>{children[0]}</h3>
			),
			h4: ({ children }: HeadingProps) => (
				<h4 id={headingAnchorMap[children[0] as string]}>{children[0]}</h4>
			),
			h5: ({ children }: HeadingProps) => (
				<h5 id={headingAnchorMap[children[0] as string]}>{children[0]}</h5>
			),
			h6: ({ children }: HeadingProps) => (
				<h6 id={headingAnchorMap[children[0] as string]}>{children[0]}</h6>
			),
		};
	}, [content]);

	return (
		<div className={styles['markdown-body']}>
			<ReactMarkdown
				components={customComponents}
				linkTarget="_blank"
				rehypePlugins={[rehypeRaw, rehypeHighlight]}
				remarkPlugins={[remarkGfm]}
			>
				{content}
			</ReactMarkdown>
		</div>
	);
};

export default BlogContent;
