import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [icon, setIcon] = useState("bars");

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 920) {
        document.querySelector(".nav-links").classList.remove("active");
        setIcon("bars");
      }
    });
  }, []);

  return (
    <header>
      <Link to="/">
        <h1>Logo</h1>
      </Link>
      <ul className="nav-links">
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
        <div className="btn-container">
          <button className="btn btn-outline">Register</button>
          <button className="btn">Login</button>
        </div>
      </ul>
      <FontAwesomeIcon
        icon={icon}
        className="fa-bars menu-toggle-btn"
        onClick={() => {
          icon === "bars" ? setIcon("xmark") : setIcon("bars");
          document.querySelector(".nav-links").classList.toggle("active");
        }}
      />
    </header>
  );
};

export default Header;
