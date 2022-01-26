import React from "react";

const Output = () => {
  const clear = () => {
    // setRunningTotal(0);
    // setSelectedNum(0);
    // setOperationString("");
    console.log("cleared numbers");
  };

  return (
    <div id="output-box">
      <button type="button" onClick={clear} id="clear-btn">
        clear
      </button>
    </div>
  );
};

export default Output;
