import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { SessionState } from "../../context/SessionProvider";

const API = import.meta.env.VITE_API_URL;

const RecruiterLogin = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn, setRecruiterId, setJobSeekerId } = SessionState();

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
          if (data.recruiters_id) setRecruiterId(data.recruiters_id);
          navigate("/recruiter-dashboard");
        } else if (data.job_seekers_id) {
          setJobSeekerId(data.job_seekers_id);
          navigate("/job-seeker-dashboard");
        } else {
          setIsLoggedIn(false);
          setRecruiterId(null);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setIsLoggedIn, setRecruiterId, setJobSeekerId,navigate]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append("email", formData.email);
    data.append("password", formData.password);

    try {
      const response = await fetch(
        `${API}/controllers/recruiterLogin.php`,
        {
          method: "POST",
          body: data,
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();

      if (responseData.success) {
        toast.success(responseData.message);
        setIsLoggedIn(true);
        setRecruiterId(responseData.recruiters_id);
        if (response.ok) {
          navigate("/recruiter-dashboard");
        }
      } else {
        toast.error(responseData.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred: " + error.message);
    }
  };

  return (
    <>
      <div className="container">
        <section className="recruiters-login">
          <h1>Recruiter&apos;s Login</h1>
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button className="btn btn-full" name="recruiterLoginButton">
              Login
            </button>
            <Link to="/recruiter/forgot-password" className="forgot-password">
              Forgot Password?
            </Link>
          </form>
        </section>
      </div>
    </>
  );
};

export default RecruiterLogin;
