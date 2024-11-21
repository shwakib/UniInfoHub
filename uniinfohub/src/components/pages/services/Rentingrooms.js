import React from 'react';
import Navbar from '../../header/navbar';
import Footer from '../../footer/footer';
import bus_pass from '../../../assets/image/bus_pass.png'; 


function StudentHub() {
    return (
        <div>
            <Navbar />

            {/* Bus Pass Banner Section */}
            <section className="hero-section">
                <div className="hero-image-container">
                    <img src={bus_pass} alt="Bus Pass Service" className="hero-image" />
                    <div className="hero-text">
                        <h1>Before getting your Bus Pass!</h1>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="content-section">
                <div className="content-container">
                    <h2>Student Information Hub</h2>
                    <p>Welcome to the Student Information Hub! Here you can find all the information you need about various services provided to students, including bus passes, health services, student accommodations, and more. Use the sections below to navigate through the different services available to you.</p>
                    <ul className="services-list">
                        <li>Bus Pass and Transit Information</li>
                        <li>Health and Wellness Resources</li>
                        <li>Library and Academic Support</li>
                        <li>Student Hub and Marketplace</li>
                    </ul>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default StudentHub;
