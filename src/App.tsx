import React from "react";

const App: React.FC = () => {
  return (
    <div className="app">
      <HistoricalDates data={historicalData} />
      {/* Второй виджет для демонстрации */}
      {/* <HistoricalDates data={otherData} /> */}
    </div>
  );
};

export default App;
