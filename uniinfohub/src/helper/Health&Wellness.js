import React from 'react';
import '../css/landing.css';
import CollegeDoctors from '../assets/image/CollegeDoctors.png';
import HealthServices from '../assets/image/HealthServices.png';
import SexualHealth from '../assets/image/SexualHealth.png';
import Vaccinations from '../assets/image/Vaccinations.png';
import MentalHealth from '../assets/image/MentalHealth.png';
import HealthClinic from '../assets/image/HealthClinic.png';

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

function HealthWellness() {
    return (
        <div>
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
        </div>
    );
}

export default HealthWellness;