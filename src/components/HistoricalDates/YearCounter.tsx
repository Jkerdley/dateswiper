import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import * as styles from './YearCounter.module.scss';
interface YearCounterProps {
	value: number;
	color: string;
}

export const YearCounter = ({ value, color }: YearCounterProps) => {
	const counterRef = useRef<HTMLDivElement>(null);
	const animValue = useRef(value);

	const updateText = () => {
		if (counterRef.current) {
			counterRef.current.innerText = animValue.current.toString();
		}
		requestAnimationFrame(updateText);
	};

	useEffect(() => {
		updateText();
		const animation = gsap.to(animValue, {
			current: value,
			duration: 1.75,
			snap: { current: 1 },
			ease: 'power3.out',
			onUpdate: () => {
				if (counterRef.current) {
					counterRef.current.innerText = animValue.current.toString();
				}
			},
		});
		if (counterRef.current) {
			animation;
		}
		return () => {
			animation.kill();
		};
	}, [value]);

	return <div ref={counterRef} className={styles.yearCounter} style={{ color }} />;
};
