import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Event } from '../../data/historicalData';
import { EventCard } from './EventCard';
import * as styles from './EventsSlider.module.scss';

import 'swiper/scss';
import 'swiper/scss/navigation';

interface EventsSliderProps {
	events: Event[];
}

export const EventsSlider: React.FC<EventsSliderProps> = ({ events }) => {
	const prevRef = useRef<HTMLButtonElement>(null);
	const nextRef = useRef<HTMLButtonElement>(null);

	return (
		<div className={styles.sliderContainer}>
			<Swiper
				modules={[Navigation]}
				spaceBetween={80}
				slidesPerView={3}
				navigation={{
					prevEl: prevRef.current,
					nextEl: nextRef.current,
				}}
				onBeforeInit={(swiper) => {
					// @ts-ignore
					swiper.params.navigation.prevEl = prevRef.current;
					// @ts-ignore
					swiper.params.navigation.nextEl = nextRef.current;
				}}
			>
				{events.map((event) => (
					<SwiperSlide key={event.id}>
						<EventCard event={event} />
					</SwiperSlide>
				))}

				<div className={styles.sliderControls}>
					<button ref={prevRef} className={styles.controlButton}>
						<svg width="10" height="14" viewBox="0 0 10 14" fill="none">
							<path d="M8.5 0.75L2.25 7L8.5 13.25" stroke="#42567A" strokeWidth="2" />
						</svg>
					</button>
					<button ref={nextRef} className={styles.controlButton}>
						<svg width="10" height="14" viewBox="0 0 10 14" fill="none">
							<path d="M1.5 0.75L7.75 7L1.5 13.25" stroke="#42567A" strokeWidth="2" />
						</svg>
					</button>
				</div>
			</Swiper>
		</div>
	);
};
