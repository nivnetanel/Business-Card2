import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import SocialConnection from './SocialConnection/SocialConnection';
import './Footer.scss'


const Footer: React.FC = () => {
  return (
    <React.Fragment>
      {window.screen.width >= 1000 ? (
        /* Large screen */
        <div id="contact" className="footer">
          <h2>Let's connect!</h2>
          <div className="footer-wrapper">
            <ContactForm />
            <hr className="divider" />
            <SocialConnection />
          </div>
        </div>
      ) :
        /* Small screen*/
        <div data-aos="zoom-in" id="contact" className="footer">
          <h2>Let's connect!</h2>
          <div className="footer-wrapper">
            <ContactForm />
            <hr className="divider" />
            <SocialConnection />
          </div>
        </div>
      }
    </React.Fragment>
  )
};

export default Footer;
