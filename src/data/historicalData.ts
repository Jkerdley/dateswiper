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
		startYear: 2015,
		endYear: 2022,
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
		startYear: 2018,
		endYear: 2020,
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
		startYear: 2018,
		endYear: 2020,
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
