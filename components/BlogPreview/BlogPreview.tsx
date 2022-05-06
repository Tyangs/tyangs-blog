import Divider from '@components/Divider';
import { BlogInfo } from '@utils/getPost';
import Link from 'next/link';
import React from 'react';

import styles from './index.module.scss';

interface IBlogPreviewProps extends BlogInfo {}

const BlogPreview = (props: IBlogPreviewProps) => {
	const { title, slug, date, content } = props;

	return (
		<div>
			<Link href={`/blog/${slug}`}>
				<span className={styles['title']}>{title}</span>
			</Link>
			<div className={styles['content']}>{content.substring(0, 300)}</div>
			<div className={styles['date']}>{date.substring(0, 10)}</div>
			<Divider dashed />
		</div>
	);
};

export default BlogPreview;
