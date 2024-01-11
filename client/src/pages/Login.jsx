import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="login-type-container">
      <div className="login-type">
        <h1>Are you Recruiter?</h1>
        <Link to="/recruiter-login">
          <button className="btn">Recruiter Login</button>
        </Link>
      </div>
      <div className="divider"></div>
      <div className="login-type">
        <h1>Are you a Job Seeker?</h1>
        <Link to="/seeker-login">
          <button className="btn btn-outline">Job Seeker Login</button>
        </Link>
      </div>
    </section>
  );
};

export default Login;
