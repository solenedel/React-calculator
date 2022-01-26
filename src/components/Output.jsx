import React from "react";

const Output = ({
  runningTotal,
  setRunningTotal,
  selectedNum,
  setSelectedNum,
  calcDisplay,
  setCalcDisplay,
}) => {
  const clear = () => {
    setRunningTotal(0);
    setSelectedNum(0);
    setCalcDisplay("");
    console.log("cleared numbers");
  };

  return (
    <div id="output-box">
      <button type="button" onClick={clear} id="clear-btn">
        clear
      </button>
      <div>calcDisplay {calcDisplay}</div>
    </div>
  );
};

export default Output;
