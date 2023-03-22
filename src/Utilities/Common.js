const AddSum = (sum1, sum2) => {
  return sum1 + sum2;
};

const AddMultiple = (multi1, multi2) => {
  return multi1 * multi2;
};



// reduce use for countries area sum----------
const getTotalprice = (countries) => {
  const sumTotalReducer = (previous, current) => previous + current.population;
  const totalPrice = countries.reduce(sumTotalReducer, 0);
  return totalPrice;
};
export { AddSum, AddMultiple, getTotalprice };















// reduce function call----------

const arrayOfObject = [
  { id: 1, name: "a", price: 100 },
  { id: 2, name: "b", price: 100 },
  { id: 3, name: "c", price: 100 },
  { id: 4, name: "d", price: 100 },
];

// forloop sum-----------------------array.
let text = 0;
for (let i = 0; i < arrayOfObject.length; i++) {
  text = text + arrayOfObject[i].price;
}
// console.log("forloop +", text);

// map sum-----------------------array.
let b = 0;
arrayOfObject.map((pi) => (b = b + pi.price));
// console.log("map sum--", b);

//for-of use use for arrayOfObject.price sum
let total = 0;
for (const key of arrayOfObject) {
  total = total + key.price;
}
// console.log("for-loop", total);

// reduce sum use for arrayOfObject.price reduce u can only sum use---
// let initialValue = 0;
const sumReduce = (previous, current) => previous + current.price;
const totalRedice = arrayOfObject.reduce(sumReduce, 0);
// console.log("reduce_sum", totalRedice);
