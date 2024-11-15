import React from 'react';
import CAWMarketplace from '../assets/image/CAWMarketplace.png';
import SINClinic from '../assets/image/SINClinic.png';
import DrivingLicense from '../assets/image/DrivingLicense.png';
import DormitoryAccommodation from '../assets/image/DormitoryAccommodation.png';
import RentingCanada from '../assets/image/RentingCanada.png';

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

function StudentHub() {
    return (
        <div>
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
        </div>
    );
}

export default StudentHub;