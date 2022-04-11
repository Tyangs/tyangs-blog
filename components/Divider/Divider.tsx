import React from 'react';
import cls from 'classnames';
import styles from './index.module.scss';

interface IDividerProps {
	dashed?: boolean;
}

const Divider = (props: IDividerProps) => {
	const { dashed } = props;

	const dividerCls = cls(styles['line'], {
		[styles['line-dashed']]: dashed,
	});

	return <div className={dividerCls}></div>;
};

export default Divider;
