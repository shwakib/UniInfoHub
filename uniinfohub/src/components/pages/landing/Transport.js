import React from "react";
import Bustransport from '../../../assets/image/Bustransport.jpg';
import Bustransport2 from '../../../assets/image/Bustransport2.jpg';
import '../../../css/transport.css';
import Footer from '../../footer/footer';
import Navbar from '../../header/navbar';


function Transport() {
    return (
        <div>
            <Navbar />

            {/* Banner Section */}
            <section className="transport-banner">
                <img src={Bustransport} alt="Bus at Windsor" className="banner-image" />
                
            </section>

            {/* Information Section */}
            <section className="bus-info-section">
           
                <div className="bus-info-content">
                    <div className ="bus-pass-hearder">
                        <h1>Bus Pass Update</h1>
                        <p>All information regarding bus passes at Windsor</p>
                    </div>
                    <div className= " bus-pas-info">
                        <h3>Info</h3>
                        <p> The UWSA, OPUS, and GSS negotiated a universal student bus pass (U-Pass) for UWSA, OPUS, and GSS students. To use U-Pass, students will need to tap their U-Pass cards on the readers upon boarding the bus. </p>
                        <p> The U-Pass allows members to have unlimited rides on the regular Transit Windsor City service during the fall/winter 2024/2025 semesters.</p>
                    </div>
                    <div className="driving-today-section">
                        <h3>Driving Today for a Better Tomorrow</h3>
                        <p>Transit Windsor operates the public transit for the municipality of the City of Windsor. You can view the route maps and schedules for the service are map at the Transit Windsor website at www.citywindsor.ca/transitwindsor.
                        You can also view the terms and conditions and other useful information on the site.
                        </p>
                    </div>

                     {/* Pickup Information Box */}
                     <div class="container">
                        <div className="pickup-info-box">
                            <h4>Bus Pass Pick-Up Hours of Operation</h4>
                            <p><b>Outside UWSA Office</b></p>
                            <p>Monday to Thursday - 9:30am to 4:00pm</p><br></br>
                            <p>Friday - 9:30am to 3:30pm</p>
                        </div>

                        <img src={Bustransport2} alt="Another bus image" className="bus-image" />
                    </div>
                  


                    {/* FAQs Section */}
                    <div className="faq-section">
                        <h3>Pick Up Your Pass!</h3>
                        <ol>
                            <li>
                                <h4>Where can I pick up my bus pass?</h4>
                                <p>You can pick up your bus pass at the UWindsor Office during the following hours...</p>
                            </li>
                            <li>
                                <h4>What to bring?</h4>
                                <p>You need to bring your student ID card...</p>
                            </li>
                            <li>
                                <h4>Who can receive the bus pass?</h4>
                                <p>Only students with a valid student card can pick up the pass...</p>
                            </li>
                        </ol>
                    </div>

                    <div className="opt-out-info">
                        <h3>Opt-out Information</h3>
                        <p>Students who do not wish to avail the bus pass service should contact...</p>
                    </div>

                    {/* Contact Section */}
                    <div className="contact-info">
                        <table>
                            <thead>
                                <tr>
                                    <th>Main Office</th>
                                    <th>Contact us</th>
                                    <th>Hours of Operation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>123 Street, Windsor, ON</td>
                                    <td>contact@uwindsor.ca</td>
                                    <td>Mon-Fri: 9am - 4pm</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
 }

export default Transport;

