import { ControlButton } from './ControlButton/ControlButton';
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
				<ControlButton onClick={onPrev} destination="left" label="Предыдущий период" />
				<ControlButton onClick={onNext} destination="right" label="Следующий период" />
			</div>
		</section>
	);
};
