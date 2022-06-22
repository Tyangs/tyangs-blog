import { IMdHeadingInfo } from '@utils/mdHeadingParse';
import cls from 'classnames';
import Link from 'next/link';
import React from 'react';

import styles from './index.module.scss';

interface IAnchorLinkProps {
	anchor: IMdHeadingInfo['anchor'];
	level: IMdHeadingInfo['level'];
	children: React.ReactNode;
}

const AnchorLink = (props: IAnchorLinkProps) => {
	const { anchor, level, children } = props;

	const classNames = cls(styles['anchor-link'], styles[`heading-${level}`]);

	return (
		<Link href={`#${anchor}`} passHref>
			<li className={classNames}>{children}</li>
		</Link>
	);
};

export default AnchorLink;
