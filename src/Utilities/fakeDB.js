const AddToDB = (id) => {
  let shoppingCard = {};

  // get--- the shopping card from localStorage------------------------------- second part
  const getQuantity = localStorage.getItem("shopping_card");
  if (getQuantity) {
    shoppingCard = JSON.parse(getQuantity);
  }

  //   add and sum the shopping card localStorage value id+ ------------------------------3rd part
  const quantity = shoppingCard[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCard[id] = newQuantity;
  } else {
    // it's first part but when added condition must be use else condition other then use with set shopping card  1st part.
    shoppingCard[id] = 1;
  }

  // set the shopping card to localStorage-----------------------------------------first part

  localStorage.setItem("shopping_card", JSON.stringify(shoppingCard));
};

// for LocalStorage card one item delete
const DeleteFromDb = (id) => {
  const quantity = localStorage.getItem("shopping_card");
  const a = JSON.parse(quantity);

  if (id in a) {
    delete a[id];
  }

  localStorage.setItem("shopping_card", JSON.stringify(a));
};

// for LocalStorage all db delete
const AllSoppingCardDelete = (id) => {
  localStorage.removeItem("shopping_card");

  // window.localStorage.clear(); //same method for localStorage all db delete
};

const getStoredCart = () => {
  let shoppingCard = {};

  // get--- the shopping card from localStorage------------------------------- second part
  const getQuantity = localStorage.getItem("shopping_card");
  if (getQuantity) {
    shoppingCard = JSON.parse(getQuantity);
   
  }
  return shoppingCard;
};

export { AddToDB, DeleteFromDb, AllSoppingCardDelete, getStoredCart };
