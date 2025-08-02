import React from 'react';
import * as styles from './Title.module.scss';

export const Title: React.FC = () => {
	return (
		<div className={styles.titleContainer}>
			<div className={styles.gradientLine}></div>
			<h1 className={styles.title}>Исторические даты</h1>
		</div>
	);
};
