import React from 'react';
import Navbar from '../../header/navbar';
import Banner from '../../../assets/image/Banner.png';
import '../../../css/landing.css';
import Maps from '../../../helper/Maps';

function Landing() {
    return (
        <div>
            <Navbar />
            <section className="hero-section">
                <div className="hero-image-container">
                    <img src={Banner} alt="Students working together in a library" className="hero-image" />
                    <div className="hero-text">
                        <h1>All University info for <br/>
                            Students in Just <br/>
                            One Place!</h1>
                    </div>
                </div>
            </section>
             {/* Academic Calendar and Virtual Tour Section */}
             <section className="calendar-tour-section">
                <div className="calendar">
                    <h2>Important Dates</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Event / Deadline</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Monday, September 30</td>
                                <td>Autumn Quarter begins</td>
                            </tr>
                            <tr>
                                <td>Monday, September 30</td>
                                <td>Autumn Quarter begins</td>
                            </tr>
                            <tr>
                                <td>Monday, September 30</td>
                                <td>Autumn Quarter begins</td>
                            </tr>
                            <tr>
                                <td>Monday, September 30</td>
                                <td>Autumn Quarter begins</td>
                            </tr>
                            <tr>
                                <td>Monday, September 30</td>
                                <td>Autumn Quarter begins</td>
                            </tr>
                        </tbody>
                    </table>
                    {/* "More" link below the table */}
                    <div className="calendar-more-link">
                        <a href="https://www.uwindsor.ca/registrar/events-listing">...More</a>
                    </div>
                </div>
                <div className="virtual-tour">
                    <h2>Virtual tour of the campus</h2>
                    <div className="tour-video-container">
                        <iframe 
                            width="853" 
                            height="480" 
                            src="https://www.youtube.com/embed/hT2pRGZj5G4" 
                            title="UWindsor virtual campus tour" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen
                            className="tour-video">
                        </iframe>
                    </div>
                    {/* "More details" link below the video */}
                    <div className="video-more-link">
                        <a href="https://www.future.uwindsor.ca/virtual-tours/">More details</a>
                    </div>
                </div>
            </section>
            {/* Map Section */}
            <section className="map-section">
                <h2>Maps of UWindsor</h2>
                <div className="map-container">
                    <Maps />  {/* Use the Maps component */}
                </div>
            </section>
        </div>
    );
}

export default Landing;
