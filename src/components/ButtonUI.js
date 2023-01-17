import React, { useState } from "react";
import "../container/App.css";

const Button = (props) => {
  const [myvalue, setmyvalue] = useState("");
  const [initialvalue, setinitialvalue] = useState(true);
  const handleValue = (value) => {
    if (initialvalue === true) {
      setmyvalue("0");
    } else {
      setmyvalue("X");
    }
  };
  return (
    <>
      <button
        className="button"
        type="button"
        onClick={() => handleValue(props.value)}
        // onClick={value !== undefined && setmyvalue(value)}
      >
        {myvalue}
      </button>
    </>
  );
};

export default Button;
