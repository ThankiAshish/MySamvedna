import { useState } from "react";

import Default from "../assets/images/Team/default.png";

const Search = () => {
  const [formData, setFormData] = useState({
    search: "",
    jobType: "",
    location: "",
    disabilityPercentage: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with formData
    console.log(formData);
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
              required
            >
              <option value="">Job Type</option>
              {/* Add your job types here */}
            </select>
          </div>
          <div className="form-group">
            <select
              className="form-control"
              id="location"
              value={formData.location}
              onChange={handleChange}
              required
            >
              <option value="">Location</option>
              {/* Add your locations here */}
            </select>
          </div>
          <div className="form-group">
            <select
              className="form-control"
              id="disabilityPercentage"
              value={formData.disabilityPercentage}
              onChange={handleChange}
              required
            >
              <option value="">Disability Percentage</option>
              {/* Add your disability percentages here */}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </section>

      <section className="results">
        <h1>Results</h1>
        <div className="persons">
          <div className="person">
            <img src={Default} alt="Tarulata Patel" />
            <h3>Name</h3>
            <div className="person-details">
              <p>Job Type</p>
              <p>Location</p>
              <p>Disability Percentage</p>
              <p>Salary</p>
              <p>Job Description</p>
            </div>
          </div>
          <div className="person">
            <img src={Default} alt="Tarulata Patel" />
            <h3>Name</h3>
            <div className="person-details">
              <p>Job Type</p>
              <p>Location</p>
              <p>Disability Percentage</p>
              <p>Salary</p>
              <p>Job Description</p>
            </div>
          </div>
          <div className="person">
            <img src={Default} alt="Tarulata Patel" />
            <h3>Name</h3>
            <div className="person-details">
              <p>Job Type</p>
              <p>Location</p>
              <p>Disability Percentage</p>
              <p>Salary</p>
              <p>Job Description</p>
            </div>
          </div>
          <div className="person">
            <img src={Default} alt="Tarulata Patel" />
            <h3>Name</h3>
            <div className="person-details">
              <p>Job Type</p>
              <p>Location</p>
              <p>Disability Percentage</p>
              <p>Salary</p>
              <p>Job Description</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Search;
