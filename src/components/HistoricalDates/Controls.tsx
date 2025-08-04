import * as styles from './Controls.module.scss';

interface ControlsProps {
	onNext: () => void;
	onPrev: () => void;
	currentIndex: number;
	totalCount: number;
}

export const Controls = ({ onNext, onPrev, currentIndex, totalCount }: ControlsProps) => {
	const formatNumber = (num: number): string => {
		return num < 10 ? `0${num}` : `${num}`;
	};

	return (
		<section className={styles.controls}>
			<div className={styles.slideCounter}>
				{formatNumber(currentIndex + 1)}/{formatNumber(totalCount)}
			</div>
			<div className={styles.controlsContainer}>
				<button className={`${styles.controlButton}`} onClick={onPrev} aria-label="Предыдущий период">
					<svg width="10" height="14" viewBox="0 0 10 14" fill="none">
						<path
							d="M8.49988 0.750001L2.24988 7L8.49988 13.25"
							stroke="#42567A"
							strokeWidth="2"
						/>
					</svg>
				</button>

				<button className={`${styles.controlButton}`} onClick={onNext} aria-label="Следующий период">
					<svg width="10" height="14" viewBox="0 0 10 14" fill="none">
						<path
							d="M1.50012 0.750001L7.75012 7L1.50012 13.25"
							stroke="#42567A"
							strokeWidth="2"
						/>
					</svg>
				</button>
			</div>
		</section>
	);
};
