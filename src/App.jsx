import React from "react";
import CalculatorKeys from "./components/CalculatorKeys";
import Output from "./components/Output";

function App() {
  return (
    <div className="App">
      <h3>Calculator app</h3>
      <Output />
      <CalculatorKeys />
    </div>
  );
}

export default App;
