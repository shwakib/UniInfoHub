import React from 'react';
import Navbar from '../../header/navbar';
import Banner from '../../../assets/image/Banner.png';
import '../../../css/landing.css';

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
        </div>
    );
}

export default Landing;
