import React from 'react';
import Navbar from '../../header/navbar';
import Footer from '../../footer/footer';
import Banner from '../../../assets/image/StopForTransit WIndsor.webp';
import '../../../css/checkstop.css';

function CheckStop() {
    return (
        <div>
            <Navbar/>
            {/* Banner Section */}
            <section className="stop-hero-section">
                <div className="stop-hero-image-container">
                    <img src={Banner} alt="Students working together in a library" className="stop-hero-image" />
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default CheckStop