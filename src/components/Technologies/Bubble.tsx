// * Imports
import React from "react";
import './Bubble.scss';

interface Props {
  icon: any;
  title: string;
}

const Bubble: React.FC<Props> = ({ icon, title }) => (
  <div data-aos="fade-up" className="icon-wrapper">
    {icon}
    <h4 className="text-muted">{title}</h4>
  </div>
);

export default Bubble;
