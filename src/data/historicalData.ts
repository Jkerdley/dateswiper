export interface Event {
	id: number;
	date: string;
	description: string;
}

export interface TimePeriod {
	id: number;
	title: string;
	startYear: number;
	endYear: number;
	events: Event[];
}

export const historicalData: TimePeriod[] = [
	{
		id: 1,
		title: 'Наука',
		startYear: 1923,
		endYear: 1956,
		events: [
			{
				id: 1,
				date: '13 сентября',
				description: 'Частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
			},
			{
				id: 2,
				date: '2016',
				description: 'Телескоп «Хаббл» обнаружил самую удалённую галактику GN-211',
			},
			{
				id: 3,
				date: '2017',
				description: 'Tesla представила первый электрический грузовик Tesla Semi',
			},
			// Дополнительные события...
		],
	},
	{
		id: 2,
		title: 'Технологии',
		startYear: 1956,
		endYear: 1990,
		events: [
			{
				id: 1,
				date: '13 сентября',
				description: 'Частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
			},
			{
				id: 2,
				date: '2016',
				description: 'Телескоп «Хаббл» обнаружил самую удалённую галактику GN-211',
			},
			{
				id: 3,
				date: '2017',
				description: 'Tesla представила первый электрический грузовик Tesla Semi',
			},
		],
	},
	{
		id: 3,
		title: 'Фильмы',
		startYear: 1990,
		endYear: 2025,
		events: [
			{
				id: 1,
				date: '13 сентября',
				description: 'Частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
			},
			{
				id: 2,
				date: '2016',
				description: 'Телескоп «Хаббл» обнаружил самую удалённую галактику GN-211',
			},
			{
				id: 3,
				date: '2017',
				description: 'Tesla представила первый электрический грузовик Tesla Semi',
			},
		],
	},
	{
		id: 4,
		title: 'Фильмы',
		startYear: 1990,
		endYear: 2025,
		events: [
			{
				id: 1,
				date: '13 сентября',
				description: 'Частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
			},
			{
				id: 2,
				date: '2016',
				description: 'Телескоп «Хаббл» обнаружил самую удалённую галактику GN-211',
			},
			{
				id: 3,
				date: '2017',
				description: 'Tesla представила первый электрический грузовик Tesla Semi',
			},
		],
	},
	{
		id: 5,
		title: 'Фильмы',
		startYear: 1990,
		endYear: 2025,
		events: [
			{
				id: 1,
				date: '13 сентября',
				description: 'Частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
			},
			{
				id: 2,
				date: '2016',
				description: 'Телескоп «Хаббл» обнаружил самую удалённую галактику GN-211',
			},
			{
				id: 3,
				date: '2017',
				description: 'Tesla представила первый электрический грузовик Tesla Semi',
			},
		],
	},
	{
		id: 6,
		title: 'Фильмы',
		startYear: 1990,
		endYear: 2025,
		events: [
			{
				id: 1,
				date: '13 сентября',
				description: 'Частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
			},
			{
				id: 2,
				date: '2016',
				description: 'Телескоп «Хаббл» обнаружил самую удалённую галактику GN-211',
			},
			{
				id: 3,
				date: '2017',
				description: 'Tesla представила первый электрический грузовик Tesla Semi',
			},
		],
	},
];
