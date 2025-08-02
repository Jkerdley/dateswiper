import React from 'react';
import { Event } from '../../data/historicalData';
import * as styles from './EventCard.module.scss';

export const EventCard: React.FC<{ event: Event }> = ({ event }) => {
	return (
		<div className={styles.card}>
			<h3 className={styles.date}>{event.date}</h3>
			<p className={styles.description}>{event.description}</p>
		</div>
	);
};
