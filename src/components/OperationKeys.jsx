import React from "react";

const OperationKeys = () => {
  return (
    <div id="operation-keys">
      <button type="button" className="operation-btn">
        <strong>+</strong>
      </button>
      <button type="button" className="operation-btn">
        <strong>-</strong>
      </button>
      <button type="button" className="operation-btn">
        <strong>/</strong>
      </button>
      <button type="button" className="operation-btn">
        <strong>*</strong>
      </button>
      <button type="button" className="operation-btn" id="equals-btn">
        <strong>=</strong>
      </button>
    </div>
  );
};

export default OperationKeys;
