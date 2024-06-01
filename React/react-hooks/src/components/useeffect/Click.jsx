/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
// rafce snippets
import React, { useEffect, useState } from "react";

const Click = () => {
  // when the app renders and re-renders what you want to perform
  // onMount, stateChange, unMount
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You have clicked ${count} times`;

    return () => {
      // cleanup function
      document.title = "React Hooks";
    };
  }, [count]);

  function countClick() {
    setCount((prev) => prev + 1);
  }
  console.log(count);

  return (
    <div>
      <button onClick={countClick}>Click Me</button>
      <button>Exit</button>
    </div>
  );
};

export default Click;
