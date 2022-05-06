import React from 'react';
import { useRouter } from 'next/router';
import { LeftArrow } from '../Icons';
import styles from './index.module.scss';

const BackButton = () => {
	const router = useRouter();
	const goBack = () => {
		router.back();
	};

	return (
		<div className={styles['back-button']} onClick={goBack}>
			<LeftArrow />
		</div>
	);
};

export default BackButton;
