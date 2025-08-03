import * as styles from './Title.module.scss';

export const Title = () => {
	return (
		<div className={styles.titleContainer}>
			<div className={styles.gradientLine}></div>
			<h1 className={styles.title}>
				Исторические <br /> даты
			</h1>
		</div>
	);
};
