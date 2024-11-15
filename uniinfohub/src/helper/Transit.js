import React from 'react';
import BusPass from '../assets/image/BusPass.png';
import BusSchedule from '../assets/image/BusSchedule.png';
import PrivateTransport from '../assets/image/PrivateTransport.png';

const transitData = [
    {
        link: '/transport',
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

function Transit() {
    return (
        <div>
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
        </div>
    );
}

export default Transit;