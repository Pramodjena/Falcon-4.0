/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  //   console.log(count);

  const increment = () => {
    if (count === 10) {
      return;
    } else {
      setCount((prev) => prev + 1);
    }
  };
  const decrement = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount((prev) => prev - 1);
    }
  };
  return (
    <div>
      <h1>Current Count Value is: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      {/* Todo  Task*/}
      <button>Multiply</button>
      <button>Divide</button>
      <button>Add 10</button>
    </div>
  );
};

export default Counter;
