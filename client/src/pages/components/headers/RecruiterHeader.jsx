import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

import { SessionState } from "../../../context/SessionProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../../../assets/images/Logo.png";

const API = import.meta.env.VITE_API_URL;

const RecruiterHeader = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn, setRecruiterId } = SessionState();

  const [icon, setIcon] = useState("bars");

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    const jobSeekerId = sessionStorage.getItem("job_seekers_id");
    const recruiterId = sessionStorage.getItem("recruiters_id");

    if (isLoggedIn) {
      if (jobSeekerId) {
        // setIsLoggedIn(true);
        // setRecruiterId(jobSeekerId);
        navigate("/job-seeker-dashboard");

      } else if (recruiterId) {
        setIsLoggedIn(true);
        setRecruiterId(recruiterId);
      }
    }
    else{
     
      navigate("/recruiter-login");

    }
  }, [navigate,setIsLoggedIn, setRecruiterId]);
  useEffect(() => {
    fetch(`${API}/utils/checkLogin.php`, {
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
          setRecruiterId(data.recruiters_id);
        } else {
          setIsLoggedIn(false);
          setRecruiterId(null);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setIsLoggedIn, setRecruiterId]);

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

  
  const HandleLogout = () => {
    console.log(sessionStorage.getItem('isLoggedIn'));
    console.log(sessionStorage.getItem('recruiters_id'));
    
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('recruiters_id');

    console.log(sessionStorage.getItem('isLoggedIn'));
    console.log(sessionStorage.getItem('recruiters_id'));
    navigate("/login");
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
              to="/recruiter-dashboard"
              className="nav-link"
              onClick={handleLinkNavigation}
            >
              Dashboard
            </Link>
          </li>
          <div className="btn-container">
            <Link
              className="btn"
              to="/recruiter-dashboard/post-job"
              onClick={handleLinkNavigation}
            >
              Post a Job
            </Link>
            <button className="btn btn-outline logout" onClick={HandleLogout}>
              Logout
            </button>
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