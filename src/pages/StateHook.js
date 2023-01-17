import React, { useState } from "react";

const StateHook = () => {
  const [value, setValue] = useState(10);
  const increment = () => {
    if (value >= 20) setValue(value + 1);
    else return;
    // if (value >= 20) return;
    // setValue(value + 1);
  };
  const decrement = () => {
    if (value <= 1) return;
    setValue(value - 1);
  };
  return (
    <button>
      <h3>
        Increment{" "}
        <button type="button" onClick={increment}>
          +
        </button>
      </h3>
      <h4>{value}</h4>
      <h3>
        Decrement{" "}
        <button type="button" onClick={decrement}>
          -
        </button>
      </h3>
    </button>
  );
};

export default StateHook;
