import React from 'react';
import Navbar from '../../header/navbar';
import Footer from '../../footer/footer';
import Banner from '../../../assets/image/StopForTransit WIndsor.webp';
import BusSchedule from '../../../assets/image/Bus Stop Scheule.png';
import Bustimecheck_1 from '../../../assets/image/Bus-time-check_1.png';
import Bustimecheck_2 from '../../../assets/image/Bus-time-check_2.png';
import '../../../css/checkstop.css';

function CheckStop() {
    return (
        <div>
            <Navbar />
            {/* Banner Section */}
            <section className="stop-hero-section">
                <div className="stop-hero-image-container">
                    <img src={Banner} alt="Students working together in a library" className="stop-hero-image" />
                </div>
            </section>

            {/* Introduction Section */}
            <section className="intro-stop-section">
                <p>
                    Whether you're a daily commuter, a student, or an occasional traveler, finding accurate and updated
                    bus schedules and stop locations is crucial. This page is designed to simplify your experience with
                    Transit Windsor. From real-time tracking to downloadable maps, we've got you covered.
                </p>
            </section>

            {/* Combined Bus Schedules and Stop List Section */}
            <section className="bus-schedules">
                <h2 className="section-title">Transit Windsor: Bus Schedules and Stop Lists</h2>
                <hr />

                {/* Using the Transit Windsor Website */}
                <div className="section-item">
                    <h3>Using the Transit Windsor Website</h3>
                    <p>
                        The Transit Windsor website is your one-stop shop for bus schedules and stop lists. Here's how
                        to access it:
                    </p>
                    <ul>
                        <li>
                            Visit the{' '}
                            <a
                                href="https://www.citywindsor.ca/residents/transit-windsor/Routes-and-Schedules"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Transit Windsor Routes and Schedules page
                            </a>.
                        </li>
                        Wherever you're heading, start by searching on Google Maps to find the shortest and fastest route. Once you've identified your destination, visit the Transit Windsor website to locate the bus number that serves your route. Click on the bus number to view detailed information, including the starting and ending stops. Follow the image for reference.
                        <img src={BusSchedule} alt="Transit Windsor Picture" className="bus-schedule-image" />
                        <li>
                            Always ensure to check for detours to avoid any interruptions during your journey. Keep in mind that federal and regular holidays may have different bus schedules. Plan your trip accordingly to stay on track and enjoy a smooth commute.
                        </li>
                    </ul>
                    <p className="tip">Tip: Download the schedule PDFs for offline access.</p>
                </div>

                {/* Using Real-Time Tracking */}
                <div className="section-item">
                    <h3>Using Real-Time Tracking</h3>
                    <p>
                        For live updates, use the{' '}
                        <a
                            href="https://windsor.mytransitride.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Windsor Prediction Portal
                        </a>.
                    </p>
                    <ul>
                        <li>
                            Open the portal on your device and select the bus you're taking for your journey. The map will display all active buses driving around the city in real time. Use the GPS locate button to find your current location and see the closest bus stops near you. Select the nearest bus stop to view the next three bus arrival times. When you click on a bus stop, you will see a STOP ID. Note this ID on your phone. If you don’t have an internet connection in the future, you can text the STOP ID to **88881**, and you'll receive the bus timings directly on your phone.
                        </li>
                        <img
                            src={Bustimecheck_1}
                            alt="Transit Windsor Real-Time Tracking"
                            className="bus-schedule-image"
                        />
                        <li>
                            For better navigation, you can search by address, bus stop, or route number using the search option in the portal. Additionally, you can check the crowd level on a bus by clicking on the bus icon on the map. This will display the vehicle number and how many seats are available.
                        </li>
                        <img
                            src={Bustimecheck_2}
                            alt="Transit Windsor Bus Crowd Information"
                            className="bus-schedule-image"
                        />
                        <li>Arrive at the bus stop at least 5 minutes early to avoid missing your bus.</li>
                    </ul>
                    <p className="pro-tip">Pro Tip: Bookmark the portal for quick and easy access.</p>
                </div>

                {/* Using Mobile Apps */}
                <div className="section-item">
                    <h3>Using Mobile Apps</h3>
                    <p>
                        Planning your trip with mobile apps is simple and convenient. These apps allow you to view real-time bus tracking,                       plan your route, and access schedules right from your smartphone. With user-friendly interfaces and advanced                        features like bus crowd tracking and estimated arrival times, they are essential tools for your daily commute or                        occasional travel. Below are two highly recommended apps for Transit Windsor:
                    </p>
                    <ul>
                        <li>
                            <b>Transit App</b>: Plan your journey, view routes, and check real-time bus locations.{' '}
                            <a
                                href="https://apps.apple.com/app/transit-bus-train-times/id498151501"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="app-link"
                            >
                                Download for iOS
                            </a>{' '}
                            |{' '}
                            <a
                                href="https://play.google.com/store/apps/details?id=com.thetransitapp.droid"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="app-link"
                            >
                                Download for Android
                            </a>.
                        </li>
                        <li>
                            <b>Moovit App</b>: Provides real-time updates, live navigation, and detailed route
                            information.{' '}
                            <a
                                href="https://apps.apple.com/app/moovit-your-local-transit-app/id498477945"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="app-link"
                            >
                                Download for iOS
                            </a>{' '}
                            |{' '}
                            <a
                                href="https://play.google.com/store/apps/details?id=com.tranzmate"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="app-link"
                            >
                                Download for Android
                            </a>.
                        </li>
                    </ul>
                </div>

                {/* Additional Tips */}
                <div className="section-item">
                    <h3>Tips for Using Transit Windsor Stop Lists</h3>
                    <ul>
                        <li>
                            Download the official route maps from the Transit Windsor website to view all stops on your
                            route.
                        </li>
                        <li>
                            Use real-time tracking or apps like Transit and Moovit to find nearby stops and check live
                            bus arrival times.
                        </li>
                        <li>
                            For specific stop-related inquiries, contact Transit Windsor via phone (519-944-4111) or
                            email (311@citywindsor.ca).
                        </li>
                    </ul>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default CheckStop;
