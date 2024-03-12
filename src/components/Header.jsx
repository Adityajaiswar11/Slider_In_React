import { Link } from "react-router-dom";

const Header = () => {
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
            <Link to="/cart">cart</Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Header;
