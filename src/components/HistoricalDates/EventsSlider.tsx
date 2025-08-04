import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
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
	const [isVisible, setIsVisible] = useState(true);
	const [currentEvents, setCurrentEvents] = useState(events);
	const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
	const [isBeginning, setIsBeginning] = useState(true);
	const [isEnd, setIsEnd] = useState(false);

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

	useEffect(() => {
		if (swiperInstance) {
			setIsBeginning(swiperInstance.isBeginning);
			setIsEnd(swiperInstance.isEnd);
		}
	}, [swiperInstance, currentEvents]);

	const handleSwiperInit = (swiper: SwiperType) => {
		setSwiperInstance(swiper);
		setIsBeginning(swiper.isBeginning);
		setIsEnd(swiper.isEnd);
	};

	const handleSlideChange = (swiper: SwiperType) => {
		setIsBeginning(swiper.isBeginning);
		setIsEnd(swiper.isEnd);
	};

	return (
		<section className={styles.sliderContainer}>
			<div className={`${styles.sliderWrapper} ${isVisible ? styles.visible : ''}`}>
				<Swiper
					modules={[Navigation]}
					spaceBetween={80}
					slidesPerView={3}
					navigation={{
						prevEl: prevRef.current,
						nextEl: nextRef.current,
					}}
					onInit={handleSwiperInit}
					onSlideChange={handleSlideChange}
					onReachBeginning={() => setIsBeginning(true)}
					onReachEnd={() => setIsEnd(true)}
					onBeforeInit={(swiper: SwiperType) => {
						const navigation = swiper.params.navigation;
						if (navigation && typeof navigation === 'object') {
							navigation.prevEl = prevRef.current;
							navigation.nextEl = nextRef.current;
							swiper.navigation.update();
						}
					}}
					watchOverflow={true}
				>
					{currentEvents.map((event) => (
						<SwiperSlide key={event.id}>
							<EventCard event={event} />
						</SwiperSlide>
					))}

					<div className={styles.sliderControls}>
						<button
							ref={prevRef}
							className={`${styles.controlButton} ${isBeginning ? styles.hidden : ''}`}
							aria-hidden={isBeginning}
						>
							<svg
								width="8"
								height="12"
								viewBox="0 0 8 12"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M7 11L2 6L7 1" stroke="#3877EE" strokeWidth="2" />
							</svg>
						</button>
						<button
							ref={nextRef}
							className={`${styles.controlButton} ${isEnd ? styles.hidden : ''}`}
							aria-hidden={isEnd}
						>
							<svg
								width="8"
								height="12"
								viewBox="0 0 8 12"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M1 1L6 6L1 11" stroke="#3877EE" strokeWidth="2" />
							</svg>
						</button>
					</div>
				</Swiper>
			</div>
		</section>
	);
};
