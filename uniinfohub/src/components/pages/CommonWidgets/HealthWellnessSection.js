// HealthWellnessSection.js
import React from 'react';
import PropTypes from 'prop-types';
import '../../../css/healthWellnessSection.css'; // Make sure you have the required CSS

const HealthWellnessSection = ({ healthData }) => (
    <section className="health-section">
        <h2>Health & Wellness</h2>
        <div className="health-cards-container">
            {healthData.map((item, index) => (
                <div key={index} className="health-card">
                    <img src={item.image} alt={item.title} className="health-card-image" />
                    <div className="health-card-content">
                        <a href="#"><h3 className="health-card-title">{item.title}</h3></a>
                        <p className="health-card-description">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

HealthWellnessSection.propTypes = {
    healthData: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        })
    ).isRequired
};

export default HealthWellnessSection;
