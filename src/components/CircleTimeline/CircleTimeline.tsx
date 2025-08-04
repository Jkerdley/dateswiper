import { useState, useEffect, useRef } from 'react';
import { TimePeriod } from '../../data/historicalData';
import gsap from 'gsap';
import * as styles from './CircleTimeline.module.scss';
import { PointPosition } from '../../utils/angleUtils';
import { TimelinePoint } from '../TimelinePoint/TimelinePoint';

interface CircleTimelineProps {
	periods: TimePeriod[];
	points: PointPosition[];
	activeIndex: number;
	onSelect: (index: number) => void;
}

export const CircleTimeline = (props: CircleTimelineProps) => {
	const { periods, points, activeIndex, onSelect } = props;
	const circleRef = useRef<HTMLDivElement>(null);
	const [rotation, setRotation] = useState<string | number>(0);

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
