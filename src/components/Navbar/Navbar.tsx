import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/images/nimni logo.png";

const NavBar: React.FC = () => {
  const [collapseClass, setCollapseClass] = useState<string>(
    "navbar-collapse collapse"
  );
  const [isNavbarExpend, setIsNavbarExpend] = useState<boolean>(false);

  const onNavbarItemClick = () => {
    if (isNavbarExpend && collapseClass === "navbar-collapse collapse show") {
      setCollapseClass("navbar-collapse collapse");
      setIsNavbarExpend(false);
    }
  };

  const toggleNavigationIcon = () => {
    setCollapseClass("navbar-collapse collapse show");
    setIsNavbarExpend(!isNavbarExpend);
  };

  return (
    <nav className={`navbar px-5 navbar-expand-lg navbar-dark`}>
      <div className="container-fluid">
        <img src={logo} className="logo-img" />
        <button
          onClick={() => toggleNavigationIcon()}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={`navbar-toggler-icon`}></span>
        </button>
        <div className={collapseClass} id="navbarNav">
          <ul className="navbar-nav text-center ms-auto">
            <li>
              <a
                onClick={() => onNavbarItemClick()}
                className="navbar-item"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => onNavbarItemClick()}
                className="navbar-item"
                href="#customers"
              >
                Customers
              </a>
            </li>
            <li>
              <a
                onClick={() => onNavbarItemClick()}
                className="navbar-item"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
