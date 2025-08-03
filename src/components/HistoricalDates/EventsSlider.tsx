import { useRef } from 'react';
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

export const EventsSlider = ({ events }: EventsSliderProps) => {
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
				watchOverflow={true}
			>
				{events.map((event) => (
					<SwiperSlide key={event.id}>
						<EventCard event={event} />
					</SwiperSlide>
				))}

				<div className={styles.sliderControls}>
					<button ref={prevRef} className={styles.controlButton}>
						<svg
							width="8"
							height="12"
							viewBox="0 0 8 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M7 11L2 6L7 1" stroke="#3877EE" stroke-width="2" />
						</svg>
					</button>
					<button ref={nextRef} className={styles.controlButton}>
						<svg
							width="8"
							height="12"
							viewBox="0 0 8 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M1 1L6 6L1 11" stroke="#3877EE" stroke-width="2" />
						</svg>
					</button>
				</div>
			</Swiper>
		</div>
	);
};
