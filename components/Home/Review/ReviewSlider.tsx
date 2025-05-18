"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ReviewSlider = () => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      // showDots={true}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
    >
      <div>
        <ReviewCard name="John Doe" role="Teacher" image="/img/john.webp" />
      </div>
      <div>
        <ReviewCard name="Jane Doe" role="Developer" image="/img/jane.webp" />
      </div>
      <div>
        <ReviewCard
          name="Javi Doe"
          role="Devops Engineer"
          image="/img/javi.webp"
        />
      </div>
      <div>
        <ReviewCard name="Jack Doe" role="Doctor" image="/img/john.webp" />
      </div>
      <div>
        <ReviewCard
          name="Jason Doe"
          role="Mern Developer"
          image="/img/jason.webp"
        />
      </div>
      <div>
        <ReviewCard
          name="Jesica Doe"
          role="Next JS Developer"
          image="/img/adam.webp"
        />
      </div>
    </Carousel>
  );
};

export default ReviewSlider;
