import React, { useState } from "react";
import CalculatorKeys from "./components/CalculatorKeys";
import Output from "./components/Output";

function App() {
  const [numsArray, setNumsArray] = useState([]);
  const [operandsArray, setOperandsArray] = useState([]);

  return (
    <div className="App">
      <Output />
      <CalculatorKeys />
    </div>
  );
}

export default App;
