import React from "react";

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const NumberKeys = ({ setSelectedNum }) => {
  return (
    <div>
      {numbers.map((num) => {
        return (
          <button
            key={num}
            type="button"
            className="number-btn"
            onClick={() => setSelectedNum(num)}
          >
            {num}
          </button>
        );
      })}
    </div>
  );
};

export default NumberKeys;
