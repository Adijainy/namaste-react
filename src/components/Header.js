import { useState } from "react";
import { Link } from "react-router-dom";

const loggedInUser = () => {
  //Api call to authenticate
  return false;
};
export const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        src="https://s3.amazonaws.com/thumbnails.venngage.com/template/9f596769-790d-4b5f-bb80-668016a9c920.png"
        alt="logo"
      />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
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
            <i className="fa-solid fa-cart-arrow-down"></i> Cart
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
