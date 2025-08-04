import { HistoricalDates } from '@components/HistoricalDates/HistoricalDates';
import { historicalData } from './data/historicalData';

const App = () => {
	return (
		<div className="app">
			<HistoricalDates data={historicalData} />
			{/* Второй виджет для демонстрации */}
		</div>
	);
};

export default App;
