import React from "react";
import OperationKeys from "./OperationKeys";
import NumberKeys from "./NumberKeys";

const CalculatorKeys = ({
  selectedNum,
  setSelectedNum,
  runningTotal,
  setRunningTotal,
}) => {
  return (
    <div id="calculator-keys">
      <OperationKeys
        selectedNum={selectedNum}
        setSelectedNum={setSelectedNum}
        runningTotal={runningTotal}
        setRunningTotal={setRunningTotal}
      />
      <NumberKeys selectedNum={selectedNum} setSelectedNum={setSelectedNum} />
    </div>
  );
};

export default CalculatorKeys;
