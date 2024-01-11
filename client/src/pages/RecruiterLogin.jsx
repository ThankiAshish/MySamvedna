import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const RecruiterLogin = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email === "" || form.password === "") {
      toast.error("Please fill all the fields");
      return;
    }

    if (form.password.length < 6) {
      toast.error("Password must be atleast 6 characters long");
      return;
    }
    console.log(form);
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
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Your Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button className="btn btn-full">Login</button>
          <Link to="/recruiter/forgot-password" className="forgot-password">
            Forgot Password?
          </Link>
        </form>
      </section>
    </div>
  );
};

export default RecruiterLogin;
