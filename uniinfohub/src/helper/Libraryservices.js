import React from 'react';
import PrintService from '../assets/image/PrintService.png';
import LibraryAmenities from '../assets/image/LibraryAmenities.png';
import ResearchPaper from '../assets/image/ResearchPaper.png';
import LoadUWIN from '../assets/image/LoadUWIN.png';
import Library from '../assets/image/Library.png';

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

function Libraryservices() {
    return (
        <div>
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
        </div>
    );
}

export default Libraryservices;