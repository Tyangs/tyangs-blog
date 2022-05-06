import React, { useEffect } from 'react';
import Prism from 'prismjs';
import ReactMarkdown from 'react-markdown';
import styles from './index.module.scss';

interface BlogContentProps {
	content: string;
}

const BlogContent = (props: BlogContentProps) => {
	const { content } = props;

	useEffect(() => {
		Prism.highlightAll();
	}, []);

	return (
		<div className={styles.wrapper}>
			<ReactMarkdown>{content}</ReactMarkdown>
		</div>
	);
};

export default BlogContent;
