import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import './ScrollTopButton.scss'

const ScrollTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) setVisible(true)
    else if (scrolled <= 300) setVisible(false)
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <button className="bla" onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }} >
      <FaArrowCircleUp
       
        size={35}
        color={'#dc3545'} />
    </button>
  );
}

export default ScrollTopButton;


