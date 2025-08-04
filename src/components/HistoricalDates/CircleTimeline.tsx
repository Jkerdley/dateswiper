import { useState, useEffect, useRef } from 'react';
import { TimePeriod } from '../../data/historicalData';
import gsap from 'gsap';
import * as styles from './CircleTimeline.module.scss';
import { calculatePointPositions } from '../../utils/angleUtils';
import { TimelinePoint } from './TimelinePoint';

interface CircleTimelineProps {
	periods: TimePeriod[];
	activeIndex: number;
	onSelect: (index: number) => void;
	isMobile: boolean;
}

export const CircleTimeline = (props: CircleTimelineProps) => {
	const { periods, activeIndex, onSelect, isMobile } = props;
	const circleRef = useRef<HTMLDivElement>(null);
	const [rotation, setRotation] = useState<string | number>(0);
	const radius = isMobile ? 160 : 265;
	const [points, setPoints] = useState(() => calculatePointPositions(periods.length, radius));

	useEffect(() => {
		if (circleRef.current) {
			const targetRotation = -activeIndex * (360 / periods.length) + 30;
			gsap.to(circleRef.current, {
				rotation: targetRotation,
				duration: 1.5,
				ease: 'power3.out',
				transformOrigin: 'center',
				onUpdate: function () {
					setRotation(gsap.getProperty(this.targets()[0], 'rotation'));
				},
			});
		}
	}, [activeIndex, periods.length]);

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
						rotation={rotation}
					/>
				))}
			</div>
			<div className={styles.horizontal} />
		</div>
	);
};
