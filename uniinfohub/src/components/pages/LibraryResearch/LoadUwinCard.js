import React, { useState } from 'react';
import Navbar from '../../header/navbar';
import Footer from '../../footer/footer';
import uwincard from '../../../assets/image/uwincard.png';
import '../../../css/gssprovider.css';
// import '../../../css/landing.css';
import HealthServices from '../../../assets/image/HealthServices.png';
// Replace the path below with the actual path of the new clinic image
import activationimg from '../../../assets/image/activationimg.png';
import getapp from '../../../assets/image/getapp.png';
import HealthWellness from '../../../helper/Health&Wellness';
import Libraryservices from '../../../helper/Libraryservices';

function LoadUwinCard() {
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
                    <img src={uwincard} alt="Students working together in a library" className="banner-image" />

                </div>
            </section>

            {/* Main Content Section */}
            <div className="main-content">

                {/* Student Health Services Section */}
                <section className="health-services">
                    <h2>Load UwinCard</h2>
                    <p>Through GET, you can add funds to your card, view your meal plan balance, access your transaction history, and mark your card as lost.</p>

                    <div className="health-info">
                        <h3>How do I install the GET app?</h3>
                        <p>The GET Mobile app is available for iOS and Android devices. You can download it from your respective app store on the device <br />
                        1. Download the GET Mobile app from Google Play (Android) or the App Store (Apple) <br />
2. Tap on Install <br />
3. Search and select the University of Windsor</p>
                        <p>Users can select to use the desktop version of GET instead of downloading the app</p>

                       

                        <h3>Holds</h3>
                        <p>
                        In the event you have lost your UwinCARD and need to prevent it from being swiped, please contact the UwinCARD Office by phone, email or in-person or report it to any Food Services Manager as soon as possible. Our UwinCARD Office contact information and hours of operation are listed below.
                        </p>
                        <h3>Hours of Operation:</h3>
                        <p>
                        Monday to Friday 9:00am - 4:00pm (​closed for lunch from 12:00pm - 1:00pm)<br/>
The office is closed on weekends and statutory holidays.
                        </p>
                       
                    </div>
                </section>

                {/* Urgent Medical Concern Message Section */}
                <section className="urgent-message">
                    <p>
                        
*Please note that GET now serves as the primary method for adding funds, replacing the previous process through UWinsite.
                    </p>
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


                {/* Emergancy Assistance Section */}
                <section className="our-clinic">
                    <div className="clinic-content">
                        <div className="clinic-text">
                            <h2>How to load money for printing</h2>
                            <p>
                            Add funds to your UWinCARD in three ways. For more information please see the UWinCARD office webpage, or contact campus ITS for assistance with your UWin Account. 
                            </p>
                            <p>
                            Online: Credit
                            Download and login to the GET Mobile app to add funds online. The GET mobile app is a new and faster way to add funds to your card.
                            </p>
                            <p>
                            On-campus: Cash
                            Add funds with cash and coins using the UWinCARD deposit machine on the first floor of the Student Centre, next to the main information desk.
                            </p>
                            <p>
                            On-campus: Credit or debit
                            Head to the UWinCARD office to add funds using a credit or debit card.
                            </p>
                        
                        </div>
                        <div className="clinic-image-container">
                            <img src={getapp} alt="Nurse wearing mask and safety goggles" className="clinic-image" />
                        </div>
                    </div>
                </section>

                {/* Important Updates Section */}
                <section className="health-services">
                    <div className="health-info">
                        <h3>Photocopying and Scanning</h3>
                        <p>
                        Flatbed scanners are available at many of the computers on the main floor. Open "Epson Scan" to get started.

Ask your IT Desk consultant for help if you're stuck.<br/>
Location: Main Building <br/>
Main Floor - 1 monochrome copier and 1 colour copier<br/>
Costs: <li>$0.10 cents per page for black and white</li>
<li>$0.26 cents per page for colour</li>

                        </p>
                    </div>
                </section>

                {/* Our Clinic Section */}
                <section className="our-clinic">
                    <div className="clinic-content">
                        <div className="clinic-text">
                            
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

export default LoadUwinCard;
