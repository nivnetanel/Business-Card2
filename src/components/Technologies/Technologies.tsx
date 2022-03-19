// * Imports
import React from "react";
import Technology from "./Bubble";

// * Style
import "./Technologies.scss";

// Logo
import logo1 from "../../assets/images/logo (1).jpg";
import logo2 from "../../assets/images/logo (2).jpg";
import logo3 from "../../assets/images/logo (3).jpg";
import logo4 from "../../assets/images/logo (4).jpg";
import logo5 from "../../assets/images/logo (5).jpg";
import logo6 from "../../assets/images/logo (6).jpg";

const Technologies: React.FC = () => {
  return (
    <div id="technologies" data-aos="fade-up" className="technologies">
      <h2 className="mb-5">My Best Customers</h2>
      <ul>
        <li>
          <img src={logo1} className="circular-img" />
        </li>
        <li>
          <img src={logo2} className="circular-img" />
        </li>
        <li>
          <img src={logo3} className="circular-img" />
        </li>
        <li>
          <img src={logo4} className="circular-img" />
        </li>
        <li>
          <img src={logo5} className="circular-img" />
        </li>
        <li>
          <img src={logo6} className="circular-img" />
        </li>
      </ul>
      <div className="technologies-wrapper"></div>
    </div>
  );
};

export default Technologies;
