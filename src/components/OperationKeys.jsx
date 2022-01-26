import React from "react";

const OperationKeys = ({
  selectedNum,
  setSelectedNum,
  operationString,
  setOperationString,
  runningTotal,
  setRunningTotal,
}) => {
  const add = (num) => {
    setOperationString(operationString + "+");
  };

  const subtract = (num) => {
    setOperationString(operationString + "-");
  };

  const multiply = (num) => {
    setOperationString(operationString + "*");
  };

  const divide = (num) => {
    setOperationString(operationString + "/");
  };

  const equals = (num) => {
    console.log("EQUALS FUNC- calculate now");
  };

  return (
    <div id="operation-keys">
      <button type="button" className="operation-btn" onClick={add}>
        <strong>+</strong>
      </button>
      <button type="button" className="operation-btn" onClick={subtract}>
        <strong>-</strong>
      </button>
      <button type="button" className="operation-btn" onClick={divide}>
        <strong>/</strong>
      </button>
      <button type="button" className="operation-btn" onClick={multiply}>
        <strong>*</strong>
      </button>
      <button
        type="button"
        className="operation-btn"
        id="equals-btn"
        onClick={equals}
      >
        <strong>=</strong>
      </button>
    </div>
  );
};

export default OperationKeys;
