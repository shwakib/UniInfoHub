import React from 'react';
import Navbar from '../../header/navbar';
import Banner from '../../../assets/image/Banner.png';
import '../../../css/landing.css';
import Maps from '../../../helper/Maps';
import Footer from '../../footer/footer';
import Hackathon from '../../../assets/image/Hackathon.png';
import Studentlife from '../../../assets/image/Student Life.png';
import Codingwk from '../../../assets/image/CodingWorkshop.png';
import HealthServices from '../../../assets/image/HealthServices.png';
import CollegeDoctors from '../../../assets/image/CollegeDoctors.png';
import SexualHealth from '../../../assets/image/SexualHealth.png';
import Vaccinations from '../../../assets/image/Vaccinations.png';
import MentalHealth from '../../../assets/image/MentalHealth.png';
import HealthClinic from '../../../assets/image/HealthClinic.png';
import BusPass from '../../../assets/image/BusPass.png';
import BusSchedule from '../../../assets/image/BusSchedule.png';
import PrivateTransport from '../../../assets/image/PrivateTransport.png';
import PrintService from '../../../assets/image/PrintService.png';
import LibraryAmenities from '../../../assets/image/LibraryAmenities.png';
import ResearchPaper from '../../../assets/image/ResearchPaper.png';
import LoadUWIN from '../../../assets/image/LoadUWIN.png';
import Library from '../../../assets/image/Library.png';
import CAWMarketplace from '../../../assets/image/CAWMarketplace.png';
import SINClinic from '../../../assets/image/SINClinic.png';
import DrivingLicense from '../../../assets/image/DrivingLicense.png';
import DormitoryAccommodation from '../../../assets/image/DormitoryAccommodation.png';
import RentingCanada from '../../../assets/image/RentingCanada.png';

const newsData = [
    {
        image: Hackathon,
        title: 'Hackathon 3.0 Organized by Computer Club',
        date: 'August 20, 2022'
    },
    {
        image: Codingwk,
        title: 'Coding workshop is conducted by Harvard Guest Professor',
        date: 'August 20, 2022'
    },
    {
        image: Studentlife,
        title: 'Inclusive student life',
        date: 'August 20, 2022'
    }
];

const healthData = [
    {
        image: HealthServices,
        title: 'Health services',
        description: 'Access to health services including dentists, prescriptions, and opticians.'
    },
    {
        image: CollegeDoctors,
        title: 'College doctors and nurses',
        description: 'Registering with the NHS and details of your college doctor and nurse.'
    },
    {
        image: SexualHealth,
        title: 'Sexual health',
        description: 'Information about all aspects of sexual health including STIs and contraception.'
    },
    {
        image: Vaccinations,
        title: 'Important vaccinations',
        description: 'Information about infectious diseases such as meningitis and important vaccinations.'
    },
    {
        image: MentalHealth,
        title: 'Mental health',
        description: 'Mental health support and resources for students.'
    },
    {
        image: HealthClinic,
        title: 'Visit the Health Clinic',
        description: 'Information about visiting the campus health clinic.'
    }
];

const transitData = [
    {
        link:'/transport',
        image: BusPass,
        title: 'Getting a Bus Pass',
        description: 'Information on how to get access to transit passes and bus services.'
    },
    {
        image: BusSchedule,
        title: 'Bus Schedules',
        description: 'Details on bus schedules to navigate around the campus and city.'
    },
    {
        image: PrivateTransport,
        title: 'Private Transportation',
        description: 'Information on private transportation options such as bike rentals and car services.'
    }
];

const libraryData = [
    {
        image: PrintService,
        title: 'Where & How to Print',
        description: 'Access to printing services on campus, including guidelines for use.'
    },
    {
        image: LibraryAmenities,
        title: 'Leddy Library & Amenities',
        description: 'Information on library amenities and resources available to students.'
    },
    {
        image: ResearchPaper,
        title: 'Research Papers in OMNI Library',
        description: 'Guidelines for accessing research papers through the OMNI library.'
    },
    {
        image: Library,
        title: 'Library',
        description: 'Explore extensive resources available in the campus library for academic use.'
    },
    {
        image: LoadUWIN,
        title: 'Load UWIN',
        description: 'Information on using UWIN services and accessing library portals.'
    }
];

const studentHubData = [
    {
        image: CAWMarketplace,
        title: 'CAW & Marketplace',
        description: 'Access to health services including dentists, prescriptions and opticians.'
    },
    {
        image: SINClinic,
        title: 'SIN Clinic & Service Canada',
        description: 'Information on SIN Clinic and Service Canada for students.'
    },
    {
        image: DrivingLicense,
        title: 'Driving License, Abstract & G1',
        description: 'Guidance on obtaining a driving license, abstract, and G1 test information.'
    },
    {
        image: DormitoryAccommodation,
        title: 'Accommodation in Dormitory',
        description: 'Information on dormitory accommodations and services available.'
    },
    {
        image: RentingCanada,
        title: 'Renting in Canada',
        description: 'Guidelines and information for renting apartments in Canada as a student.'
    }
];

function Landing() {
    return (
        <div>
            <Navbar />

            {/* Banner Section */}
            <section className="hero-section">
                <div className="hero-image-container">
                    <img src={Banner} alt="Students working together in a library" className="hero-image" />
                    <div className="hero-text">
                        <h1>All University info for <br />
                            Students in Just <br />
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
                    <a href="#all-news" className="all-news-link">All News</a>
                </div>
                <div className="news-cards-container">
                    {newsData.map((news, index) => (
                        <div key={index} className="news-card">
                            <img src={news.image} alt={news.title} className="news-card-image" />
                            <div className="news-card-content">
                                <h3 className="news-card-title">{news.title}</h3>
                                <p className="news-card-date">{news.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Health & Wellness Section */}
            <section className="health-section">
                <h2>Health & Wellness</h2>
                <div className="health-cards-container">
                    {healthData.map((item, index) => (
                        <div key={index} className="health-card">
                            <img src={item.image} alt={item.title} className="health-card-image" />
                            <div className="health-card-content">
                                <a href='#'><h3 className="health-card-title">{item.title}</h3></a>
                                <p className="health-card-description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Transit & Transportation Section */}
            <section className="transit-section">
                <h2>Transit & Transportation</h2>
                <div className="transit-cards-container">
                    {transitData.map((item, index) => (
                        <div key={index} className="transit-card">
                            <img src={item.image} alt={item.title} className="transit-card-image" />
                            <div className="transit-card-content">
                                <a href={item.link}><h3 className="transit-card-title">{item.title}</h3></a>
                                <p className="transit-card-description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Printing, Library & Research Section */}
            <section className="library-section">
                <h2>Printing, Library & Research</h2>
                <div className="library-cards-container">
                    {libraryData.map((item, index) => (
                        <div key={index} className="library-card">
                            <img src={item.image} alt={item.title} className="library-card-image" />
                            <div className="library-card-content">
                                <a href='#'><h3 className="library-card-title">{item.title}</h3></a>
                                <p className="library-card-description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Student Hub Services Section */}
            <section className="student-hub-section">
                <h2>Student Hub Services</h2>
                <div className="student-hub-cards-container">
                    {studentHubData.map((item, index) => (
                        <div key={index} className="student-hub-card">
                            <img src={item.image} alt={item.title} className="student-hub-card-image" />
                            <div className="student-hub-card-content">
                                <a href='#'><h3 className="student-hub-card-title">{item.title}</h3></a>
                                <p className="student-hub-card-description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <Footer/>
            </section>
        </div>
    );
}

export default Landing;
