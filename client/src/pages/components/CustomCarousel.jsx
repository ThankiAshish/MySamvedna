import { CarouselProvider, Slider, Slide } from "pure-react-carousel";

import "pure-react-carousel/dist/react-carousel.es.css";

import Image1 from "../../assets/images/wallpaper_1.jpg";
import Image2 from "../../assets/images/wallpaper_2.jpg";
import Image3 from "../../assets/images/wallpaper_3.jpg";
import Image4 from "../../assets/images/wallpaper_4.jpg";
import Image5 from "../../assets/images/wallpaper_5.jpg";

const CustomCarousel = () => {
  const images = [
    { src: Image1, alt: "Image 1" },
    { src: Image2, alt: "Image 2" },
    { src: Image3, alt: "Image 3" },
    { src: Image4, alt: "Image 4" },
    { src: Image5, alt: "Image 5" },
  ];

  return (
    <CarouselProvider
      totalSlides={images.length}
      interval={3000}
      isPlaying={true}
      autoPlay={true}
      naturalSlideHeight={100}
      naturalSlideWidth={100}
      className="custom-carousel"
    >
      <Slider>
        {images.map((image, index) => (
          <Slide key={index} index={index}>
            <img src={image.src} alt={image.alt} />
          </Slide>
        ))}
      </Slider>
    </CarouselProvider>
  );
};

export default CustomCarousel;
