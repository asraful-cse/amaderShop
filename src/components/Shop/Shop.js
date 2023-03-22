import React, { useEffect, useState } from "react";
import { AddToDB, getStoredCart } from "../../Utilities/fakeDB";
import Product from "../Product/Product";
import ProductSummary from "../ProductSummary/ProductSummary";
import "./Shop.css";

function Shop() {
  const [products, setproducts] = useState([]);
  const [cart, setCarts] = useState([]);

  useEffect(() => {
    fetch(`./products.JSON`)
      .then((response) => response.json())
      .then((data) => {
        setproducts(data);
      });
  }, []);

  useEffect(() => {
    const storedCart = getStoredCart();
    // console.log(storedCart);

    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);

      if (addedProduct) {
        const quintity = storedCart[id];
        addedProduct.quantity = quintity;
        savedCart.push(addedProduct);
      }
    }

    setCarts(savedCart);
    // console.log({ savedCart });

    // console.log("localsored last line");
  }, [products]);

  const addToTheCard = (selectedProduct) => {
    const exists = cart.find((product) => product.id === selectedProduct.id);
    let newCart = [];
    if (!exists) {
      console.log("notExist");
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const remainingCard = cart.filter(
        (product) => product.id !== selectedProduct.id
      );

      exists.quantity = exists.quantity + 1;
      newCart = [...remainingCard, selectedProduct];
    }

    setCarts(newCart);
    AddToDB(selectedProduct.id);
  };
  return (
    <div className=" relative">
      <div className="flex justify-between p-3">
        <div className="grid grid-cols-3 gap-4 ">
          {products?.slice(1, 10)?.map((product) => (
            <Product
              product={product}
              key={product.id}
              addToTheCard={addToTheCard}
            />
          ))}
        </div>
        <div className="bg-red-200 px-5">
          <ProductSummary cart={cart}></ProductSummary>
        </div>
      </div>
    </div>
  );
}

export default Shop;

// fixed reloader selected card -------------------
// const addToTheCard = (selectedProduct) => {
//   const exists = cart.find((product) => product.id === selectedProduct.id);
//   let newCart = [];
//   if (!exists) {
//     console.log("notExist");
//     selectedProduct.quantity = 1;
//     newCart = [...cart, selectedProduct];
//   }
//   newCart = [...cart, selectedProduct];
//   setCarts(newCart);
//   AddToDB(selectedProduct.id);
// };
