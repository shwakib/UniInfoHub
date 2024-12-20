import React, { useState } from 'react';
import logo from '../../assets/image/Uniinfohub_logo.png';
import '../../css/navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu open/close state
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <a href="/">
          <img src={logo} alt="Uni Info Hub Logo" />
        </a>
      </div>
      <div
        className={`hamburger-menu ${menuOpen ? 'menu-open' : ''}`}
        onClick={toggleMenu}
      >
        {menuOpen ? (
          <div className="close-icon">X</div> // Close icon when menu is open
        ) : (
          <>
            <div></div>
            <div></div>
            <div></div>
          </>
        )}
      </div>

      {/* Blue Overlay with Navbar Links */}
      <div className={`hamburger-overlay ${menuOpen ? 'active' : ''}`}>
        <ul className="navbar-links">
          <li><a href="#health" onClick={toggleMenu}>HEALTH</a></li>
          <li><a href="#transportation" onClick={toggleMenu}>TRANSPORTATION</a></li>
          <li><a href="#library" onClick={toggleMenu}>LIBRARY & RESEARCH</a></li>
          <li><a href="#student-services" onClick={toggleMenu}>STUDENT SERVICES</a></li>
          <li><a href="#about" onClick={toggleMenu}>ABOUT</a></li>
        </ul>
      </div>

      {/* Navbar Links (For Larger Screens) */}
      <ul className="navbar-links standard-links">
        <li>
          <a href="#health">HEALTH</a>
          <ul className="dropdown">
            <li><a href="/gss-provider">GSS & Provider - Green Shield Canada</a></li>
            <li><a href="/get-gsc-card">How to get GSC Card</a></li>
            <li><a href="/before-getting-gsc">Before getting GSC Card</a></li>
            <li><a href="/opt-out-health">Opt out from Health Insurance</a></li>
            <li><a href="/book-appointment">Book Appointment</a></li>
          </ul>
        </li>
        <li>
          <a href="#transportation">TRANSPORTATION</a>
          <ul className="dropdown">
            <li><a href="/transport">Before Getting Bus Pass</a></li>
            <li><a href="/getbuspass">Get a Bus Pass & Validity</a></li>
            <li><a href="/checkstop">Check Bus Schedule & Bus Stop List</a></li>
            <li><a href="/refillbuspass">Refill Bus Pass</a></li>
          </ul>
        </li>
        <li>
          <a href="#library">LIBRARY & RESEARCH</a>
          <ul className="dropdown">
            <li><a href="/how-to-print">How & Where to Print</a></li>
            <li><a href="/load-uwincard">Load UWINcard</a></li>
            <li><a href="/book-room">Book a Room in the Leddy Library & Amenities</a></li>
            <li><a href="/search-journal">Look for Research Papers in OMNI Library</a></li>
          </ul>
        </li>
        <li>
          <a href="#student-services">STUDENT SERVICES</a>
          <ul className="dropdown">
            <li><a href="/studentservices">SIN Clinic & Service Canada</a></li>
            <li><a href="/drivinglicense">Getting Driving License, Abstract & G1</a></li>
            <li><a href="/accommodation">Accommodation in University’s Dormitory</a></li>
            <li><a href="/rent">Renting in Canada</a></li>
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
