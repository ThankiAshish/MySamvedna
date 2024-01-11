import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="register-type-container">
      <div className="register-type">
        <h1>Are you Recruiter?</h1>
        <Link to="/recruiter-register">
          <button className="btn">Recruiter Register</button>
        </Link>
      </div>
      <div className="divider"></div>
      <div className="register-type">
        <h1>Are you a Job Seeker?</h1>
        <Link to="/seeker-register">
          <button className="btn btn-outline">Job Seeker Register</button>
        </Link>
      </div>
    </section>
  );
};

export default Register;
