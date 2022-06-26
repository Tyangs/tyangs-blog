import { useRouter } from 'next/router';
import React from 'react';

import { LeftArrowIcon } from '../Icons';
import styles from './index.module.scss';

const BackButton = () => {
	const router = useRouter();
	const goBack = () => {
		router.push('/');
	};

	return (
		<div className={styles['back-button']} onClick={goBack}>
			<LeftArrowIcon />
		</div>
	);
};

export default BackButton;
