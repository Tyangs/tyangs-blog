import React from 'react';

import styles from './index.module.scss';

interface IPageProps {
	children: React.ReactNode;
}

const Page = (props: IPageProps) => {
	const { children } = props;

	return <div className={styles['wrapper']}>{children}</div>;
};

export default Page;
