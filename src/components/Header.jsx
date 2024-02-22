const Header = () => {
  return (
    <nav className="nav">
      <div className="container">
        <h1 className="logo">
          <a href="#">Website</a>
        </h1>
        <ul>
          <li>
            <a href="# current">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
