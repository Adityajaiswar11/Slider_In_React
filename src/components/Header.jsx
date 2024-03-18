import { Link } from "react-router-dom";
import { context } from "../App";
import { useContext } from "react";

const Header = () => {
  const {cart} = useContext(context);
  return (
    <nav className="nav">
      <div className="container">
        <h1 className="logo">
          <Link to="/">Website</Link>
        </h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/cart">cart <span>{cart.length}</span></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
