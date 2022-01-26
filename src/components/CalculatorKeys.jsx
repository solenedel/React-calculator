import React from "react";
import OperationKeys from "./OperationKeys";
import NumberKeys from "./NumberKeys";

const CalculatorKeys = ({ selectedNum, setSelectedNum }) => {
  return (
    <div id="calculator-keys">
      <OperationKeys
        selectedNum={selectedNum}
        setSelectedNum={setSelectedNum}
      />
      <NumberKeys />
    </div>
  );
};

export default CalculatorKeys;
