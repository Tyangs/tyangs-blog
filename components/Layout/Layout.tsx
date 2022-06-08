import Page from '@components/Page';
import { useTheme } from '@context/ThemeProvider';
import cls from 'classnames';
import React from 'react';

import styles from './index.module.scss';

interface ILayoutProps {
	children: React.ReactNode;
	menu?: React.ReactNode;
}

const Layout = (props: ILayoutProps) => {
	const { children, menu } = props;

	const { theme } = useTheme();

	const containerCls = cls(styles['container'], { [styles['container--with-menu']]: menu });

	return (
		<div className={theme}>
			{/* <TopBar /> */}
			<div className={styles.wrapper}>
				<div className={containerCls}>
					<Page>{children}</Page>
				</div>
				{menu && <div className={styles['menu']}>{menu}</div>}
			</div>
		</div>
	);
};

export default Layout;
