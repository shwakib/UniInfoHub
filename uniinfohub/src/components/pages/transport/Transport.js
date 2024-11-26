// // import React from "react";
// import Bustransport from '../../../assets/image/Bustransport.jpg';
// import Bustransport2 from '../../../assets/image/Bustransport2.jpg';
// import BusPass from '../../../assets/image/BusPass.png';
// import BusSchedule from '../../../assets/image/BusSchedule.png';
// import PrivateTransport from '../../../assets/image/PrivateTransport.png';
// import '../../../css/transport.css';
// // import '../../../css/landing.css';
// import Footer from '../../footer/footer';
// import Navbar from '../../header/navbar';
// import React, { useState } from 'react';




// const transitData = [
//     {
//         image: BusPass,
//         title: 'Getting a Bus Pass',
//         description: 'Information on how to get access to transit passes and bus services.'
//     },
//     {
//         image: BusSchedule,
//         title: 'Bus Schedules',
//         description: 'Details on bus schedules to navigate around the campus and city.'
//     },
//     {
//         image: PrivateTransport,
//         title: 'Private Transportation',
//         description: 'Information on private transportation options such as bike rentals and car services.'
//     }
// ];

// function Transport() {
//     const [openQuestion, setOpenQuestion] = useState(null);

//     // Function to toggle a specific question
//     const toggleQuestion = (index) => {
//         setOpenQuestion(openQuestion === index ? null : index);
//     };


//     return (
//         <div>
//             <Navbar />

//             {/* Banner Section */}
//             <section className="transport-banner">
//                 <img src={Bustransport} alt="Bus at Windsor" className="banner-image" />

//             </section>

//             {/* Information Section */}
//             <section className="bus-info-section">

//                 <div className="bus-info-content">
//                     <div className ="bus-pass-hearder">
//                         <h1>Bus Pass Update</h1>
//                         <p>All information regarding bus passes at Windsor</p>
//                     </div>
//                     <div className= " bus-pas-info">
//                         <h3>Information</h3>
//                         <p> The UWSA, OPUS, and GSS negotiated a universal student bus pass (U-Pass) for UWSA, OPUS, and GSS students. To use U-Pass, students will need to tap their U-Pass cards on the readers upon boarding the bus. </p>
//                         <p> The U-Pass allows members to have unlimited rides on the regular Transit Windsor City service during the fall/winter 2024/2025 semesters.</p>
//                     </div>
//                     <div className="driving-today-section">
//                         <h3>Driving Today for a Better Tomorrow</h3>
//                         <p>Transit Windsor operates the public transit for the municipality of the City of Windsor. You can view the route maps and schedules for the service are map at the Transit Windsor website at 
//                         {/* You can also view the terms and conditions and other useful information on the site. */} <a 
//                                 href="https://windsor.mytransitride.com/" 
//                                 target="_blank" 
//                                 rel="noopener noreferrer"
//                             >
//                                  https://windsor.mytransitride.com/
//                             </a>.
//                         </p>
//                     </div>


//                      {/* Pickup Information Box */}
//                      <div class="container">
//                         <div className="pickup-info-box">
//                             <h4>Bus Pass Pick-Up Hours of Operation</h4>
//                             <p><b>Outside UWSA Office</b></p>
//                             <p>Monday to Thursday - 9:30am to 4:00pm</p><br></br>
//                             <p>Friday - 9:30am to 3:30pm</p>
//                         </div>

//                         <img src={Bustransport2} alt="Another bus image" className="bus-image" />
//                     </div>

//                     <section className="bus-pass-details-section">
//             {/* Pick Up Your Pass Section */}
//             <div className="pick-up-pass-section">
//                 <h3>PICK UP YOUR PASS!</h3>
//                       {/* <section className="transport-banner">
//                         <img src={Bustransport} alt="Bus at Windsor" className="banner-image" />

//                     </section> */}


