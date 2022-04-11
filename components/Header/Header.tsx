import React from 'react';
import Link from 'next/link';
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
		label: '分类',
		link: '/category',
	},
	{
		label: '关于',
		link: '/about',
	},
];

const Header = () => {
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
			</div>
			<Divider />
		</div>
	);
};

export default Header;
