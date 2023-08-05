import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const FoodItem = (item) => {
  const { name, price, id } = item;
  const dispatch = useDispatch();
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="py-2 px-5 m-2 bg-gray-100 flex justify-between hover:bg-gray-200 ">
      <div>
        <h2 className="text-base font-semibold mt-1">{name}</h2>
        <h3>Price: Rs. {price / 100}</h3>
      </div>
      <div
        className="mx-1 my-auto cursor-pointer"
        onClick={() => handleRemoveItem(item)}
      >
        <i className="fa-solid fa-xmark"></i>
      </div>
    </div>
  );
};
export default FoodItem;
