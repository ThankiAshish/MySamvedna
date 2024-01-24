import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const RecruiterLogin = () => {
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

    fetch("http://localhost/samvednabackend/controller/loginrecruiter.php", {
      method: "POST",
      body: data,
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
          toast.success(data.message);
        } else {
          toast.error(data.message);
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("An error occurred: " + error.message);
      });
  };

  return (
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
  );
};

export default RecruiterLogin;
