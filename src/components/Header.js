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
    <a href="/" className="flex items-center">
      <img
        data-testid="logo"
        className="w-20 px-2"
        src="https://s3.amazonaws.com/thumbnails.venngage.com/template/9f596769-790d-4b5f-bb80-668016a9c920.png"
        alt="logo"
      />
      <h1 className="text-lg font-semibold text-white">Take'N'Eat</h1>
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(isNavbarOpen);

  return (
    <div className="relative flex justify-between items-center bg-[#212121] text-white shadow-lg px-6">
      <Title />
      <div class="lg:hidden z-50">
        <button
          class="navbar-burger flex items-center p-3"
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
        >
          <i className="fa-solid fa-bars text-xl"></i>
        </button>
      </div>

      <ul
        className={`"lg:mx-auto lg:flex-row flex items-center lg:space-x-6 lg:static lg:min-w-fit lg:min-h-full min-w-full min-h-screen  ${
          isNavbarOpen
            ? "absolute top-0 left-0 flex-col justify-center bg-[#212121] space-y-5 text-xl transition-all ease-linear duration-300"
            : "absolute top-0 left-0 transform -translate-y-[100%] lg:translate-y-0 transition-all"
        }"`}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/instamart">Instamart</Link>
        </li>
        <li>
          <Link to="/cart" className="" data-testid="cart">
            <i className="fa-solid fa-cart-arrow-down"></i> Cart-
            {cartItems.length}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
