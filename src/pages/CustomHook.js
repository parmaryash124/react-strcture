import React from "react";
import CustomCheck from "./CustomCheck";
import useFetch from "./useFetch";

const CustomHook = () => {
  const [data1] = useFetch("https://jsonplaceholder.typicode.com/todos");

  // we can make one custome component and return only data if we dont want use make custom hook
  const [data] = CustomCheck("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

export default CustomHook;
