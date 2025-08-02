import React, { useState } from 'react';

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

export const TimelinePoint: React.FC<TimelinePointProps> = ({
	position,
	index,
	title,
	isActive,
	onClick,
	rotation,
}) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			// className={`${styles.point} ${isActive ? styles.active : ''}`}
			className={`${styles.point}`}
			style={{
				transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
			}}
			onClick={onClick}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<span
				className={styles.tooltipIndex}
				style={{
					transform: `rotate(${-rotation}deg)`,
				}}
			>
				{index + 1}
			</span>
			{isHovered && (
				<div
					className={styles.tooltip}
					style={{
						transform: `rotate(${-rotation}deg)`,
					}}
				>
					<span className={styles.tooltipTitle}>{title}</span>
				</div>
			)}
		</div>
	);
};
