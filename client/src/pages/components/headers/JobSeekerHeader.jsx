import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { SessionState } from "../../../context/SessionProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../../../assets/images/logo.png";

const RecruiterHeader = () => {
  const navigate = useNavigate();
  const { logout } = SessionState();
  const [icon, setIcon] = useState("bars");

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 920) {
        document.querySelector(".nav-links").classList.remove("active");
        setIcon("bars");
      }
    });

    window.addEventListener("change", () => {
      if (window.innerWidth > 920) {
        document.querySelector(".nav-links").classList.remove("active");
        setIcon("bars");
      }
    });

    window.addEventListener("scroll", () => {
      document.querySelector(".nav-links").classList.remove("active");
      setIcon("bars");
    });

    const handleLinkClick = () => {
      setIcon("bars");
      document.querySelector(".nav-links").classList.remove("active");
    };

    const links = document.querySelectorAll(".nav-link");
    const btns = document.querySelectorAll(".btn");
    links.forEach((link) => link.addEventListener("click", handleLinkClick));
    btns.forEach((btn) => btn.addEventListener("click", handleLinkClick));

    return () => {
      links.forEach((link) =>
        link.removeEventListener("click", handleLinkClick)
      );
      window.removeEventListener("resize", () => {});
      window.removeEventListener("change", () => {});
    };
  }, []);

  const handleLinkNavigation = async (event) => {
    event.preventDefault();
    const link = event.currentTarget;

    if (link.getAttribute("href") === "/logout") {
      const response = await fetch(
        "http://localhost/MySamvedna/api/controllers/jobSeekerLogout.php",
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();

      if (responseData.success) {
        toast.success(responseData.message);
        logout();
        navigate("/job-seeker-login");
      } else {
        console.log(responseData.message);
        toast.error(responseData.message);
      }
      return;
    }

    navigate(link.getAttribute("href"));
  };
  return (
    <div className="container">
      <header>
        <Link to="/" className="logo-link">
          <img src={Logo} alt="MySamvedna Logo" className="logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link" onClick={handleLinkNavigation}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/job-seeker-dashboard"
              className="nav-link"
              onClick={handleLinkNavigation}
            >
              Dashboard
            </Link>
          </li>
          <div className="btn-container">
            <Link
              className="btn"
              to="/view-jobs"
              onClick={handleLinkNavigation}
            >
              View Jobs
            </Link>
            <Link
              className="btn btn-outline"
              to="/logout"
              onClick={handleLinkNavigation}
            >
              Logout
            </Link>
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
    </div>
  );
};

export default RecruiterHeader;