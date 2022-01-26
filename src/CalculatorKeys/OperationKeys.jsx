import React from "react";

const OperationKeys = ({
  currentNum,
  setCurrentNum,
  numsArray,
  setNumsArray,
  selectedNum,
}) => {
  // click on an operand button
  const operandButtonClick = () => {
    // add the last digit to currentNum - why does this not work in numberButtonClick ??
    // setCurrentNum(currentNum + selectedNum.toString());
    setNumsArray([...numsArray, Number(currentNum + selectedNum.toString())]);
  };

  return (
    <div id="operation-keys">
      <button
        type="button"
        className="operation-btn"
        onClick={operandButtonClick}
      >
        <strong>+</strong>
      </button>
      <button
        type="button"
        className="operation-btn"
        onClick={operandButtonClick}
      >
        <strong>-</strong>
      </button>
      <button
        type="button"
        className="operation-btn"
        onClick={operandButtonClick}
      >
        <strong>/</strong>
      </button>
      <button
        type="button"
        className="operation-btn"
        onClick={operandButtonClick}
      >
        <strong>*</strong>
      </button>
      <button
        type="button"
        className="operation-btn"
        onClick={operandButtonClick}
        id="equals-btn"
      >
        <strong>=</strong>
      </button>
    </div>
  );
};

export default OperationKeys;
