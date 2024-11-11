import React from 'react';
import logo from '../../assets/image/Uniinfohub_logo.png';
import { Link } from 'react-router-dom';
import '../../css/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href='/'><img src={logo} alt="Uni Info Hub Logo" /></a>
      </div>
      <ul className="navbar-links">
      <li>
          <Link to="#health">HEALTH</Link>
          <ul className="dropdown">
            <li><Link to="/gss-provider">GSS & Provider - Green Shield Canada</Link></li>
            <li><Link to="/get-gsc-card">How to get GSC Card</Link></li>
            <li><Link to="/before-getting-gsc">Before getting GSC Card</Link></li>
            <li><Link to="/opt-out-health">Opt out from Health Insurance</Link></li>
          </ul>
        </li>
        <li>
          <a href="#transportation">TRANSPORTATION</a>
          <ul className="dropdown">
            <li><a href="#before-buss-pass">Before Getting Bus Pass</a></li>
            <li><a href="#buss-pass-and-validity">Get a Bus Pass & Validity</a></li>
            <li><a href="#bus-stop-list">Check Bus Schedule & Bus Stop List</a></li>
            <li><a href="#refill-bus-pass">Refill Bus Pass</a></li>
          </ul>
        </li>
        <li>
          <a href="#library">LIBRARY & RESEARCH</a>
          <ul className="dropdown">
            <li><a href="#how-to-print">How & Where to Print</a></li>
            <li><a href="#laod-uwincard">Load UWINcard</a></li>
            <li><a href="#book-room">Book a Room in the Leddy Library & Amenities</a></li>
            <li><a href="#search-journal">Look for Research Papers in OMNI Library</a></li>
          </ul>
        </li>
        <li>
          <a href="#student-services">STUDENT SERVICES</a>
          <ul className="dropdown">
            <li><a href="#sin-clinic">SIN Clinic & Service Canada</a></li>
            <li><a href="#driving-license-basic">Getting Driving License, Abstract & G1</a></li>
            <li><a href="#accomodation-dorm">Accommodation in University’s Dormitory</a></li>
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
