import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Default from "../assets/images/Team/default.png";

const Search = () => {
  const navigate = useNavigate();
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

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    fetch("http://localhost/MySamvedna/api/controllers/searchJob.php", {
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
          toast.success(data.message);
          navigate("/job-seeker-login");
        } else {
          toast.error(data.message);
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("An error occurred: " + error.message);
      });

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
            >
              <option value="" disabled>
                Select Job Type
              </option>
              {/* Add your job types here */}
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
              {/* Add your locations here */}
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
