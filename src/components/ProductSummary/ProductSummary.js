import React from "react";

function ProductSummary(props) {
  const { cart } = props;
  // console.log({ cart });

  //   use reduce for sum area....
  // const useReducer = (previous, current) => previous + current.price;
  // const total = cart.reduce(useReducer, 0);
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping * product.quantity;
  }

  const tax = parseFloat((total * 0.1).toFixed(2));

  const grandTotal = total + tax + shipping;

  return (
    <div>
      <h1>Product Quantities : {quantity}</h1>
      <p>Tatal : ${total}</p>
      <p>Shopping: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <p>Grand Total: ${grandTotal}</p>
    </div>
  );
}

export default ProductSummary;
