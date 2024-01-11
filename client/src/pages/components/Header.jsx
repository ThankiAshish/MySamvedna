import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../../assets/images/Logo.png";

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
      <Link to="/" className="logo-link">
        <img src={Logo} alt="MySamvedna Logo" className="logo" />
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/donate">
            Donate
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/galley">
            Gallery
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">
            About Us
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
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
