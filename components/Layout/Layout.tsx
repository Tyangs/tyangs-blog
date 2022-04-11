import React from 'react';
import Page from './components/Page';
// import TopBar from './components/TopBar';
import styles from './index.module.scss';

interface ILayoutProps {
	children: React.ReactNode;
}

const Layout = (props: ILayoutProps) => {
	const { children } = props;

	return (
		<div className={styles['wrapper']}>
			{/* <TopBar /> */}
			<div className={styles['container']}>
				<Page>{children}</Page>
			</div>
		</div>
	);
};

export default Layout;
