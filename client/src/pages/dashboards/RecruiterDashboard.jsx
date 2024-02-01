import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SessionState } from "../../context/SessionProvider";

const API = import.meta.env.VITE_API_URL;

const RecruiterDashboard = () => {
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
          if (data.recruiters_id) {
            setRecruiterId(data.recruiters_id);
          } else if (data.job_seekers_id) {
            setJobSeekerId(data.job_seekers_id);
            navigate("/job-seeker-dashboard");
          }
        } else {
          setIsLoggedIn(false);
          setRecruiterId(null);
          navigate("/recruiter-login");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setIsLoggedIn, setRecruiterId, setJobSeekerId, navigate]);

  return (
    <>
      <div className="container">
        <section className="recruiter-dashboard">
          <h1>
            <strong className="highlight-text">Recruiter</strong> Dashboard
          </h1>
          <div className="recruiter-dashboard-container">
            <div className="recruiter-dashboard-card">
              <h2>Post a Job</h2>
              <p>
                Looking to hire? Post a job to reach out to our vast network of
                talented professionals. It&apos;s quick, easy, and effective.
                Start finding the right candidate for your job today.
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
                Keep track of all your job postings in one place. View
                applications, schedule interviews, and manage your hiring
                process efficiently. Start exploring your job postings now.
              </p>
              <Link
                to="/recruiter-dashboard/view-jobs"
                className="btn btn-primary"
              >
                View Jobs
              </Link>
            </div>
            {/* <div className="recruiter-dashboard-card">
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
          </div> */}
          </div>
        </section>
      </div>
    </>
  );
};

export default RecruiterDashboard;
