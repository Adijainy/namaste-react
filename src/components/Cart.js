import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import FoodItem from "./FoodItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const price = useSelector((store) => store.cart.totalPrice);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-3/4 px-7 py-5 mx-auto my-8">
      <div className="flex justify-between border-b-2 border-gray-400 border-opacity-30">
        <div>
          <h1 className="text-lg font-bold text-gray-900 mb-1">
            Cart Items - {cartItems.length}{" "}
          </h1>
          <h2 className="text-lg text-gray-900 ">Total Price : Rs.{price} </h2>
        </div>

        <button
          className="bg-gray-500 text-white p-2 m-5 rounded-md"
          onClick={() => handleClearCart()}
        >
          Clear cart
        </button>
      </div>

      <div className="flex flex-col">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
export default Cart;
