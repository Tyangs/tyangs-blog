import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import styles from './index.module.scss';

interface BlogContentProps {
	content: string;
}

const BlogContent = (props: BlogContentProps) => {
	const { content } = props;

	return (
		<div className={styles['markdown-body']}>
			<ReactMarkdown rehypePlugins={[rehypeRaw, rehypeHighlight]} remarkPlugins={[remarkGfm]}>
				{content}
			</ReactMarkdown>
		</div>
	);
};

export default BlogContent;