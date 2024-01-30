import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ViewJob = () => {
  const location = useLocation();
  const jobId = location.state.jobId;

  const [job, setJob] = useState({});

  useEffect(() => {
    fetch(
      `http://localhost/MySamvedna/api/controllers/getJob.php?job_id=${jobId}`,
      {
        method: "GET",
        credentials: "include",
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          setJob(data.job[0]);
        } else {
          console.log(data.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [jobId]);

  return (
    <div className="container">
      <section className="view-job">
        <h1>
          Job at <strong className="highlight-text">{job.companyName}</strong>
        </h1>
        <div className="job">
          <img
            src={`http://localhost/MySamvedna/api/uploads/profilePictures/${job.profilePicture}`}
            alt={job.profilePicture}
          />
          <h2>{job.jobDesignation}</h2>
          <div className="job-info">
            <h4>Job Type</h4>
            <p>{job.jobType}</p>
            <h4>Location</h4>
            <p>{job.placeOfWork}</p>
            <h4>Disability Percentage</h4>
            <p>{job.disabilityInfoPercentage}</p>
            {/* Add more fields here */}
            <h4>Company Website</h4>
            <p>{job.website}</p>
            <h4>Nature of Business</h4>
            <p>{job.natureOfBusiness}</p>
            <h4>Address</h4>
            <p>{job.address}</p>
            <h4>Area Code</h4>
            <p>{job.areaCode}</p>
            {/* Continue adding more fields as needed */}
          </div>
          <div className="job-description">
            <h4>Job Description</h4>
            <p>{job.dutyDescription}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewJob;
