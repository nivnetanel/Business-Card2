// * Imports
import React from "react";
import Customers from "./Bubble";

// * Style
import "./Customers.scss";

// Logo
import logo1 from "../../assets/images/logo (1).jpg";
import logo2 from "../../assets/images/logo (2).jpg";
import logo3 from "../../assets/images/logo (3).jpg";
import logo5 from "../../assets/images/logo (5).jpg";
import logo6 from "../../assets/images/logo (6).jpg";

const Customer: React.FC = () => {
  return (
    <div id="customers" data-aos="fade-up" className="customers">
      <h2>הלקוחות שלנו</h2>

      <img src={logo1} className="circular-img" />
      <img src={logo2} className="circular-img" />
      <img src={logo3} className="circular-img" />
      <img src={logo5} className="circular-img" />
      <img src={logo6} className="circular-img" />
    </div>
  );
};

export default Customer;
