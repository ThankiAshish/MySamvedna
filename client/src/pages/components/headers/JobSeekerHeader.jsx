import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { SessionState } from "../../../context/SessionProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../../../assets/images/logo.png";

const RecruiterHeader = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn, setJobSeekerId } = SessionState();
  const [icon, setIcon] = useState("bars");

  useEffect(() => {
    fetch("http://localhost/MySamvedna/api/utils/checkLogin.php", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();
      })
      .then((data) => {
        if (data.is_logged_in) {
          setIsLoggedIn(true);
          setJobSeekerId(data.job_seeker_id);
        } else {
          setIsLoggedIn(false);
          setJobSeekerId(null);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setIsLoggedIn, setJobSeekerId, navigate]);

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

    navigate(link.getAttribute("href"));
  };

  const handleLogout = () => {
    fetch("http://localhost/MySamvedna/api/controllers/jobSeekerLogout.php", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();
      })
      .then((data) => {
        if (data.success) {
          setIsLoggedIn(false);
          setJobSeekerId(null);
          toast.success(data.message);
          navigate("/job-seeker-login");
        } else {
          toast.error(data.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
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
            <Link className="btn" onClick={handleLogout}>
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
