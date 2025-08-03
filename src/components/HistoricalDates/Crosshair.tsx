import React from 'react';
import * as styles from './Crosshair.module.scss';

export const Crosshair: React.FC = () => {
	return (
		<div className={styles.crosshair}>
			<div className={styles.horizontal} />
			<div className={styles.vertical} />
			<div className={styles.leftLine} />
			<div className={styles.rightLine} />
		</div>
	);
};
