import React from "react";

const buttonNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const NumberKeys = ({
  selectedNum,
  setSelectedNum,
  currentNum,
  setCurrentNum,
  selectedOperand,
  setSelectedOperand,
  operandsArray,
  setOperandsArray,
}) => {
  // click on a number button
  const numberButtonClick = (num) => {
    setSelectedNum(num);
    // console.log("SELECTED NUM: ", selectedNum);

    if (currentNum.length) {
      setCurrentNum(currentNum + selectedNum.toString());
      // console.log("CURRENT NUM: ", currentNum);
    } else if (selectedNum !== 0) {
      // ignore zero as the first digit
      setCurrentNum(selectedNum.toString());
      // console.log("STARTING CURRENT NUM: ", currentNum);
    }

    // only add selectedOperand to the array if there is already a currentNumber
    if (currentNum.length) {
      setOperandsArray([...operandsArray], selectedOperand);
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
