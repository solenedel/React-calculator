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
      <OperationKeys
        currentNum={currentNum}
        setCurrentNum={setCurrentNum}
        numsArray={numsArray}
        setNumsArray={setNumsArray}
        selectedNum={selectedNum}
      />
      <NumberKeys
        selectedNum={selectedNum}
        setSelectedNum={setSelectedNum}
        currentNum={currentNum}
        setCurrentNum={setCurrentNum}
      />
      <div className="testing">
        <li>selectedNum: {selectedNum}</li>
        <li>currentNum: {currentNum}</li>
        <li>numsArray: {numsArray}</li>
      </div>
    </div>
  );
}

export default App;
