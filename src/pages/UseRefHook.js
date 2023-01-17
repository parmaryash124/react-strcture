import React, { useState, useRef, useEffect } from "react";

// this hook useful to persist value between renders..

const UseRefHook = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  const inputElement = useRef();
  const focusInput = () => {
    inputElement.current.focus();
  };
  const [inputValue1, setInputValue1] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    count.current = count.current + 1;
    previousInputValue.current = inputValue1;
  }, [inputValue1]);
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button> <br></br>
      <input
        type="text"
        value={inputValue1}
        onChange={(e) => setInputValue1(e.target.value)}
      />
      <h2>Current Value: {inputValue1}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
};

export default UseRefHook;
