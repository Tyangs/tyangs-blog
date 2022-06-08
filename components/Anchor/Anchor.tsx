import { mdHeadingParse } from '@utils/mdHeadingParse';
import React from 'react';

import AnchorLink from './AnchorLink';
import styles from './index.module.scss';

interface IAnchorProps {
	content: string;
}

const Anchor = (props: IAnchorProps) => {
	const { content } = props;

	const headingInfo = mdHeadingParse(content);

	return (
		<div className={styles.wrapper}>
			<div className={styles['anchor-menu']}>Menu</div>
			<div className={styles['anchor-list']}>
				{headingInfo.map(({ anchor, title, level }) => (
					<AnchorLink level={level} anchor={anchor} key={anchor}>
						{title}
					</AnchorLink>
				))}
			</div>
		</div>
	);
};

export default Anchor;
