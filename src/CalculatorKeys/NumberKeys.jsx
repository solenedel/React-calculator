import React from "react";

const buttonNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const NumberKeys = ({
  selectedNum,
  setSelectedNum,
  currentNum,
  setCurrentNum,
}) => {
  // click on a number button
  const numberButtonClick = (num) => {
    setSelectedNum(num);
    // console.log("SELECTED NUM: ", selectedNum);
  };

  const test = () => {
    if (currentNum.length) {
      setCurrentNum(currentNum + selectedNum.toString());
      // console.log("CURRENT NUM: ", currentNum);
    } else if (selectedNum !== 0) {
      // ignore zero as the first digit
      setCurrentNum(selectedNum.toString());
      // console.log("STARTING CURRENT NUM: ", currentNum);
    }
  };

  return (
    <div>
      {buttonNumbers.map((num) => {
        return (
          <button
            key={num}
            type="button"
            className="number-btn"
            onClick={() => {
              numberButtonClick(num);
              test();
            }}
          >
            <strong>{num}</strong>
          </button>
        );
      })}
    </div>
  );
};

export default NumberKeys;
