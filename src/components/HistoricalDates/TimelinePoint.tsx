import * as styles from './TimelinePoint.module.scss';
import { PointPosition } from 'utils/angleUtils';
interface TimelinePointProps {
	position: PointPosition;
	index: number;
	title: string;
	isActive: boolean;
	onClick: () => void;
	rotation: string | number;
}

export const TimelinePoint = (props: TimelinePointProps) => {
	const { position, index, title, isActive, onClick, rotation } = props;

	return (
		<div
			className={`${styles.point} ${isActive ? styles.active : ''}`}
			style={{
				transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
			}}
			onClick={onClick}
		>
			<span
				className={`${styles.tooltipIndex} ${isActive ? styles.active : ''}`}
				style={{
					transform: `rotate(${-rotation}deg)`,
				}}
			>
				{index + 1}
			</span>
			<div
				className={`${styles.tooltip} ${isActive ? styles.active : ''}`}
				style={{
					transform: `rotate(${-rotation}deg)`,
				}}
			>
				<span className={`${styles.tooltipTitle} ${isActive ? styles.active : ''}`}>{title}</span>
			</div>
		</div>
	);
};
