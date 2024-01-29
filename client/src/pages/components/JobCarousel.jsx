import Carousel from "nuka-carousel";
import { useMediaQuery } from "react-responsive";
import PropTypes from "prop-types";

const JobCarousel = ({ jobData }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Adjust breakpoint as needed

  const slidesToShow = isMobile ? 1 : 3;
  return (
    <Carousel
      slidesToShow={slidesToShow}
      withoutControls={true}
      slidesToScroll={1}
      autoplay={true}
      wrapAround={true}
      autoplayInterval={2000}
      renderArrows={false}
      className="job-slider"
    >
      {jobData.map((job) => (
        <div className="job" key={job.job_id}>
          <img src={`http://localhost/MySamvedna/api/uploads/profilePictures/${job.profilePicture}`} alt={job.profilePicture} />
          <h2>{job.jobDesignation}</h2>
          <div className="job-info">
            <h4>Job Type</h4>
            <p>{job.jobType}</p>
            <h4>Location</h4>
            <p>{job.placeOfWork}</p>
            <h4>Disability Percentage</h4>
            <p>{job.disabilityInfoPercentage}</p>
          </div>
          <div className="job-description">
            <h4>Job Description</h4>
            <p>
              {job.dutyDescription.length > 100
                ? `${job.dutyDescription.substring(0, 100)}...`
                : job.dutyDescription}
            </p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

JobCarousel.propTypes = {
  jobData: PropTypes.arrayOf(
    PropTypes.shape({
      job_id: PropTypes.number.isRequired,
      jobDesignation: PropTypes.string.isRequired,
      jobType: PropTypes.string.isRequired,
      placeOfWork: PropTypes.string.isRequired,
      disabilityInfoPercentage: PropTypes.string.isRequired,
      dutyDescription: PropTypes.string.isRequired,
      profilePicture: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default JobCarousel;
