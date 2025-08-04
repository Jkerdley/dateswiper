import * as styles from './TimelinePoint.module.scss';
import { PointPosition } from 'utils/angleUtils';
interface TimelinePointProps {
	position?: PointPosition;
	index: number;
	title?: string;
	isActive?: boolean;
	onClick: () => void;
	rotation?: string | number;
	isMobile?: boolean;
}

export const TimelinePoint = (props: TimelinePointProps) => {
	const { isMobile, position, index, title, isActive, onClick, rotation } = props;

	if (isMobile) {
		return (
			<div className={`${styles.mobilePoint} ${isActive ? styles.active : ''}`} onClick={onClick}>
				<span className={styles.tooltipIndex}>{index + 1}</span>
			</div>
		);
	}

	return (
		<div
			className={`${styles.point} ${isActive ? styles.active : ''}`}
			style={{
				transform: ` translate(${position?.x}px, ${position?.y}px) translate(-50%, -50%)`,
			}}
			onClick={onClick}
		>
			<span
				className={`${styles.tooltipIndex} ${isActive ? styles.active : ''}`}
				style={{
					transform: `rotate(${-rotation!}deg)`,
				}}
			>
				{index + 1}
			</span>
			<div
				className={`${styles.tooltip} ${isActive ? styles.active : ''}`}
				style={{
					transform: `rotate(${-rotation!}deg)`,
				}}
			>
				<span className={`${styles.tooltipTitle} ${isActive ? styles.active : ''}`}>{title}</span>
			</div>
		</div>
	);
};
