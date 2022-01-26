import React, { useState } from "react";
import CalculatorKeys from "./components/CalculatorKeys";
import Output from "./components/Output";

function App() {
  const [selectedNum, setSelectedNum] = useState(0);

  return (
    <div className="App">
      <div>Selected number: {selectedNum}</div>
      <Output />
      <CalculatorKeys
        selectedNum={selectedNum}
        setSelectedNum={setSelectedNum}
      />
    </div>
  );
}

export default App;
