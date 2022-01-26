import React from "react";
import OperationKeys from "./OperationKeys";
import NumberKeys from "./NumberKeys";

const CalculatorKeys = ({
  selectedNum,
  setSelectedNum,
  runningTotal,
  setRunningTotal,
  operationString,
  setOperationString,
}) => {
  return (
    <div id="calculator-keys">
      <OperationKeys
        selectedNum={selectedNum}
        setSelectedNum={setSelectedNum}
        runningTotal={runningTotal}
        setRunningTotal={setRunningTotal}
        operationString={operationString}
        setOperationString={setOperationString}
      />
      <NumberKeys
        selectedNum={selectedNum}
        setSelectedNum={setSelectedNum}
        operationString={operationString}
        setOperationString={setOperationString}
        runningTotal={runningTotal}
        setRunningTotal={setRunningTotal}
      />
    </div>
  );
};

export default CalculatorKeys;
