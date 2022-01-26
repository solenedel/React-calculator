import React from "react";

const OperationKeys = () => {
  const add = (num) => {
    console.log("ADD FUNC");
  };

  const subtract = (num) => {
    console.log("SUBTRACT FUNC");
  };

  const multiply = (num) => {
    console.log("MULTIPLY FUNC");
  };

  const divide = (num) => {
    console.log("DIVIDE FUNC");
  };

  const equals = (num) => {
    console.log("EQUALS FUNC");
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
