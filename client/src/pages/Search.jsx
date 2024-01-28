import { useState } from "react";
import { toast } from "react-toastify";

const Search = () => {
  const [formData, setFormData] = useState({
    search: "",
    jobType: "",
    location: "",
    disabilityPercentage: "",
  });

  const [results, setResults] = useState([]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    fetch("http://localhost/MySamvedna/api/controllers/searchJobs.php", {
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
          setResults(data.jobs);
          toast.success(data.message);
          window.location.href = "#results";
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
      <section className="search">
        <h1>Search Jobs</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="search"
              placeholder="Search for a job"
              value={formData.search}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <select
              className="form-control"
              id="jobType"
              value={formData.jobType}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Job Type
              </option>
            </select>
          </div>
          <div className="form-group">
            <select
              className="form-control"
              id="location"
              value={formData.location}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Location
              </option>
            </select>
          </div>
          <div className="form-group">
            <select
              className="form-control"
              id="disabilityPercentage"
              value={formData.disabilityPercentage}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Disability Percentage
              </option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </section>

      {results.length > 0 && (
        <section className="results" id="results">
          <h1>Results</h1>
          <div className="persons" key={results}>
            {results.map((job) => (
              <div key={job.id} className="person">
                <h3 key={job.jobDesignation}>{job.jobDesignation}</h3>
                <div className="person-details" key={job.id}>
                  <p key={job.jobType}>{job.jobType}</p>
                  <p key={job.placeOfWork}>{job.placeOfWork}</p>
                  <p key={job.disabilityPercentage}>
                    {job.disabilityPercentage}
                  </p>
                  <p key={job.payAndAllowances}>{job.payAndAllowances}</p>
                  <p key={job.dutyDescription}>{job.dutyDescription}</p>
                </div>
              </div>
            ))}
          </div>
          {results.length === 0 && <p>No results found.</p>}
        </section>
      )}
    </div>
  );
};

export default Search;
