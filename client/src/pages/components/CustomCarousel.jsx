import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import { Link } from "react-router-dom";

import "pure-react-carousel/dist/react-carousel.es.css";

const CustomCarousel = () => {
  return (
    <CarouselProvider
      totalSlides={2}
      interval={3000}
      isPlaying={true}
      autoPlay={true}
      naturalSlideHeight={100}
      naturalSlideWidth={100}
      infinite={true}
      className="custom-carousel"
    >
      <Slider>
        <Slide>
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
        </Slide>
        <Slide>
          <section className="register-type-container self-employed slider-2">
            <div className="register-type">
              <h1>Are you Self-Employed?</h1>
              <div
                className="btn-container"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                <Link to="/self-employment-register">
                  <button className="btn">Self Employed Register</button>
                </Link>
                <Link to="/self-employment-login">
                  <button className="btn btn-outline">
                    Self Employed Login
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </Slide>
      </Slider>
    </CarouselProvider>
  );
};

export default CustomCarousel;
