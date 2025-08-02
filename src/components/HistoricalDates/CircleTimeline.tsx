import React, { useState, useEffect, useRef } from 'react';
import { TimePeriod } from '../../data/historicalData';

import gsap from 'gsap';
import * as styles from './CircleTimeline.module.scss';
import { calculatePointPositions } from '../../utils/angleUtils';
import { TimelinePoint } from './TimelinePoint';
import { Controls } from './Controls';
interface CircleTimelineProps {
	periods: TimePeriod[];
	activeIndex: number;
	onSelect: (index: number) => void;
	isMobile: boolean;
}

export const CircleTimeline: React.FC<CircleTimelineProps> = ({
	periods,
	activeIndex,
	onSelect,
	isMobile,
}) => {
	const circleRef = useRef<HTMLDivElement>(null);
	const radius = isMobile ? 160 : 265;
	const [points, setPoints] = useState(() => calculatePointPositions(periods.length, radius));

	useEffect(() => {
		setPoints(calculatePointPositions(periods.length, radius));
	}, [periods.length, radius]);

	useEffect(() => {
		if (circleRef.current) {
			const targetRotation = -activeIndex * (360 / periods.length);

			gsap.to(circleRef.current, {
				rotation: targetRotation,
				duration: 1.5,
				ease: 'power3.out',
				transformOrigin: 'center',
			});
		}
	}, [activeIndex, periods.length]);

	const handleNext = () => {
		onSelect((activeIndex + 1) % periods.length);
	};

	const handlePrev = () => {
		onSelect((activeIndex - 1 + periods.length) % periods.length);
	};

	return (
		<div className={styles.circleContainer}>
			<div className={styles.circle} ref={circleRef}>
				{points.map((point, index) => (
					<TimelinePoint
						key={periods[index].id}
						position={point}
						index={index}
						title={periods[index].title}
						isActive={index === activeIndex}
						onClick={() => onSelect(index)}
					/>
				))}
			</div>

			<Controls onNext={handleNext} onPrev={handlePrev} />
		</div>
	);
};
