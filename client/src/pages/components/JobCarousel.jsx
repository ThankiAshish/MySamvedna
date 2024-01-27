import Carousel from "nuka-carousel";
import { useMediaQuery } from "react-responsive";
import PropTypes from "prop-types";

const jobData = [
  {
    id: 1,
    title: "Senior Software Engineer",
    disabilityPercentage: "50%",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    location: "New York, NY",
    type: "Full-Time",
  },
  {
    id: 2,
    title: "Product Designer",
    disabilityPercentage: "25%",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    location: "Remote",
    type: "Part-Time",
  },
  {
    id: 2,
    title: "Product Designer",
    disabilityPercentage: "25%",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    location: "Remote",
    type: "Part-Time",
  },
  {
    id: 2,
    title: "Product Designer",
    disabilityPercentage: "25%",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    location: "Remote",
    type: "Part-Time",
  },
  {
    id: 2,
    title: "Product Designer",
    disabilityPercentage: "25%",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    location: "Remote",
    type: "Part-Time",
  },
  {
    id: 2,
    title: "Product Designer",
    disabilityPercentage: "25%",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    location: "Remote",
    type: "Part-Time",
  },
];

const JobCard = ({ job }) => {
  return (
    <div className="job" key={job.id}>
      <h2>{job.title}</h2>
      <div className="job-info">
        <h4>Job Type</h4>
        <p>{job.type}</p>
        <h4>Location</h4>
        <p>{job.location}</p>
        <h4>Disability Percentage</h4>
        <p>{job.disabilityPercentage}</p>
      </div>
      <div className="job-description">
        <h4>Job Description</h4>
        <p>{job.description}</p>
      </div>
    </div>
  );
};

JobCard.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    disabilityPercentage: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
};

const JobCarousel = () => {
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
        <JobCard job={job} key={job.id} />
      ))}
    </Carousel>
  );
};

export default JobCarousel;
