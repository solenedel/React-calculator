import React from "react";

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const NumberKeys = () => {
  return (
    <div>
      {numbers.map((num) => {
        // console.log("num", num);
        return (
          <button key={num} type="button" className="number-btn">
            {num}
          </button>
        );
      })}
    </div>
  );
};

export default NumberKeys;
