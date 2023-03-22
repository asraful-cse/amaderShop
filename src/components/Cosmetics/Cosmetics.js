import React, { useReducer } from "react";
import { AddMultiple, AddSum } from "../../Utilities/Common";

function Cosmetics() {
  const shoes = 10;
  const mobile = 20;
  const add = AddSum(shoes, mobile);
  const multiAdd = AddMultiple(shoes, mobile);

  //   for array reduce -----------------
  const Tshart = [1, 2, 3, 4];
  let intialValue = 0;
  const SumTotalTshartPrice = Tshart.reduce((a, b) => a + b, intialValue);
  // console.log("TshartPriceTotal--", SumTotalTshartPrice);

  // for Object reduce---------------------

  const arrayOfObject = [
    { id: 1, name: "a", price: 100 },
    { id: 2, name: "b", price: 100 },
    { id: 3, name: "c", price: 100 },
    { id: 4, name: "d", price: 100 },
  ];

  const tShirPrice = (previouse, current) => previouse + current.price;

  const totalPrice = arrayOfObject.reduce(tShirPrice, 0);
  // console.log("---arrayOfObject", totalPrice);
  return (
    <div>
      <h1 className="text-info">Total Sum Price : {add}</h1>
      <h1 className="text-success">Total Multiple Price : {multiAdd} </h1>
      <h1 className="text-success">Array Deduce Total price : {SumTotalTshartPrice} </h1>
      <h1 className="text-info">
        ArrayOfObjec reduce Total price : {totalPrice}{" "}
      </h1>
    </div>
  );
}

export default Cosmetics;
