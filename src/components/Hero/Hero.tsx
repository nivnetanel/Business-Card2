// * Import
import React from "react";
import ProfileImage from "../../assets/images/profileImage.png";
// * Style
import "./Hero.scss";

const Hero: React.FC = () => (
  <div className="hero-image-background">
    <div data-aos="zoom-in" className="hero-content">
      <img src={ProfileImage} alt="profile image" />
      <div className="heroBigHeader">
        <h1 className="header">נימני הובלות</h1>
        <h2 className={`header subTitle`}>איכות, שירות, זמינות בכל שעה</h2>
      </div>
    </div>
  </div>
);

export default Hero;
