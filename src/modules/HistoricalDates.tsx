import { useState } from 'react';
import { TimePeriod } from '../data/historicalData';
import * as styles from './HistoricalDates.module.scss';

import { calculatePointPositions } from '../utils/angleUtils';
import { CIRCLE_RADIUS, MAX_PERIODS } from '../constants/constants';
import {
	CircleTimeline,
	Controls,
	Crosshair,
	EventsSlider,
	TimelinePoint,
	Title,
	YearCounter,
} from '@components/index';
import { historicalData } from '../data/historicalData';

export const HistoricalDates = () => {
	const [activePeriod, setActivePeriod] = useState(0);
	const data: TimePeriod[] = historicalData.slice(0, MAX_PERIODS);

	const currentPeriod = data[activePeriod];

	const handleNext = () => {
		setActivePeriod((prev) => (prev + 1) % data.length);
	};

	const handlePrev = () => {
		setActivePeriod((prev) => (prev - 1 + data.length) % data.length);
	};

	const points = calculatePointPositions(data.length, CIRCLE_RADIUS);

	return (
		<main className={styles.historicalDates}>
			<Crosshair />
			<div className={styles.contentWrapper}>
				<Title />

				<section className={styles.datesAndCircleContainer}>
					<CircleTimeline
						points={points}
						periods={data}
						activeIndex={activePeriod}
						onSelect={setActivePeriod}
					/>

					<div className={styles.yearsContainer}>
						<YearCounter value={currentPeriod.startYear} color="#5D5FEF" />
						<YearCounter value={currentPeriod.endYear} color="#EF5DA8" />
					</div>
				</section>
				<Controls
					onNext={handleNext}
					onPrev={handlePrev}
					currentIndex={activePeriod}
					totalCount={data.length}
				/>
				<div className={styles.dotsNavigationContainer}>
					{points.map((_, index) => (
						<TimelinePoint
							key={data[index].id}
							isMobile={true}
							index={index}
							title={data[index].title}
							isActive={index === activePeriod}
							onClick={() => setActivePeriod(index)}
						/>
					))}
				</div>
				<EventsSlider events={currentPeriod.events} />
			</div>
		</main>
	);
};
