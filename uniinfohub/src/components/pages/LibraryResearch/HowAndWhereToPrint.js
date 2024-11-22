import React, { useState } from 'react';
import Navbar from '../../header/navbar';
import Footer from '../../footer/footer';
import printing from '../../../assets/image/printing.jpeg';
import '../../../css/gssprovider.css';
// import '../../../css/landing.css';
import HealthServices from '../../../assets/image/HealthServices.png';
// Replace the path below with the actual path of the new clinic image
import activationimg from '../../../assets/image/activationimg.png';
import software from '../../../assets/image/software.png';
import HealthWellness from '../../../helper/Health&Wellness';
import Libraryservices from '../../../helper/Libraryservices';
import '../../../css/transport.css';

function HowAndWhereToPrint() {
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
                    <img src={printing} alt="Students working together in a library" className="banner-image" />

                </div>
            </section>

            {/* Main Content Section */}
            <div className="main-content">

                {/* Student Health Services Section */}
                <section className="health-services">
                    <h2>How and Where To Print</h2>
                    <p>Printing and photocopying is available on the library's first floor. Computer Help Desk staff are on duty to answer questions and help you with printing – find them at the Information Desk.</p>

                    <div className="health-info">
                        <h3>To print or photocopy you will need to have your UWinCARD. Scanning is free.
                        </h3>

                       

                        <h3>Computers</h3>
                        <p>
                        The Leddy Library has over 140 computers for you to use! Find laptops that you can borrow at the Information Desk, or sit down at one of the desktop PCs located throughout the library.
                        </p>
                        <p>
                        Use your UWin Account to log in to our computers and access your Office 365 apps and documents. Guests may also log-in to any desktop computer in our library.
                        </p>
                    </div>
                </section>

                {/* Urgent Medical Concern Message Section */}
                <section className="urgent-message">
                    <p>
                    Staff at the Computer Help Desk are available to help you with your in-library computer problems whenever the library is open. Our staff wear blue vests reading "IT Help", so they're easy to find!
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
                            <h2>Software Available</h2>
                            <p>
                            All computers in the Leddy Library have the following standard software installed:
 
 Adobe Acrobat Reader DC <br/>
 Microsoft Edge<br/>
 Mozilla Firefox<br/>
 Google Chrome<br/>
 VLC Media Player
                            </p>
                            <p>
                            MatLab Virtual Lab<br/>
                            The MATLAB Virtual Lab can be accessed using a web browser provided by the department of Engineering.  Please refer to the following knowledge base article for further details: Connect to MATLAB Virtual Lab with Web Browser
                            </p>
                            <p>
                            Academic Data Centre Software<br/>
                            The Academic Data Centre offers students and faculty access to many statistical software.  The full list of the statistical software can be found here.
                            </p>
                           
                            
                        </div>
                        <div className="clinic-image-container">
                            <img src={software} alt="Nurse wearing mask and safety goggles" className="clinic-image" />
                        </div>
                    </div>
                </section>

                {/* Important Updates Section */}
                <section className="health-services">
                    <div className="health-info">
                        
                    </div>
                </section>



                {/* Our Clinic Section */}
                <section className="our-clinic">
                    <div className="clinic-content">
                        <div className="clinic-text">
                            
                        </div>
                        <div className="clinic-image-container">
                            
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

export default HowAndWhereToPrint;
