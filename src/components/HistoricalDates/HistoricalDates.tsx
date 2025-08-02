import React, { useState } from 'react';
import { TimePeriod } from '../../data/historicalData';

import useWindowSize from '../../hooks/useWindowSize';
import * as styles from './HistoricalDates.module.scss';
import { Crosshair } from './Crosshair';
import { Title } from './Title';
import { YearCounter } from './YearCounter';
import { CircleTimeline } from './CircleTimeline';
import { EventsSlider } from './EventsSlider';

interface HistoricalDatesProps {
	data: TimePeriod[];
}

export const HistoricalDates: React.FC<HistoricalDatesProps> = ({ data }) => {
	const [activePeriod, setActivePeriod] = useState(0);
	const { width } = useWindowSize();
	const isMobile = width <= 768;

	const currentPeriod = data[activePeriod];

	return (
		<div className={styles.historicalDates}>
			<Crosshair />
			<div className={styles.contentWrapper}>
				<Title />

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
				{/* <EventsSlider events={currentPeriod.events} /> */}
			</div>
		</div>
	);
};
