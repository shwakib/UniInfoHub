import React from "react";
import "../../css/navbar.css"; // Make sure to create this file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="navbar-uni">Uni</span>
        <span className="navbar-infohub">InfoHUB</span>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#health">Health &#9662;</a>
        </li>
        <li>
          <a href="#transportation">Transportation</a>
        </li>
        <li>
          <a href="#library">Library & Research &#9662;</a>
        </li>
        <li>
          <a href="#student-services">Student Services &#9662;</a>
        </li>
        <li>
          <a href="#about">About &#9662;</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
