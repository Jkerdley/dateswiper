// import { useState } from 'react';
// import { TimePeriod } from '../../data/historicalData';

// import { useWindowSize } from '../../hooks/useWindowSize';
// import * as styles from './HistoricalDates.module.scss';
// import { Crosshair } from './Crosshair';
// import { Title } from './Title';
// import { YearCounter } from './YearCounter';
// import { CircleTimeline } from './CircleTimeline';
// import { EventsSlider } from './EventsSlider';

// interface HistoricalDatesProps {
// 	data: TimePeriod[];
// }

// export const HistoricalDates = ({ data }: HistoricalDatesProps) => {
// 	const [activePeriod, setActivePeriod] = useState(0);
// 	const { width } = useWindowSize();
// 	const isMobile = width <= 768;

// 	const currentPeriod = data[activePeriod];

// 	return (
// 		<>
// 			<main className={styles.historicalDates}>
// 				<Crosshair />
// 				<div className={styles.contentWrapper}>
// 					<Title />

// 					<section className={styles.datesAndCircleContainer}>
// 						<CircleTimeline
// 							periods={data}
// 							activeIndex={activePeriod}
// 							onSelect={setActivePeriod}
// 							isMobile={isMobile}
// 						/>

// 						<div className={styles.yearsContainer}>
// 							<YearCounter value={currentPeriod.startYear} color="#5D5FEF" />
// 							<YearCounter value={currentPeriod.endYear} color="#EF5DA8" />
// 						</div>
// 					</section>
// 					<EventsSlider events={currentPeriod.events} />
// 				</div>
// 			</main>
// 		</>
// 	);
// };
// HistoricalDates.tsx
import { useState } from 'react';
import { TimePeriod } from '../../data/historicalData';
import * as styles from './HistoricalDates.module.scss';
import { Crosshair } from './Crosshair';
import { Title } from './Title';
import { YearCounter } from './YearCounter';
import { CircleTimeline } from './CircleTimeline';
import { EventsSlider } from './EventsSlider';
import { Controls } from './Controls';
import { TimelinePoint } from './TimelinePoint';
import { calculatePointPositions } from '../../utils/angleUtils';
import { CIRCLE_RADIUS } from '../../constants/constants';

interface HistoricalDatesProps {
	data: TimePeriod[];
}

export const HistoricalDates = ({ data }: HistoricalDatesProps) => {
	const [activePeriod, setActivePeriod] = useState(0);

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
				<Controls onNext={handleNext} onPrev={handlePrev} />
				<div className={styles.dotsNavigationContainer}>
					{points.map((point, index) => (
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
