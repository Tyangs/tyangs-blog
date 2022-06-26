import Divider from '@components/Divider';
import { IBlogInfo } from '@utils/getBlog';
import { getPreviewContent } from '@utils/string';
import Link from 'next/link';
import React, { useMemo } from 'react';

import styles from './index.module.scss';

interface IBlogPreviewInfo {
	name: string;
	ariaLabel: string;
	display: React.ReactNode;
}

interface IBlogPreviewProps extends IBlogInfo {}

const BlogPreview = (props: IBlogPreviewProps) => {
	const { title, slug, date, content, tag } = props;

	const previewContent = getPreviewContent(content).substring(0, 200);

	const blogPreviewInfos = useMemo<IBlogPreviewInfo[]>(() => {
		const readingTime = Math.floor(content.length / 400);

		const infos = [
			{
				name: 'writing-date',
				ariaLabel: 'Writing date',
				display: date.substring(0, 10),
			},
			{
				name: 'reading-time',
				ariaLabel: 'Reading time',
				display: `About ${readingTime} min`,
			},
		];
		if (tag) {
			infos.push({
				name: 'article-tag',
				ariaLabel: 'Article tag',
				display: tag,
			});
		}

		return infos;
	}, [date, content, tag]);

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
			<section className={styles['blog-info']}>
				{blogPreviewInfos.map(({ name, display, ariaLabel }) => (
					<span className={name} key={name} aria-label={ariaLabel}>
						{display}
					</span>
				))}
			</section>
			<Divider dashed />
		</div>
	);
};

export default BlogPreview;
