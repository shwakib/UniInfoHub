import React, { useState, useEffect } from 'react';
import Navbar from '../../header/navbar';
import Banner from '../../../assets/image/Banner.png';
import '../../../css/landing.css';
import Maps from '../../../helper/Maps';
import HealthWellness from '../../../helper/Health&Wellness';
import Transit from '../../../helper/Transit';
import Libraryservices from '../../../helper/Libraryservices';
import StudentHub from '../../../helper/StudentHub';
import Footer from '../../footer/footer';

function Landing() {
    const [importantDates, setImportantDates] = useState([]);
    const [latestNews, setLatestNews] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/important-dates')
            .then(response => response.json())
            .then(data => setImportantDates(data))
            .catch(error => console.error('Error fetching important dates:', error));
    }, []);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/daily-news')
            .then(response => response.json())
            .then(data => setLatestNews(data))
            .catch(error => console.error('Error fetching latest news:', error));
    }, []);

    return (
        <div>
            <Navbar />
            {/* Banner Section */}
            <section className="hero-section">
                <div className="hero-image-container">
                    <img src={Banner} alt="Students working together in a library" className="hero-image" />
                    <div className="hero-text">
                        <h1>All University Info <br />For students In <br />Just One Place!</h1>
                    </div>
                </div>
            </section>
            {/* Academic Calendar and Virtual Tour Section */}
            <section className="calendar-tour-section">
                <div className="calendar">
                    <h2>Important Dates</h2>
                    {importantDates.length > 0 ? (
                        <table>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Event / Deadline</th>
                                </tr>
                            </thead>
                            <tbody>
                                {importantDates.slice(0, 5).map((event, index) => ( // Display only the first 5 entries
                                    <tr key={index}>
                                        <td>{event.date}</td>
                                        <td><a href={event.link} target="_blank" rel="noopener noreferrer">{event.title}</a></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>Loading important dates...</p>
                    )}
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
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="tour-video"
                        ></iframe>
                    </div>
                    <div className="video-more-link">
                        <a href="https://www.future.uwindsor.ca/virtual-tours/">More details</a>
                    </div>
                </div>
            </section>
            {/* Map Section */}
            <section className="map-section">
                <h2>Maps of UWindsor</h2>
                <div className="map-container">
                    <Maps />
                </div>
            </section>
            {/* Latest News & Events Section */}
            <section className="news-section">
                <div className="news-section-header">
                    <h2>Latest News & Events</h2>
                    <span className="separator">|</span>
                    <a href="https://www.uwindsor.ca/dailynews/" className="all-news-link">All News</a>
                </div>
                <div className="news-cards-container">
                    {latestNews.length > 0 ? (
                        latestNews.slice(0, 3).map((news, index) => (
                            <div key={index} className="news-card">
                                <img src={news.image} alt={news.title} className="news-card-image" />
                                <div className="news-card-content">
                                    <h3 className="news-card-title">
                                        <a href={news.link} target="_blank" rel="noopener noreferrer">{news.title}</a>
                                    </h3>
                                    <p className="news-card-date">{news.date}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Loading latest news...</p>
                    )}
                </div>
            </section>
            {/* Health & Wellness Section */}
            <HealthWellness />
            {/* Transit & Transportation Section */}
            <Transit />
            {/* Printing, Library & Research Section */}
            <Libraryservices />
            {/* Student Hub Services Section */}
            <StudentHub />
            <section>
                <Footer />
            </section>
        </div>
    );
}

export default Landing;
