import { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { SessionState } from "../../context/SessionProvider";

const RecruiterDashboard = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn, recruiterId, setRecruiterId } =
    SessionState();

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
        console.log(data)
        if (data.is_logged_in) {
          setIsLoggedIn(true);
          setRecruiterId(data.recruiters_id);
        } else {
          setIsLoggedIn(false);
          setRecruiterId(null);
          navigate("/recruiter-login")
        }
      })
      .catch((error) => {
        console.error(error);
      });

    if (!isLoggedIn) {
      <Navigate to="/recruiter-login" />;
    }
  }, [isLoggedIn, setIsLoggedIn, recruiterId, setRecruiterId, navigate]);

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
