import React from 'react';
import logo from '../../assets/image/Uniinfohub_logo.png'; // Replace with the actual path to your logo image
import '../../css/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Uni Info Hub Logo" />
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#health">HEALTH</a>
          <ul className="dropdown">
            {/* Add dropdown items here */}
          </ul>
        </li>
        <li>
          <a href="#transportation">TRANSPORTATION</a>
          <ul className="dropdown">
            {/* Add dropdown items here */}
          </ul>
        </li>
        <li>
          <a href="#library">LIBRARY & RESEARCH</a>
          <ul className="dropdown">
            {/* Add dropdown items here */}
          </ul>
        </li>
        <li>
          <a href="#student-services">STUDENT SERVICES</a>
          <ul className="dropdown">
            {/* Add dropdown items here */}
          </ul>
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;