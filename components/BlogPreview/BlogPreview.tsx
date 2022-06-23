import Divider from '@components/Divider';
import { IBlogInfo } from '@utils/getBlog';
import { getPreviewContent } from '@utils/string';
import Link from 'next/link';
import React from 'react';

import styles from './index.module.scss';

interface IBlogPreviewProps extends IBlogInfo {}

const BlogPreview = (props: IBlogPreviewProps) => {
	const { title, slug, date, content } = props;

	const readingTime = Math.floor(content.length / 400);

	const previewContent = getPreviewContent(content).substring(0, 200);

	return (
		<div className={styles['wrapper']}>
			<Link href={`/blog/${slug}`} passHref>
				<span className={styles['title']}>{title}</span>
			</Link>
			<div className={styles['content']}>
				{previewContent}
				<Link href={`/blog/${slug}`} passHref>
					<span className={styles['ellipsis']}> ...</span>
				</Link>
			</div>
			<div className={styles['blog-info']}>
				<span className={styles['date']}>{date.substring(0, 10)}</span>
				<span className={styles['read-time']}>About {readingTime} min</span>
			</div>
			<Divider dashed />
		</div>
	);
};

export default BlogPreview;
