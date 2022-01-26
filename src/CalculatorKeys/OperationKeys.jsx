import React from "react";

const OperationKeys = ({
  currentNum,
  setCurrentNum,
  numsArray,
  setNumsArray,
  selectedNum,
  operandsArray,
  setOperandsArray,
  selectedOperand,
  setSelectedOperand,
}) => {
  // click on an operand button
  const operandButtonClick = (e) => {
    // add the last digit to currentNum - why does this not work in numberButtonClick ??
    // setCurrentNum(currentNum + selectedNum.toString()); // useless here
    console.log(" typeof E.TARGET.INNERHTML: ", typeof e.target.innerHTML);

    setNumsArray([...numsArray, Number(currentNum + selectedNum.toString())]);

    setSelectedOperand(e.target.innerHTML);
  };

  // const equalsButtonClick = () => {

  // };

  return (
    <div id="operation-keys">
      <button
        type="button"
        className="operation-btn"
        onClick={operandButtonClick}
      >
        +
      </button>
      <button
        type="button"
        className="operation-btn"
        onClick={operandButtonClick}
      >
        -
      </button>
      <button
        type="button"
        className="operation-btn"
        onClick={operandButtonClick}
      >
        /
      </button>
      <button
        type="button"
        className="operation-btn"
        onClick={operandButtonClick}
      >
        *
      </button>
      <button
        type="button"
        className="operation-btn"
        onClick={operandButtonClick}
        id="equals-btn"
      >
        =
      </button>
    </div>
  );
};

export default OperationKeys;
