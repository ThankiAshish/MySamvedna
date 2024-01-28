import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { SessionState } from "../../context/SessionProvider";

const JobSeekerLogin = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn, setJobSeekerId } = SessionState();

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
        console.log(data);
        if (data.is_logged_in) {
          setIsLoggedIn(true);
          setJobSeekerId(data.job_seekers_id);
          navigate("/job-seeker-dashboard");
        } else {
          setIsLoggedIn(false);
          setJobSeekerId(null);
          navigate("/job-seeker-login");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [isLoggedIn, setIsLoggedIn, setJobSeekerId, navigate]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append("email", formData.email);
    data.append("password", formData.password);

    try {
      const response = await fetch(
        "http://localhost/MySamvedna/api/controllers/jobSeekerLogin.php",
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
        setJobSeekerId(responseData.job_seeker_id);
        if (response.ok) {
          navigate("/job-seeker-dashboard");
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
        <section className="job-seeker-login">
          <h1>Job Seeker&apos;s Login</h1>
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
            <Link to="/job-seeker/forgot-password" className="forgot-password">
              Forgot Password?
            </Link>
          </form>
        </section>
      </div>
    </>
  );
};

export default JobSeekerLogin;
