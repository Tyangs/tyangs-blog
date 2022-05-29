import React from 'react';
import ReactMarkdown from 'react-markdown';
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

	return (
		// <div>
		// 	<h1 className={styles['markdown-title']}>{title}</h1>
		<div className={styles['markdown-body']}>
			<ReactMarkdown
				linkTarget="_blank"
				rehypePlugins={[rehypeRaw, rehypeHighlight]}
				remarkPlugins={[remarkGfm]}
			>
				{content}
			</ReactMarkdown>
		</div>
		// </div>
	);
};

export default BlogContent;