//                 <div className="faq-item">
//                     <h4 onClick={() => toggleQuestion(1)}>
//                         Q. 1: When can I pick up my bus pass?
//                         <span className={`arrow ${openQuestion === 1 ? 'open' : ''}`}>▼</span>
//                     </h4>
//                     {openQuestion === 1 && (
//                         <div className="faq-answer">
//                             <p>All students can pick up their UPass at the UWSA Offices at the following times:</p>
//                             <p>Fall Bus Pass pick-up will begin September 4th, 2024 to September 27th in the Alumni Auditorium.</p>
//                             <p>Afterward, pick-up is available at the UWSA office from Monday to Friday: 9:30am – 4:00pm.</p>
//                         </div>
//                     )}
//                 </div>

//                 <div className="faq-item">
//                     <h4 onClick={() => toggleQuestion(2)}>
//                         Q. 2: What to bring
//                         <span className={`arrow ${openQuestion === 2 ? 'open' : ''}`}>▼</span>
//                     </h4>
//                     {openQuestion === 2 && (
//                         <div className="faq-answer">
//                             <p>Please bring your student ID card to verify your identity.</p>
//                         </div>
//                     )}
//                 </div>

//                 <div className="faq-item">
//                     <h4 onClick={() => toggleQuestion(3)}>
//                         Q. 3: I am unable to make it for the pick-up times listed. Can I send someone else to pick it up for me?
//                         <span className={`arrow ${openQuestion === 3 ? 'open' : ''}`}>▼</span>
//                     </h4>
//                     {openQuestion === 3 && (
//                         <div className="faq-answer">
//                             <p>No, only the student receiving the bus pass may pick it up. The student must be present to verify their identification.</p>
//                         </div>
//                     )}
//                 </div>

//                 <div className="faq-item">
//                     <h4 onClick={() => toggleQuestion(4)}>
//                         Q. 4: When does my fall/winter bus pass expire?
//                         <span className={`arrow ${openQuestion === 4 ? 'open' : ''}`}>▼</span>
//                     </h4>
//                     {openQuestion === 4 && (
//                         <div className="faq-answer">
//                             <p>Your fall/winter bus pass will expire at the end of the winter semester in April 2025.</p>
//                         </div>
//                     )}
//                 </div>

//                 {/* Important Note */}
//                 <div className="important-note">
//                     <p>
//                         <strong>*No one besides the student receiving the bus pass may pick up the pass. The student must be present to verify their identification.</strong>
//                     </p>
//                 </div>
//             </div>

//             {/* Opt-Out Information Section */}
//             <div className="opt-out-section">
//                 <h3>OPT-OUT INFORMATION</h3>

//                 <div className="faq-item">
//                     <h4 onClick={() => toggleQuestion(5)}>
//                         Q. 1: How do I opt-out of the Fall bus pass?
//                         <span className={`arrow ${openQuestion === 5 ? 'open' : ''}`}>▼</span>
//                     </h4>
//                     {openQuestion === 5 && (
//                         <div className="faq-answer">
//                             <p>Fall Opt-out is from September 1st to September 30th. The opt-out button will be available on September 1st.</p>
//                         </div>
//                     )}
//                 </div>

//                 <div className="faq-item">
//                     <h4 onClick={() => toggleQuestion(6)}>
//                         Q. 2: Opt-out Criteria
//                         <span className={`arrow ${openQuestion === 6 ? 'open' : ''}`}>▼</span>
//                     </h4>
//                     {openQuestion === 6 && (
//                         <div className="faq-answer">
//                             <p>You must meet certain eligibility criteria to opt out of the bus pass program. 
//                             <ol>
//                         <li>
//                             I currently reside outside the Windsor Transit service area and will reside in the eligible postal code area for the duration of the Fall 2024 semester 
//                             (N0P, N7L, N7M, N0L, N0R, N9V, N8H, N8L, N8M, N8N, N9K, N9Y, N9J).
//                             <p>Please provide photo ID with your address and one additional piece of proof with your address (bank statement, bill, paystub, shipping label).</p>
//                         </li>
//                         <li>
//                             I am the Registered Permit Holder of a parking pass purchased at the University of Windsor.
//                             <p>Please provide photo ID and a photo of the parking pass.</p>
//                         </li>
//                         <li>
//                             I am participating in a student exchange program outside the Windsor Transit service area during Winter 2024 semester.
//                         </li>
//                         <li>
//                             My classes are all online for the Winter 2024 semester.
//                         </li>
//                     </ol>
//                             </p>
//                         </div>
//                     )}
//                 </div>

