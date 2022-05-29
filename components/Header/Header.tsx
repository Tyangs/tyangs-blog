import { useTheme } from '@context/ThemeProvider';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Divider from '../Divider';
import styles from './index.module.scss';

interface NavBar {
	label: string;
	link: string;
	ariaLabel: string;
}

const navBarList: NavBar[] = [
	{
		label: '首页',
		link: '/',
		ariaLabel: 'Home page',
	},
	{
		label: '标签',
		link: '/tags',
		ariaLabel: 'Tags',
	},
	{
		label: '关于',
		link: '/about',
		ariaLabel: 'About me',
	},
];

const Header = () => {
	const { toggleTheme } = useTheme();

	return (
		<div>
			<Link href="/" passHref>
				<Image
					className={styles['logo']}
					src="/tyangs.png"
					width={173}
					height={65}
					alt="tyangs logo"
				/>
			</Link>
			<div className={styles['nav-bar']}>
				{navBarList.map(n => (
					<Link href={n.link} key={n.label} passHref>
						<span className={styles['nav-bar_item']} aria-label={n.ariaLabel}>
							{n.label}
						</span>
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
