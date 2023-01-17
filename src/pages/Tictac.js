import React, { useState } from "react";
import ButtonUI from "../components/ButtonUI";

const Tictac = () => {
  const [currentValue, setcurrentValue] = useState({
    isNext: true,
    mainValue: "0",
  });
  const handleClick = (e) => {
    console.log(e, "e");
  };
  return (
    <div className="main">
      <table>
        <tr>
          <td>
            <ButtonUI value={currentValue} />
          </td>
          <td>
            <ButtonUI value={currentValue} />
          </td>
          <td>
            <ButtonUI value={currentValue} />
          </td>
        </tr>
        {/* <tr>
          <td>
            <ButtonUI />
          </td>
          <td>
            <ButtonUI />
          </td>
          <td>
            <ButtonUI />
          </td>
        </tr>
        <tr>
          <td>
            <ButtonUI />
          </td>
          <td>
            <ButtonUI />
          </td>
          <td>
            <ButtonUI />
          </td>
        </tr> */}
      </table>
    </div>
  );
};

export default Tictac;
