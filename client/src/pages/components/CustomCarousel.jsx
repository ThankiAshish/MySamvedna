import { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "nuka-carousel";

const CustomCarousel = () => {
  const [search, setSearch] = useState("");
  const [jobType, setJobType] = useState("");
  const [location, setLocation] = useState("");
  const [disabilityPercentage, setDisabilityPercentage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search, jobType, location, disabilityPercentage);
  };
  return (
    <Carousel
      autoplay={true}
      wrapAround={true}
      dragging={true}
      adaptiveHeight={true}
      withoutControls={true}
      pauseOnHover={true}
      className="custom-carousel"
    >
      <section className="register-type-container slider-1">
        <div className="register-type">
          <h1>Are you Recruiter?</h1>
          <Link to="/recruiter-register">
            <button className="btn">Recruiter Register</button>
          </Link>
        </div>
        <div className="divider"></div>
        <div className="register-type">
          <h1>Are you a Job Seeker?</h1>
          <Link to="/job-seeker-register">
            <button className="btn btn-outline">Job Seeker Register</button>
          </Link>
        </div>
      </section>

      <section className="register-type-container self-employed slider-2">
        <div className="register-type">
          <h1>Are you Self-Employed?</h1>
          <Link to="/self-employment-register">
            <button className="btn">Self Employed Register</button>
          </Link>
        </div>
      </section>

      <section className="search slider-3">
        <h1>Search Jobs</h1>
        <form className="slider-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for a job"
              required
            />
          </div>
          <div className="input-group">
            <select
              className="form-control"
              id="jobType"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              required
            >
              <option value="">Job Type</option>
              {/* Add your job types here */}
            </select>
            <select
              className="form-control"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            >
              <option value="">Location</option>
              {/* Add your locations here */}
            </select>
            <select
              className="form-control"
              id="disabilityPercentage"
              value={disabilityPercentage}
              onChange={(e) => setDisabilityPercentage(e.target.value)}
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
    </Carousel>
  );
};

export default CustomCarousel;
