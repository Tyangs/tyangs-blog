import React from 'react';
import Page from './components/Page';
import { useTheme } from '@context/ThemeProvider';
import styles from './index.module.scss';

interface ILayoutProps {
	children: React.ReactNode;
}

const Layout = (props: ILayoutProps) => {
	const { children } = props;

	const { theme } = useTheme();

	return (
		<div className={theme}>
			{/* <TopBar /> */}
			<div className={styles['container']}>
				<Page>{children}</Page>
			</div>
		</div>
	);
};

export default Layout;
