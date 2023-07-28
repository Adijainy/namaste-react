import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const loggedInUser = () => {
  //Api call to authenticate
  return false;
};
export const Title = () => {
  return (
    <a href="/">
      <img
        data-testid="logo"
        className="w-20 px-2"
        src="https://s3.amazonaws.com/thumbnails.venngage.com/template/9f596769-790d-4b5f-bb80-668016a9c920.png"
        alt="logo"
      />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="flex justify-between bg-[#212121] text-white shadow-lg px-24">
      <Title />
      <div className="nav-items">
        <ul className="flex py-6">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2" data-testid="cart">
            <Link to="/cart">
              <i className="fa-solid fa-cart-arrow-down"></i> Cart-
              {cartItems.length}
            </Link>
          </li>
          <li data-testid="online-status" className="px-2">
            {isOnline ? "🟢" : "🔴"}
          </li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button className="login-btn" onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>
      ) : (
        <button className="login-btn" onClick={() => setIsLoggedIn(true)}>
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