//                 <div className="faq-item">
//                     <h4 onClick={() => toggleQuestion(7)}>
//                         Q. 3: Am I eligible for a fall bus pass even though I am not enrolled in fall courses?
//                         <span className={`arrow ${openQuestion === 7 ? 'open' : ''}`}>▼</span>
//                     </h4>
//                     {openQuestion === 7 && (
//                         <div className="faq-answer">
//                             <p>Students not enrolled in fall courses are generally not eligible for the bus pass. Please contact the office for specific details regarding eligibility.</p>
//                         </div>
//                     )}
//                 </div>
//             </div>
//             <div>
//                 *Note: Students can use their <strong>student id</strong> to ride on bus if they are yet to get the bus pass. 
//             </div>
//             <div>
//                 If you want to have a bus pass outside uwindsor,
//                                 <a href="/refillbuspass"
//                                 target="_blank" 
//                                 rel="noopener noreferrer"
//                             >
//                                  click here for more information
//                             </a>.

//             </div>

//               {/* Contact Information Section */}
//               <div className="contact-info-section">
//                 <div className="contact-info">
//                     <div className="contact-column">
//                         <h4>Main Office</h4>
//                         <p>Room 209,</p>
//                         <p>2nd Floor</p>
//                         <p>CAW Student Centre</p>
//                         <p>401 Sunset Ave.</p>
//                     </div>
//                     <div className="contact-column">
//                         <h4>Contact</h4>
//                         <p>Windsor, ON, N8B 3P4</p>
//                         <p>PHONE: (519) 971-3600</p>
//                         <p>FAX: (519) 971-3654</p>
//                         <p>EMAIL: <a href="mailto:uwsa@uwindsor.ca">uwsa@uwindsor.ca</a></p>
//                     </div>
//                     <div className="contact-column">
//                         <h4>Hours of Operation</h4>
//                         <p>Mon - Thurs: 9:30am - 4:30pm</p>
//                         <p>Friday: 10am - 3:30pm</p>
//                         <p>Sat & Sun: Closed</p>
//                     </div>
//                 </div>
//             </div>

//         </section>
//                 </div>


//             </section>
//                 {/* Transit & Transportation Section */}
//                 <section className="transit-section">
//                 <h2>Transit & Transportation</h2>
//                 <div className="transit-cards-container">
//                     {transitData.map((item, index) => (
//                         <div key={index} className="transit-card">
//                             <img src={item.image} alt={item.title} className="transit-card-image" />
//                             <div className="transit-card-content">
//                                 <h3 className="transit-card-title">{item.title}</h3>
//                                 <p className="transit-card-description">{item.description}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             <Footer />
//         </div>
//     );
//  }

// export default Transport;

import React, { useState } from "react";
import Bustransport from '../../../assets/image/Bustransport.jpg';
import Bustransport2 from '../../../assets/image/Bustransport2.jpg';
import BusPass from '../../../assets/image/BusPass.png';
import BusSchedule from '../../../assets/image/BusSchedule.png';
import PrivateTransport from '../../../assets/image/PrivateTransport.png';
import '../../../css/transport.css';
import Footer from '../../footer/footer';
import Navbar from '../../header/navbar';
import Transit from '../../../helper/Transit.js';

