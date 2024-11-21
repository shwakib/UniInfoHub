import React, { useState } from 'react';
import Navbar from '../../header/navbar';
import Footer from '../../footer/footer';
import studyspace from '../../../assets/image/studyspace.png';
import '../../../css/gssprovider.css';
// import '../../../css/landing.css';
import HealthServices from '../../../assets/image/HealthServices.png';
// Replace the path below with the actual path of the new clinic image
import activationimg from '../../../assets/image/activationimg.png';
import wellness from '../../../assets/image/wellness.png';
import HealthWellness from '../../../helper/Health&Wellness';
import Libraryservices from '../../../helper/Libraryservices';

function BookRoom() {
    const [openQuestion, setOpenQuestion] = useState(null);

    // Function to toggle a specific question
    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    return (
        <>
            <Navbar />

            {/* Banner Section */}
            <section className="banner-section">
                <div className="banner-image-container">
                    <img src={studyspace} alt="Students working together in a library" className="banner-image" />

                </div>
            </section>

            {/* Main Content Section */}
            <div className="main-content">

                {/* Student Health Services Section */}
                <section className="health-services">
                    <h2>Book Room</h2>
                    <p>Whether you're looking for a quiet spot to study or a space to gather with classmates and friends, the Library has a variety of spaces to meet your needs.</p>

                    <div className="health-info">
                        <h3>Types of rooms</h3>
                        <p>Personal study rooms are bookable by individuals for personal use only. The University Health and Safety Department zones these rooms for single occupancy. 
Use of alcohol, drugs, cigarettes, vape pens, and other smoking devices is not permitted at any time within the library. Possession or use of any of these items in the library may result in the loss of library access
Booking.</p>
                        <p>Available rooms are of different sizes based on individual needs.</p>

                        
                        <h3>Access and terms of use</h3>
                        <p>
                        Access to group study rooms no longer requires a key. When your booking begins, go to your room. If there are any issues, please visit the Information Desk.<br/>
                        Checking in and out will release the room for booking by other users in case you are done early. <br/>
                        Please cooperate with other users by leaving the room clean and in a timely fashion at the end of your booking.<br/>
                        Markers, chalk, and other peripherals can still be signed out at the Information Desk <br/>
                        As noise carries between these rooms and through the floor, please try to keep your voices down. <br/>
                        Please cooperate with the library staff. We are working to ensure a safe environment for everyone on campus.<br/>
                        Eating meals is not allowed.
Lidded drinks are permitted.<br/>
Use of alcohol, drugs, cigarettes, vape pens, and other smoking devices is not permitted at any time within the library. Possession or use of any of these items in the library may result in the loss of library access. <br/>
                        </p>
                        <p>
                            This means that until the opt-in, opt out and add/drop deadlines have passed, no full-time graduate student will be activated for Green Shield during this period, until GSS obtains a master list from the Registrar’s office and Green Shield (for the opt-out list) before being able to activate any graduate students.
                        </p>
                    </div>
                </section>

                {/* Urgent Medical Concern Message Section */}
                <section className="urgent-message">
                    <p>
                    Don't leave valuables like laptops, phones, or wallets unattended in study rooms or the building. Theft can happen, so keep your belongings with you. Report suspicious activity to the Information Desk in person or by phone (x3200), the Special Constable Service, or the Safe Lancer app.
                    </p>
                </section>

                {/* Emergancy Assistance Section */}
                <section className="our-clinic">
                    <div className="clinic-content">
                        <div className="clinic-text">
                            <h2>Wellness Rooms</h2>
                            <p>
                                Once you are activated for the Green Shield benefits plan through the GSS, you will receive an email with instructions. Then, follow these steps:
                            </p>
                            <p>
                            Students are welcome to use the wellness rooms as flexible spaces to de-stress and unwind during the library’s regular hours. Rooms are available on a first-come, first-served basis with no prior booking required. Locations: 2169 (2nd floor main), 3169 (3rd floor main), and 307 (3rd floor Leddy West).
                            </p>
                            
                            <a href="link-to-appointment-booking" className="appointment-link">Book a Room</a>
                        </div>
                        <div className="clinic-image-container">
                            <img src={wellness} alt="Nurse wearing mask and safety goggles" className="clinic-image" />
                        </div>
                    </div>
                </section>

                {/* Important Updates Section */}
                <section className="health-services">
                    <div className="health-info">
                        
                    </div>
                </section>

                <section className="printing-info">

                    <h1>
                        Printing
                    </h1>

                    <p>Print documents from any desktop computer in the library, in black & white or in colour. </p>

                    <div className="faq-item">
                        <h4 onClick={() => toggleQuestion(1)}>
                            Q. 1: What is Printing Cost?
                            <span className={`arrow ${openQuestion === 1 ? 'open' : ''}`}>▼</span>
                        </h4>
                        {openQuestion === 1 && (
                            <div className="faq-answer">
                                <h3>Cost</h3>
                                <ul>
                                    <li>Black and white printing: $0.10 per page.</li>
                                    <li>Colour printing: $0.26 per page.</li>
                                    <li>Printing is double-sided by default on black and white printers.</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="faq-item">
                        <h4 onClick={() => toggleQuestion(2)}>
                            Q. 2: How to Print
                            <span className={`arrow ${openQuestion === 2 ? 'open' : ''}`}>▼</span>
                        </h4>
                        {openQuestion === 2 && (
                            <div className="faq-answer">
                                <h3>Workstation Printing</h3>
                                <ul>
                                    <li>Find an open computer workstation on the first floor of the Main Building.</li>
                                    <li>Locate the computer Station Print ID as labeled on the desktop wallpaper once you've logged onto the machine.</li>
                                    <li>Have your files ready on a USB flash drive or access them online from Microsoft Office, Google Drive or another cloud storage service.</li>
                                    <li>Print your file(s) to one of the printers:
                                        <ul>
                                            <li><strong>Leddy Main - Monochrome</strong> (black and white)</li>
                                            <li><strong>Leddy Main - Colour</strong></li>
                                        </ul>
                                    </li>
                                    <li>Go to the print station located just east of the elevators on the 1st floor.</li>
                                    <li>At the monitors, find and select the Station Print ID as noted. Select the file(s) you want to print, and follow the on-screen instructions to print.</li>
                                    <li>Swipe your print card through the card reader with the stripe toward the light, to deduct the cost of the print from your account. A notification message will appear with the location of the printer where your print job was sent.</li>
                                    <li>When you're finished printing, make sure you sign-out of all accounts and remember to take your USB drive. This will ensure that no one will be able to access your files or accounts.</li>
                                </ul>

                                <h3>Cloud Printing (Monochrome Only)</h3>
                                <ul>
                                    <li>Connect to the <a href="link-to-cloud-printing-website">Cloud Printing Website</a>.</li>
                                    <li>Select the "Main Campus" as the printer location.</li>
                                    <li>Select the "Leddy Library" printer.</li>
                                    <li>Click "Upload A Document".</li>
                                    <li>Enter a Print ID for Job (This ID is what shows up on the print station).</li>
                                    <li>Upload your document and click submit.</li>
                                    <li>Go to the print station located just east of the elevators on the 1st floor.</li>
                                    <li>At the monitors, find and select the Station Print ID as noted. Select the file(s) you want to print, and follow the on-screen instructions to print.</li>
                                    <li>Swipe your print card through the card reader with the stripe toward the light, to deduct the cost of the print from your account. A notification message will appear with the location of the printer where your print job was sent.</li>
                                    <li>When you're finished printing, make sure you sign-out of all accounts and remember to take your USB drive. This will ensure that no one will be able to access your files or accounts.</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="faq-item">
                        <h4 onClick={() => toggleQuestion(3)}>
                            Q. 3: What are suggested tips and trouble shooting?
                            <span className={`arrow ${openQuestion === 3 ? 'open' : ''}`}>▼</span>
                        </h4>
                        {openQuestion === 3 && (
                            <div className="faq-answer">
                                <ul>
                                    <li>Wrong characters in printout: try printing to PDF and then printing the resulting PDF file.</li>
                                    <li>Test your printouts by printing 1 or 2 pages before printing large documents.</li>
                                    <li>When you're finished printing, make sure you sign-out of all accounts and remember to take your USB drive. This will ensure that no one will be able to access your files or accounts.</li>
                                    <li>If you do not have a UWin student card, you will need to contact the UWin Card Office.</li>
                                    <li>If your print job does not go through and your account has been charged, please see the IT Help Desk staff for support.</li>
                                </ul>

                            </div>
                        )}
                    </div>
                </section>

                {/* Our Clinic Section */}
                <section className="our-clinic">
                    <div className="clinic-content">
                        <div className="clinic-text">
                            <h2>Information Desk</h2>
                            <p>
                            The Information Desk is your first stop for borrowing & circulation, research support, and information about the library and pointing you in the right direction. We deal with all questions related to borrowing library materials, course resources and reserves and library spaces.

Someone is always at the Information Desk when the Library is open, and is the best point of contact after hours and on weekends.

Also located at the Information Desk are the Research Help Desk for research & reference services, and the Computer Help Desk.
                            </p>
                           
                            <a href="link-to-appointment-booking" className="appointment-link">Book a Room</a>
                        </div>
                        <div className="clinic-image-container">
                            <img src={activationimg} alt="Nurse wearing mask and safety goggles" className="clinic-image" />
                        </div>
                    </div>
                </section>


            </div>

            {/* Printing, Library & Research Section */}
            <Libraryservices />


            <Footer />
        </>
    );
}

export default BookRoom;
