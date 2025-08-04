import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import { Event } from '../../data/historicalData';
import { EventCard } from './EventCard';

import 'swiper/scss';
import 'swiper/scss/navigation';

import './EventsSlider.override.scss';
import * as styles from './EventsSlider.module.scss';

interface EventsSliderProps {
	events: Event[];
}

export const EventsSlider = ({ events }: EventsSliderProps) => {
	const prevRef = useRef<HTMLButtonElement>(null);
	const nextRef = useRef<HTMLButtonElement>(null);
	const [currentEvents, setCurrentEvents] = useState(events);
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		if (events !== currentEvents) {
			setIsVisible(false);
			const timer = setTimeout(() => {
				setCurrentEvents(events);
				setIsVisible(true);
			}, 400);
			return () => clearTimeout(timer);
		}
	}, [events, currentEvents]);

	return (
		<section className={styles.sliderContainer}>
			<div className={styles.sliderControls}>
				<button ref={prevRef} className={`${styles.controlButton} ${styles.prev} swiper-button-prev`}>
					<svg width="8" height="12" viewBox="0 0 8 12" fill="none">
						<path d="M7 11L2 6L7 1" stroke="#3877EE" strokeWidth="2" />
					</svg>
				</button>

				<button ref={nextRef} className={`${styles.controlButton} ${styles.next} swiper-button-next`}>
					<svg width="8" height="12" viewBox="0 0 8 12" fill="none">
						<path d="M1 1L6 6L1 11" stroke="#3877EE" strokeWidth="2" />
					</svg>
				</button>
			</div>

			<div className={`${styles.sliderWrapper} ${isVisible ? styles.visible : ''}`}>
				<Swiper
					modules={[Navigation]}
					// spaceBetween={60}
					// slidesPerView={3}
					observer={true}
					observeParents={true}
					breakpoints={{
						0: { slidesPerView: 1, spaceBetween: 10 },
						320: { slidesPerView: 2, spaceBetween: 10 },
						768: { slidesPerView: 3, spaceBetween: 20 },
						1024: { slidesPerView: 3, spaceBetween: 40 },
						// 1440: { slidesPerView: 4, spaceBetween: 60 },
					}}
					// className="swiper"
					// navigation={{
					// 	prevEl: prevRef.current,
					// 	nextEl: nextRef.current,
					// }}
					onBeforeInit={(swiper: SwiperType) => {
						const nav = swiper.params.navigation as any;
						nav.prevEl = prevRef.current;
						nav.nextEl = nextRef.current;
						swiper.navigation.update();
					}}
					watchOverflow={true}
				>
					{currentEvents.map((event) => (
						<SwiperSlide key={event.id}>
							<EventCard event={event} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};
