import React from "react";

interface Props {
  image: string;
  name: string;
  text: string;
}

const Bubble: React.FC<Props> = ({ image, name, text }) => (
  <React.Fragment>
    <img src={image} alt="people who gives testimonials about clean software" />
    <div className="myCarousel">
      <h3>{name}</h3>
      <p>{text}</p>
    </div>
  </React.Fragment>
);

export default Bubble;