function Transport() {
    const [openQuestion, setOpenQuestion] = useState(null);

    // Function to toggle a specific question
    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    return (
        <div>
            <Navbar />

            {/* Banner Section */}
            <section className="transport-banner">
                <img src={Bustransport} alt="Bus at Windsor" className="transport-banner-image" />
            </section>

            {/* Information Section */}
            <section className="transport-bus-info-section">
                <div className="transport-bus-info-content">
                    <div className="transport-bus-pass-header">
                        <h1>Bus Pass Update</h1>
                        <p>All information regarding bus passes at Windsor</p>
                    </div>
                    <div className="transport-bus-pass-info">
                        <h3>Information</h3>
                        <p>The UWSA, OPUS, and GSS negotiated a universal student bus pass (U-Pass) for UWSA, OPUS, and GSS students. To use U-Pass, students will need to tap their U-Pass cards on the readers upon boarding the bus.</p>
                        <p>The U-Pass allows members to have unlimited rides on the regular Transit Windsor City service during the fall/winter 2024/2025 semesters.</p>
                    </div>
                    <div className="transport-driving-today-section">
                        <h3>Driving Today for a Better Tomorrow</h3>
                        <p>Transit Windsor operates the public transit for the municipality of the City of Windsor. You can view the route maps and schedules for the service on the Transit Windsor website at
                            <a href="https://windsor.mytransitride.com/" target="_blank" rel="noopener noreferrer">
                                https://windsor.mytransitride.com/
                            </a>.
                        </p>
                    </div>

                    {/* Pickup Information Box */}
                    <div className="transport-container">
                        <div className="transport-pickup-info-box">
                            <h4>Bus Pass Pick-Up Hours of Operation</h4>
                            <p><b>Outside UWSA Office</b></p>
                            <p>Monday to Thursday - 9:30am to 4:00pm</p><br />
                            <p>Friday - 9:30am to 3:30pm</p>
                        </div>
                        <img src={Bustransport2} alt="Another bus image" className="transport-bus-image" />
                    </div>

                    <section className="transport-bus-pass-details-section">
                        {/* Pick Up Your Pass Section */}
                        <div className="transport-pick-up-pass-section">
                            <h3>PICK UP YOUR PASS!</h3>
                            <div className="transport-faq-item">
                                <h4 onClick={() => toggleQuestion(1)}>
                                    Q. 1: When can I pick up my bus pass?
                                    <span className={`transport-arrow ${openQuestion === 1 ? 'open' : ''}`}>▼</span>
                                </h4>
                                {openQuestion === 1 && (
                                    <div className="transport-faq-answer">
                                        <p>All students can pick up their UPass at the UWSA Offices at the following times:</p>
                                        <p>Fall Bus Pass pick-up will begin September 4th, 2024 to September 27th in the Alumni Auditorium.</p>
                                        <p>Afterward, pick-up is available at the UWSA office from Monday to Friday: 9:30am – 4:00pm.</p>
                                    </div>
                                )}
                            </div>

                            <div className="transport-faq-item">
                                <h4 onClick={() => toggleQuestion(2)}>
                                    Q. 2: What to bring
                                    <span className={`transport-arrow ${openQuestion === 2 ? 'open' : ''}`}>▼</span>
                                </h4>
                                {openQuestion === 2 && (
                                    <div className="transport-faq-answer">
                                        <p>Please bring your student ID card to verify your identity.</p>
                                    </div>
                                )}
                            </div>

                            <div className="transport-faq-item">
                                <h4 onClick={() => toggleQuestion(3)}>
                                    Q. 3: I am unable to make it for the pick-up times listed. Can I send someone else to pick it up for me?
                                    <span className={`transport-arrow ${openQuestion === 3 ? 'open' : ''}`}>▼</span>
                                </h4>
                                {openQuestion === 3 && (
                                    <div className="transport-faq-answer">
                                        <p>No, only the student receiving the bus pass may pick it up. The student must be present to verify their identification.</p>
                                    </div>
                                )}
                            </div>

                            <div className="transport-faq-item">
                                <h4 onClick={() => toggleQuestion(4)}>
                                    Q. 4: When does my fall/winter bus pass expire?
                                    <span className={`transport-arrow ${openQuestion === 4 ? 'open' : ''}`}>▼</span>
                                </h4>
                                {openQuestion === 4 && (
                                    <div className="transport-faq-answer">
                                        <p>Your fall/winter bus pass will expire at the end of the winter semester in April 2025.</p>
                                    </div>
                                )}
                            </div>

                            {/* Important Note */}
                            <div className="transport-important-note">
                                <p>
                                    <strong>*No one besides the student receiving the bus pass may pick up the pass. The student must be present to verify their identification.</strong>
                                </p>
                            </div>
                        </div>

                        {/* Opt-Out Information Section */}
                        <div className="transport-opt-out-section">
                            <h3>OPT-OUT INFORMATION</h3>

                            <div className="transport-faq-item">
                                <h4 onClick={() => toggleQuestion(5)}>
                                    Q. 1: How do I opt-out of the Fall bus pass?
                                    <span className={`transport-arrow ${openQuestion === 5 ? 'open' : ''}`}>▼</span>
                                </h4>
                                {openQuestion === 5 && (
                                    <div className="transport-faq-answer">
                                        <p>Fall Opt-out is from September 1st to September 30th. The opt-out button will be available on September 1st.</p>
                                    </div>
                                )}
                            </div>

                            <div className="transport-faq-item">
                                <h4 onClick={() => toggleQuestion(6)}>
                                    Q. 2: Opt-out Criteria
                                    <span className={`transport-arrow ${openQuestion === 6 ? 'open' : ''}`}>▼</span>
                                </h4>
                                {openQuestion === 6 && (
                                    <div className="transport-faq-answer">
                                        <p>You must meet certain eligibility criteria to opt out of the bus pass program.</p>
                                        <ol>
                                            <li>I currently reside outside the Windsor Transit service area.</li>
                                            <li>I am the Registered Permit Holder of a parking pass purchased at the University of Windsor.</li>
                                            <li>I am participating in a student exchange program outside the Windsor Transit service area.</li>
                                            <li>My classes are all online for the Winter 2024 semester.</li>
                                        </ol>
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* NEW CHANGES */}

                        <div>
                            *Note: Students can use their <strong>student id</strong> to ride on bus if they are yet to get the bus pass.
                        </div>
                        <div> If you want to have a bus pass outside uwindsor,  <a href="/refillbuspass " target="_blank" rel="noopener noreferrer" >click here for more information </a>

                        </div>




                        {/* Contact Information Section */}
                        {/* <div className="contact-info-section">
                            <div className="contact-info">
                                <div className="contact-column">
                                    <h4>Main Office</h4>
                                    <p>Room 209,</p>
                                    <p>2nd Floor</p>
                                    <p>CAW Student Centre</p>
                                    <p>401 Sunset Ave.</p>
                                </div>
                                <div className="contact-column">
                                    <h4>Contact</h4>
                                    <p>Windsor, ON, N8B 3P4</p>
                                    <p>PHONE: (519) 971-3600</p>
                                    <p>FAX: (519) 971-3654</p>
                                    <p>EMAIL: <a href="mailto:uwsa@uwindsor.ca">uwsa@uwindsor.ca</a></p>
                                </div>
                                <div className="contact-column">
                                    <h4>Hours of Operation</h4>
                                    <p>Mon - Thurs: 9:30am - 4:30pm</p>
                                    <p>Friday: 10am - 3:30pm</p>
                                    <p>Sat & Sun: Closed</p>
                                </div>
                            </div>
                        </div> */}





                        {/* END OF NEW CHANGES */}

                    </section>
                </div>
            </section>

            <Transit />

            <Footer />
        </div>
    );
}

export default Transport;
