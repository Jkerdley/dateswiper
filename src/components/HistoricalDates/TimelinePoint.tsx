import React, { useState } from 'react';

import * as styles from './TimelinePoint.module.scss';
import { PointPosition } from 'utils/angleUtils';

interface TimelinePointProps {
	position: PointPosition;
	index: number;
	title: string;
	isActive: boolean;
	onClick: () => void;
}

export const TimelinePoint: React.FC<TimelinePointProps> = ({
	position,
	index,
	title,
	isActive,
	onClick,
}) => {
	const [isHovered, setIsHovered] = useState(false);
	const showTooltip = isHovered || isActive;

	return (
		<div
			className={`${styles.point} ${isActive ? styles.active : ''}`}
			style={{
				transform: `translate(${position.x}px, ${position.y}px)`,
			}}
			onClick={onClick}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{showTooltip && (
				<div
					className={styles.tooltip}
					style={{
						transform:
							position.angle > 90 && position.angle < 270
								? 'translateX(-100%)'
								: 'translateX(0)',
					}}
				>
					<span className={styles.tooltipIndex}>{index + 1}</span>
					<span className={styles.tooltipTitle}>{title}</span>
				</div>
			)}
		</div>
	);
};
