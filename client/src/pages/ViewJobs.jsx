import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import { SessionState } from "../context/SessionProvider";

const ViewJobs = () => {
  const { isLoggedIn } = SessionState();
  const [jobs, setJobs] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    fetch("http://localhost/MySamvedna/api/controllers/renderJobs.php", {
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
        if (data.success) {
          setJobs(data.jobs);
        } else {
          console.log(data.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {isLoggedIn ? null : <Navigate to="/recruiter-login" />}
      <div className="container">
        <section className="view-jobs">
          <h1>
            <strong className="highlight-text">View</strong> Jobs
          </h1>
          <div className="view-jobs-container">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Sr.</th>
                  <th scope="col">Job Title</th>
                  <th scope="col">Job Type</th>
                  <th scope="col">Location</th>
                  <th scope="col">Disability Percentage</th>
                  <th scope="col">Salary</th>
                  <th scope="col">Description</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job) => {
                  () => setCount(count + 1);
                  return (
                    <tr key={count}>
                      <td scope="row">{count}</td>
                      <td>{job.jobDesignation}</td>
                      <td>{job.jobType}</td>
                      <td>{job.placeOfWork}</td>
                      <td>{job.disabilityInfoPercentage}</td>
                      <td>{job.payAndAllowances}</td>
                      <td>{job.dutyDescription}</td>
                      <td>
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-delete">Delete</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
};

export default ViewJobs;
