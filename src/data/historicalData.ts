export interface TimePeriod {
  id: number;
  title: string;
  startYear: number;
  endYear: number;
  events: Event[];
}
export const historicalData: TimePeriod[] = [
  //   {
  //     // TODO: первый период
  //   },
  {
    id: 2,
    title: "Технологии",
    startYear: 2018,
    endYear: 2020,
    events: [
      // TODO: события для периода
    ],
  },
];
