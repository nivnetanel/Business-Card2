import React from 'react'

interface IProps {
  ariaLabel: string;
  design: string;
  link: string;
  icon: any;
}

const Bubble: React.FC<IProps> = ({ ariaLabel, design, link, icon }) => {
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={link}
      aria-label={ariaLabel}
      className={design}
    >
      {icon}
    </a>
  )
}

export default Bubble