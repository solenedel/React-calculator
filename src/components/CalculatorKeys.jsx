import React from "react";
import OperationKeys from "./OperationKeys";
import NumberKeys from "./NumberKeys";

const CalculatorKeys = () => {
  return (
    <div id="calculator-keys">
      <OperationKeys />
      <NumberKeys />
    </div>
  );
};

export default CalculatorKeys;
