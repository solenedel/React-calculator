import React from "react";

const Output = ({
  runningTotal,
  setRunningTotal,
  selectedNum,
  setSelectedNum,
}) => {
  const clear = () => {
    setRunningTotal(0);
    setSelectedNum(0);
    console.log("cleared numbers");
  };

  return (
    <div id="output-box">
      <button type="button" onClick={clear} id="clear-btn">
        clear
      </button>
      <div>selectedNum {selectedNum}</div>
    </div>
  );
};

export default Output;
