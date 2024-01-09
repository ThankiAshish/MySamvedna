import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>Logo</h1>
      </Link>
      <ul>
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link">Donate</Link>
        </li>
        <li>
          <Link className="nav-link">Gallery</Link>
        </li>
        <li>
          <Link className="nav-link">About Us</Link>
        </li>
        <li>
          <Link className="nav-link">Contact</Link>
        </li>
        <button className="btn btn-outline">Register</button>
        <button className="btn">Login</button>
      </ul>
    </header>
  );
};

export default Header;
