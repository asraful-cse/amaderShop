import { AllSoppingCardDelete, DeleteFromDb } from "../../Utilities/fakeDB";
import "./Product.css";

const Product = (props) => {
  // console.log("country pass", props);

  const { product, addToTheCard } = props;
  const { name, id, img , price} = product;
// console.log({product});

  const deleteFromCard = (id) => {
    DeleteFromDb(id);
  };

  const ShoppingDbDElete = (id) => {
    AllSoppingCardDelete(id);
  };

  return (
    <div className="bg-[#071868b0] rounded-lg flex justify-center items-center p-2">
      <div className="text-center text-slate-100">
        <div className="flex justify-center  items-center">
          <img className="h-28 rounded-md" src={img} alt="" />
        </div>
        <p>Name: {name}</p>
        <p>id: {id}</p>
        <p>Price: {price}</p>
        <div className="flex gap-1">
          <button
            className="border-2 rounded-md  bg-green-600 p-1 hover:bg-orange-300 hover:duration-200"
            onClick={() => addToTheCard(product)}
          >
            Card add
          </button>
          <button
            className="border-2 rounded-md  bg-rose-400 p-1 hover:bg-orange-300 hover:duration-200"
            onClick={() => deleteFromCard(id)}
          >
            Card Delete
          </button>
          <button
            className="border-2 rounded-md  bg-rose-600 p-1 hover:bg-orange-300 hover:duration-200"
            onClick={() => ShoppingDbDElete(id)}
          >
            ShoppingDB delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
