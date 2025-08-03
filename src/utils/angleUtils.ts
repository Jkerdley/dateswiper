export interface PointPosition {
	x: number;
	y: number;
	angle: number;
}

// export const calculatePointPositions = (count: number, radius: number): PointPosition[] => {
// 	const angleStep = (2 * Math.PI) / count;
// 	return Array.from({ length: count }).map((_, i) => {
// 		const angle = i * angleStep - Math.PI / 2;
// 		return {
// 			x: radius * Math.cos(angle),
// 			y: radius * Math.sin(angle),
// 			angle: angle * (180 / Math.PI),
// 		};
// 	});
// };
export const calculatePointPositions = (count: number, radius: number): PointPosition[] => {
	return Array.from({ length: count }, (_, i) => {
		const angle = (360 / count) * i;
		const rad = (angle * Math.PI) / 180;
		return {
			x: Math.cos(rad) * radius,
			y: Math.sin(rad) * radius,
			angle: angle,
		};
	});
};

export const getTooltipPosition = (angle: number): string => {
	if (angle > 45 && angle <= 135) return 'right';
	if (angle > 135 && angle <= 225) return 'bottom';
	if (angle > 225 && angle <= 315) return 'left';
	return 'top';
};
