import React from 'react';
import Link from 'next/link';
import { useTheme } from '@context/ThemeProvider';
import Divider from '../Divider';
import styles from './index.module.scss';

type NavBar = {
	label: string;
	link: string;
};

const navBarList: NavBar[] = [
	{
		label: '首页',
		link: '/',
	},
	{
		label: '标签',
		link: '/tags',
	},
	{
		label: '关于',
		link: '/about',
	},
];

const Header = () => {
	const { toggleTheme } = useTheme();

	return (
		<div>
			<Link href="/">
				<span className={styles['logo']}>Tyangs</span>
			</Link>
			<div className={styles['nav-bar']}>
				{navBarList.map(n => (
					<Link href={n.link} key={n.label}>
						<span className={styles['nav-bar_item']}>{n.label}</span>
					</Link>
				))}
				{/* <span className={styles['nav-bar_item']} onClick={toggleTheme}>
					主题
				</span> */}
			</div>
			<Divider />
		</div>
	);
};

export default Header;
