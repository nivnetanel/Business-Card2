import React from "react";
import AboutUiString from "./AboutUiString";
import "./About.scss";

const About: React.FC = () => (
  <React.Fragment>
    {window.screen.width >= 1000 ? (
      /* About large screen */
      <div id="about" className="about">
        <article data-aos="fade-right">
          <h2>{AboutUiString.SO_WHO_AM_I}</h2>
          <p>{AboutUiString.SO_WHO_AM_I_DESCRIPTION}</p>
        </article>
        <article data-aos="fade-left">
          <h2>{AboutUiString.WHY_WORKING_WITH_ME}</h2>
          <p>{AboutUiString.WHY_WORKING_WITH_ME_DESCRIPTION}</p>
        </article>
      </div>
    ) : (
      /* About large small */
      <div id="about" className="about">
        <article>
          <h2>{AboutUiString.SO_WHO_AM_I}</h2>
          <p>{AboutUiString.SO_WHO_AM_I_DESCRIPTION}</p>
        </article>
        <article>
          <h2>{AboutUiString.WHY_WORKING_WITH_ME}</h2>
          <p>{AboutUiString.WHY_WORKING_WITH_ME_DESCRIPTION}</p>
        </article>
      </div>
    )}
  </React.Fragment>
);

export default About;
