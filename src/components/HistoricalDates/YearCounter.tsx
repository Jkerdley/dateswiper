import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import * as styles from './YearCounter.module.scss';
interface YearCounterProps {
	value: number;
	color: string;
}

export const YearCounter = ({ value, color }: YearCounterProps) => {
	const counterRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (counterRef.current) {
			gsap.to(counterRef.current, {
				innerText: value,
				duration: 1.5,
				snap: { innerText: 1 },
				onUpdate: function () {
					const num = Math.floor(Number(this.targets()[0].innerText));
					this.targets()[0].innerText = num.toString();
				},
			});
		}
	}, [value]);

	return (
		<div ref={counterRef} className={styles.yearCounter} style={{ color }}>
			{value}
		</div>
	);
};
