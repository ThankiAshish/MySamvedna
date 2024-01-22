import { Link } from "react-router-dom";

const RecruiterDashboard = () => {
  return (
    <div className="container">
      <section className="recruiter-dashboard">
        <h1>
          <strong className="highlight-text">Recruiter</strong> Dashboard
        </h1>
        <div className="recruiter-dashboard-container">
          <div className="recruiter-dashboard-card">
            <h2>Post a Job</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quibusdam, voluptatum, quos, nesciunt voluptatem voluptates
              voluptatibus quae quia quod enim.
            </p>
            <Link
              to="/recruiter-dashboard/post-job"
              className="btn btn-primary"
            >
              Post a Job
            </Link>
          </div>
          <div className="recruiter-dashboard-card">
            <h2>View Jobs</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quibusdam, voluptatum, quos, nesciunt voluptatem voluptates
              voluptatibus quae quia quod enim.
            </p>
            <Link
              to="/recruiter-dashboard/view-jobs"
              className="btn btn-primary"
            >
              View Jobs
            </Link>
          </div>
          <div className="recruiter-dashboard-card">
            <h2>View Applications</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quibusdam, voluptatum, quos, nesciunt voluptatem voluptates
              voluptatibus quae quia quod enim.
            </p>
            <Link
              to="/recruiter-dashboard/view-applications"
              className="btn btn-primary"
            >
              View Applications
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecruiterDashboard;
