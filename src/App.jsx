import React, { useState } from "react";
import NumberKeys from "./CalculatorKeys/NumberKeys";
import OperationKeys from "./CalculatorKeys/OperationKeys";
import Output from "./Output";

function App() {
  const [numsArray, setNumsArray] = useState([]);
  const [operandsArray, setOperandsArray] = useState([]);

  return (
    <div className="App">
      <Output />
      <OperationKeys />
      <NumberKeys />
    </div>
  );
}

export default App;
