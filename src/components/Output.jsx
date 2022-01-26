import React from "react";

const Output = ({
  runningTotal,
  setRunningTotal,
  selectedNum,
  setSelectedNum,
  operationString,
  setOperationString,
}) => {
  const clear = () => {
    setRunningTotal(0);
    setSelectedNum(0);
    setOperationString("");
    console.log("cleared numbers");
  };

  return (
    <div id="output-box">
      <button type="button" onClick={clear} id="clear-btn">
        clear
      </button>
      <div>running total: {runningTotal} </div>
    </div>
  );
};

export default Output;
