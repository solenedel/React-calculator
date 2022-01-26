import React, { useState } from "react";
import NumberKeys from "./CalculatorKeys/NumberKeys";
import OperationKeys from "./CalculatorKeys/OperationKeys";
import Output from "./Output";

function App() {
  const [selectedNum, setSelectedNum] = useState(0); // single digit integer only
  const [currentNum, setCurrentNum] = useState(""); // can be miltiple digits (string)
  const [numsArray, setNumsArray] = useState([]); // all integer types

  const [selectedOperand, setSelectedOperand] = useState(""); // single string operand only
  const [operandsArray, setOperandsArray] = useState([]); // all single strings only (str.length = 1)

  return (
    <div className="App">
      <Output />
      <OperationKeys />
      <NumberKeys />
    </div>
  );
}

export default App;
