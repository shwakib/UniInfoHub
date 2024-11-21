//import React from 'react';
import React, { useState } from 'react';
import Navbar from '../../header/navbar';
import Footer from '../../footer/footer';
//import bus_pass from '../../../assets/image/bus_pass.png'; 
import '../../../css/accommodation.css'; 


function ResidenceInfo() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

//function ResidenceInfo() {
    return (
        <div>
            <Navbar />



        <div className="container">
            <header>
                <h1>Residence Halls Information</h1>
                <p>Explore details about Residence Halls, Room Assignments, and Facilities Services below.</p>
            </header>
            
            <nav className="on-this-page">
                <h2>On This Page</h2>
                <ul>
                    <li><a href="#residence-halls">Residence Halls</a></li>
                    <li><a href="#room-assignments">Room Assignments</a></li>
                    <li><a href="#facilities-services">Facilities Services</a></li>
                </ul>
            </nav>

            <section id="residence-halls" className="residence-halls">
                <h2>Residence Halls</h2>
                <p>The University of Windsor is a medium-sized campus and is located on Windsor’s west side and downtown. It offers you the chance to explore one of Canada’s most ethnically diverse cities, and with a variety of restaurants, friendly shops, and ample cultural offerings, there are many experiences outside of the classroom.</p>
                <p>There are 3 residence buildings, each with its unique characteristics. Our communities range from 150 to 350 students and are conveniently located throughout the campus. You will enjoy short walks to class, food outlets, recreational facilities, the library, the Bookstore, the student centre, and banks.</p>
                <div className="halls-list">
                    <div className="hall">
                        <img src="../../assets/alumni_hall.jpg" alt="Alumni Hall" />
                        <h3>Alumni Hall</h3>
                        <p>Alumni Hall is home to Beyond & First Year students (of their first undergraduate program) and offers 2-bedroom suites.</p>
                        <a href="https://www.youtube.com/watch?v=cJCjgDxowGk">Take a virtual tour of ALUMNI</a>
                    </div>
                    <div className="hall">
                        <img src="../../assets/cartier_hall.jpg" alt="Cartier Hall" />
                        <h3>Cartier Hall</h3>
                        <p>Cartier Hall is home to First Year students (entering into the first year of their first undergraduate program).</p>
                        <a href="https://www.youtube.com/watch?v=nOWEj7Brr9o">Take a virtual tour of CARTIER</a>
                    </div>
                    <div className="hall">
                        <img src="../../assets/laurier_hall.jpg" alt="Laurier Hall" />
                        <h3>Laurier Hall</h3>
                        <p>Laurier Hall is home to Beyond first-year students living in a single room; or First-year students (entering into their first year of their first undergraduate program) in a double room.</p>
                        <a href="https://www.youtube.com/watch?v=lTBriYUmlQI">Take a virtual tour of LAURIER</a>
                    </div>
                </div>
            </section>

            <section id="room-assignments" className="room-assignments">
                <h2>Room Assignments</h2>
                <p>Assignments are based on your 1st, 2nd, and 3rd preferences on your application. We assign based on 1st preference, but this cannot be guaranteed due to availability.</p>
                <img src="../../assets/room_assignments.jpg" alt="Room Assignment" />
                <p>First-year students are typically assigned to double rooms, but a limited number of single rooms are available. These are assigned on a first-come, first-served basis. First-year students can expect to receive an email containing their room assignment by the end of July. Beyond first-year, students are assigned to single rooms.</p>
                <h3>Room Switch Process</h3>
                <ul>
                    <li>Residence Services has the right to relocate students if required.</li>
                    <li>A student can request a room switch and can be re-assigned if approved. They must contact their Residence Life Coordinator who will review the request and make a recommendation to the Admissions Secretary.</li>
                    <li>If approved, a processing fee of $100 is applied to the student's account.</li>
                    <li>If a room change results in a higher fee, the student is responsible for the additional costs. This will be prorated from the time of room change to the end of the contract.</li>
                </ul>
                <h3>Moving to a Single Room</h3>
                <ul>
                    <li>There are a limited number of single rooms available across the residence system.</li>
                    <li>In most cases, these rooms are fully occupied so if students are interested in a single room, they can request their name be placed on a wait list in the Residence Office.</li>
                    <li>However, there is no guarantee that single rooms will become available during the year.</li>
                    <li>Assignments will depend on various circumstances and are at the sole discretion of the Residence Office.</li>
                </ul>
            </section>

            {/* <section id="facilities-services" className="facilities-services">
                <h2>Facilities Services</h2>
                <div className="accordion">
                    <div className="accordion-item">
                        <button className="accordion-button">Air Conditioning</button>
                        <div className="accordion-content">
                            <p>All of the cooling systems in Residences rely on a process called "convection" where cold water circulates through a pipe inside a metal cover and the cooled air surrounding the pipe rises into the room. The water in each residence building is cooled with a chilled water system which is produced at the Energy Conservation Centre (ECC) and distributed through underground pipes to all the major buildings.</p>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <button className="accordion-button">Clothing Donation Bins</button>
                        <div className="accordion-content">Content about clothing donation bins.</div>
                    </div>
                    <div className="accordion-item">
                        <button className="accordion-button">Garbage and Recycling</button>
                        <div className="accordion-content">Content about garbage and recycling.</div>
                    </div>
                    <div className="accordion-item">
                        <button className="accordion-button">Heating</button>
                        <div className="accordion-content">Content about heating.</div>
                    </div>
                    <div className="accordion-item">
                        <button className="accordion-button">Kitchen and Microwave Rooms</button>
                        <div className="accordion-content">Content about kitchen and microwave rooms.</div>
                    </div>
                    <div className="accordion-item">
                        <button className="accordion-button">Light Bulb Replacement</button>
                        <div className="accordion-content">Content about light bulb replacement.</div>
                    </div>
                    <div className="accordion-item">
                        <button className="accordion-button">Locking Doors</button>
                        <div className="accordion-content">Content about locking doors.</div>
                    </div>
                    <div className="accordion-item">
                        <button className="accordion-button">Pest Control</button>
                        <div className="accordion-content">Content about pest control.</div>
                    </div>
                </div>
            </section> */}

<section id="facilities-services" className="facilities-services">
                <h2>Facilities Services</h2>
                <div className="accordion">
                    {['Air Conditioning', 'Clothing Donation Bins', 'Garbage and Recycling', 'Heating', 'Kitchen and Microwave Rooms', 'Light Bulb Replacement', 'Locking Doors', 'Pest Control'].map((title, index) => (
                        <div className="accordion-item" key={index}>
                            <button 
                                className={`accordion-button ${activeIndex === index ? 'active' : ''}`} 
                                onClick={() => toggleAccordion(index)}
                            >
                                {title}
                            </button>
                            <div className={`accordion-content ${activeIndex === index ? 'open' : ''}`}>
                                {title === 'Air Conditioning' && (
                                    <p>
                                        All of the cooling systems in Residences rely on a process called "convection" where cold water circulates through a pipe inside a metal cover and the cooled air surrounding the pipe rises into the room. The water in each residence building is cooled with a chilled water system which is produced at the Energy Conservation Centre (ECC) and distributed through underground pipes to all the major buildings.
                                    </p>
                                )}
                                {title === 'Clothing Donation Bins' && (
                                    <p>
                                        If you would like to give away old clothing, donation bins are located in the residence buildings.
                                    </p>
                                )}
                                {title === 'Garbage and Recycling' && (
                                    <p>
                                        Garbage bins are located on each floor and are regularly emptied. Glass and sharp objects should be placed beside the regular garbage, use caution. Blue and red boxes are provided for recycling of aluminum cans, fine paper, glass, and newspaper.
                                    </p>
                                )}
                                {title === 'Heating' && (
                                    <p>
                                        All of the heating systems in Residences rely on a process called "convection" where hot water circulates through a finned pipe inside a metal cover and the heated air surrounding the pipe rises into the room. The water in each residence building is heated with steam which is produced at the Energy Conservation Centre (ECC) and distributed through underground pipes to all the major buildings. It is important that the area around the heating unit is kept clear at all times. The system relies on natural convection and anything in the path of the air entering or leaving the convector can seriously reduce the heating capacity. Leaving the window open will cause pipes to freeze. Please ensure all windows are closed.
                                    </p>
                                )}
                                {title === 'Kitchen and Microwave Rooms' && (
                                    <p>
                                        Microwaves located in microwave rooms or in kitchens are for your use. You are responsible for cleaning microwaves and kitchens after each use. You will be charged for damage to the microwave from misuse or abuse. Kitchens/microwave rooms may be closed by Residence staff if they are not kept clean (for more details, refer to Damages Policy under Residence Community Standards).
                                    </p>
                                )}
                                {title === 'Light Bulb Replacement' && (
                                    <p>
                                        Ceiling lights and burned out light bulbs on desk lamps requiring bulb replacements should be reported by submitting a work order request online.
                                    </p>
                                )}
                                {title === 'Locking Doors' && (
                                    <p>
                                        All residence buildings have a tap card access security system on the front doors. You will use your student card to enter the building where you live. Once inside the building, your room key gives you access to your room with the exception of Alumni Hall. In Alumni Hall, use your student card to swipe into your suite and then use your key to enter your room, located inside the suite.
                                    </p>
                                )}
                                {title === 'Pest Control' && (
                                    <p>
                                        There is a Pest Control company that provides monthly service in the residence buildings. If you are concerned with pests in your room or on your floor, document your issue in the Pest Control binder found in the lobby of your building. You can also contact your Facilities Coordinator for assistance at: alumnifc@uwindsor.ca, cartierfc@uwindsor.ca, laurierfc@uwindsor.ca. Avoid pests by properly storing food in your fridge and by keeping your room clean of garbage.
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    


            <Footer />
        </div>
    );
}

export default ResidenceInfo;