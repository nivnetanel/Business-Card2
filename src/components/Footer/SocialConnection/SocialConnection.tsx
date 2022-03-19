import React from "react";
import { FaLinkedinIn, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import Bubble from "./Bubble";
import { IconContext } from "react-icons";
import "./SocialConnection.scss";

const SocialConnection: React.FC = () => {
  return (
    <div>
      {window.screen.width >= 800 ? (
        <div data-aos="fade-left" className="social-wrapper">
          <IconContext.Provider value={{ size: "40px", color: "white" }}>
            {/* Linkedin */}
            <Bubble
              ariaLabel="linkedin icon link"
              design="social-media-button linkedin"
              link=""
              icon={<FaLinkedinIn />}
            />

            {/* Whatsapp */}
            <Bubble
              ariaLabel="Whatsapp icon link"
              design="social-media-button whatsapp"
              link=""
              icon={<FaWhatsapp />}
            />

            {/* Twitter */}
            <Bubble
              ariaLabel="twitter icon link"
              design="social-media-button twitter"
              link=""
              icon={<FaTwitter />}
            />

            {/* Medium */}
            <Bubble
              ariaLabel="medium icon link"
              design="social-media-button medium"
              link=""
              icon={<SiMedium />}
            />
          </IconContext.Provider>
        </div>
      ) : (
        <div className="social-wrapper">
          <IconContext.Provider value={{ size: "40px", color: "white" }}>
            {/* Linkedin */}
            <Bubble
              ariaLabel="linkedin icon link"
              design="social-media-button linkedin"
              link=""
              icon={<FaLinkedinIn />}
            />

            {/* Whatsapp */}
            <Bubble
              ariaLabel="Whatsapp icon link"
              design="social-media-button whatsapp"
              link=""
              icon={<FaWhatsapp />}
            />

            {/* Twitter */}
            <Bubble
              ariaLabel="twitter icon link"
              design="social-media-button twitter"
              link=""
              icon={<FaTwitter />}
            />

            {/* Medium */}
            <Bubble
              ariaLabel="medium icon link"
              design="social-media-button medium"
              link=""
              icon={<SiMedium />}
            />
          </IconContext.Provider>
        </div>
      )}
    </div>
  );
};

export default SocialConnection;
