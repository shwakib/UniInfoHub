import React from 'react';
import Navbar from '../../header/navbar';
import Footer from '../../footer/footer';
import bus_pass from '../../../assets/image/bus_pass.png'; 
import '../../../css/getbuspass.css';

function StudentHub() {
    return (
        <div>
            <Navbar />

            <section className="bus-pass-hero-section">
                <div className="bus-pass-hero-image-container">
                    <img src={bus_pass} alt="Bus Pass Service" className="bus-pass-hero-image" />
                    <div className="bus-pass-hero-text">
                        <h1>Get Bus Pass!</h1>
                    </div>
                </div>
            </section>

            <section className="bus-pass-deadlines-periods-costs-section">
                <h2>DEADLINES, PERIODS AND COSTS</h2>
                <hr className="bus-pass-header-line" />

                {/* On This Page Links */}
                <div className="bus-pass-on-this-page">
                    <h4>ON THIS PAGE</h4>
                    <ul>
                        <li><a href="#fall-semester">Fall Semester (mandatory)</a></li>
                        <li><a href="#winter-semester">Winter Semester (mandatory)</a></li>
                        <li><a href="#summer-semester">Summer Semester (optional)</a></li>
                    </ul>
                </div>

                {/* Fall Semester Section */}
                <div id="fall-semester" className="bus-pass-semester-section">
                    <h3>Fall Semester (mandatory)</h3>
                    <ul>
                        <li><strong>2024 Opt-Out Period:</strong> September 1st – October 3rd</li>
                        <li><strong>Card Valid:</strong> September – April</li>
                        <li><strong>Semester Cost:</strong> $296</li>
                    </ul>
                </div>

                {/* Winter Semester Section */}
                <div id="winter-semester" className="bus-pass-semester-section">
                    <h3>Winter Semester (mandatory)</h3>
                    <ul>
                        <li><strong>2025 Opt-Out Period:</strong> Will be posted in December</li>
                        <li><strong>Card Valid:</strong> January – April</li>
                        <li><strong>Semester Cost:</strong> $148</li>
                    </ul>
                </div>

                {/* Summer Semester Section */}
                <div id="summer-semester" className="bus-pass-semester-section">
                    <h3>Summer Semester (optional)</h3>
                    <ul>
                        <li><strong>Opt-In Period and Deadline:</strong> Between April 4 and August 15</li>
                        <li><strong>Card Valid:</strong> Between May 1 and August 31</li>
                        <li><strong>Semester Cost:</strong> $84.91</li>
                    </ul>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default StudentHub;
