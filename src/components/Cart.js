import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import FoodItem from "./FoodItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (cartItems.length === 0) {
    return <h1 className="text-2xl font-bold">Your Cart is Empty!!</h1>;
  }
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Cart Items - {cartItems.length} </h1>
      <button
        className="bg-red-600 text-white p-2 m-5"
        onClick={() => handleClearCart()}
      >
        Clear cart
      </button>
      <div className="flex flex-wrap">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
export default Cart;
