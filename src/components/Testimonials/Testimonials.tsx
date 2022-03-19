import React from "react";
import Img1 from "../../assets/images/Img1.webp";
import Img2 from "../../assets/images/Img2.webp";
import Img3 from "../../assets/images/Img3.webp";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Bubble from "./Bubble";
import TestimonialUiString from './TestimonialUiString'
import "./Testimonials.scss";

const Testimonials: React.FC = () => (
  <div data-aos="fade-up">

    <blockquote className="blockquote">
      <hr />
      <p>{TestimonialUiString.SOME_OF_MY_LOVELY_CUSTOMERS}</p>
      <hr />
    </blockquote>
    <Carousel
      showArrows={false}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6000}
    >
      <Bubble
        image={Img1}
        name={TestimonialUiString.CLIENT_ONE.NAME}
        text={TestimonialUiString.CLIENT_ONE.TESTIMONIAL}
      />
      <Bubble
        image={Img2}
        name={TestimonialUiString.CLIENT_TWO.NAME}
        text={TestimonialUiString.CLIENT_TWO.TESTIMONIAL}
      />
      <Bubble
        image={Img3}
        name={TestimonialUiString.CLIENT_THREE.NAME}
        text={TestimonialUiString.CLIENT_THREE.TESTIMONIAL}
      />
    </Carousel>
  </div>
);

export default Testimonials;
