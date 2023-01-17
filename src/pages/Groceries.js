import React, { useState, useEffect } from "react";

const Groceries = () => {
  const [productArray, setProduct] = useState([
    { id: 1, product: "Milk", quantity: 1, price: 1.5, total: 0 },
    { id: 2, product: "Eggs", quantity: 12, price: 0.1, total: 0 },
    { id: 3, product: "Bread", quantity: 2, price: 1.6, total: 0 },
    { id: 4, product: "Cheese", quantity: 1, price: 4.5, total: 0 },
  ]);
  const [finalSum, setfinalsum] = useState(0);

  useEffect(() => {
    let final = 0;
    const totalSum = productArray.map((pro) => {
      return pro.price * pro.quantity;
    });
    totalSum.map((t) => {
      final = final + t;
      return t;
    });
    setfinalsum(final);
  }, [productArray]);

  return (
    <>
      {productArray.map(({ id, product, quantity, price }) => {
        <>
          <div key={id}>
            <div>{product}</div>
            <div>{quantity}</div>
            <div>{price}</div>
            <div>total :{quantity * price}</div>
          </div>
        </>;
      })}
      <h3> Grand total :{finalSum} </h3>
    </>
  );
};

export default Groceries;
