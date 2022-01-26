import React, { useState } from "react";
import CalculatorKeys from "./components/CalculatorKeys";
import Output from "./components/Output";

function App() {
  const [selectedNum, setSelectedNum] = useState(0);
  const [runningTotal, setRunningTotal] = useState(0);

  return (
    <div className="App">
      <div>Selected number: {selectedNum}</div>
      <Output
        selectedNum={selectedNum}
        setSelectedNum={setSelectedNum}
        setRunningTotal={setRunningTotal}
        runningTotal={runningTotal}
      />
      <CalculatorKeys
        selectedNum={selectedNum}
        setSelectedNum={setSelectedNum}
        runningTotal={runningTotal}
        setRunningTotal={setRunningTotal}
      />
    </div>
  );
}

export default App;
