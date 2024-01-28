import { useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";

import { SessionState } from "../context/SessionProvider";

const ViewJobs = () => {
  const { isLoggedIn } = SessionState();
  const [jobs, setJobs] = useState([]);

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
            {jobs.length === 0 ? (
              <div className="alert alert-info" role="alert">
                No jobs found!
              </div>
            ) : (
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
                  {jobs.map((job, index) => {
                    return (
                      <tr key={index}>
                        <td scope="row">{index + 1}</td>
                        <td>{job.jobDesignation}</td>
                        <td>{job.jobType}</td>
                        <td>{job.placeOfWork}</td>
                        <td>{job.disabilityInfoPercentage}</td>
                        <td>{job.payAndAllowances}</td>
                        <td>{job.dutyDescription}</td>
                        <td className="controls">
                          <Link to={`/recruiter-dashboard/edit-job/${job.job_id}`} className="btn btn-primary">Edit</Link >
                          <button className="btn btn-delete">Delete</button >
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default ViewJobs;
