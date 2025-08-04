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
import { useWindowSize } from '../../hooks/useWindowSize';
import * as styles from './HistoricalDates.module.scss';
import { Crosshair } from './Crosshair';
import { Title } from './Title';
import { YearCounter } from './YearCounter';
import { CircleTimeline } from './CircleTimeline';
import { EventsSlider } from './EventsSlider';
import { Controls } from './Controls';

interface HistoricalDatesProps {
	data: TimePeriod[];
}

export const HistoricalDates = ({ data }: HistoricalDatesProps) => {
	const [activePeriod, setActivePeriod] = useState(0);
	const { width } = useWindowSize();
	const isMobile = width <= 768;

	const currentPeriod = data[activePeriod];

	// Логика управления периодами
	const handleNext = () => {
		setActivePeriod((prev) => (prev + 1) % data.length);
	};

	const handlePrev = () => {
		setActivePeriod((prev) => (prev - 1 + data.length) % data.length);
	};

	return (
		<main className={styles.historicalDates}>
			<Crosshair />
			<div className={styles.contentWrapper}>
				<Title />

				<section className={styles.datesAndCircleContainer}>
					<CircleTimeline
						periods={data}
						activeIndex={activePeriod}
						onSelect={setActivePeriod}
						isMobile={isMobile}
					/>

					<div className={styles.yearsContainer}>
						<YearCounter value={currentPeriod.startYear} color="#5D5FEF" />
						<YearCounter value={currentPeriod.endYear} color="#EF5DA8" />
					</div>
				</section>
				<Controls onNext={handleNext} onPrev={handlePrev} />

				<EventsSlider events={currentPeriod.events} />
			</div>
		</main>
	);
};
