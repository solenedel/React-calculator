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
        +
      </button>
      <button type="button" className="operation-btn" onClick={subtract}>
        -
      </button>
      <button type="button" className="operation-btn" onClick={divide}>
        /
      </button>
      <button type="button" className="operation-btn" onClick={multiply}>
        *
      </button>
      <button type="button" className="operation-btn" onClick={equals}>
        =
      </button>
    </div>
  );
};

export default OperationKeys;
