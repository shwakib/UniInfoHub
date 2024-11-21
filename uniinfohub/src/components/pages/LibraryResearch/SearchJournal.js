import React, { useState } from 'react';
import Navbar from '../../header/navbar';
import Footer from '../../footer/footer';
import researchpic from '../../../assets/image/researchpic.png';
import '../../../css/gssprovider.css';
// import '../../../css/landing.css';
import omni from '../../../assets/image/omni.png';
// Replace the path below with the actual path of the new clinic image
import activationimg from '../../../assets/image/activationimg.png';
import Emergency from '../../../assets/image/Emergency.png';
import HealthWellness from '../../../helper/Health&Wellness';
import Libraryservices from '../../../helper/Libraryservices';

function SearchJournal() {
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
                    <img src={researchpic} alt="Students working together in a library" className="banner-image" />

                </div>
            </section>

            {/* Main Content Section */}
            <div className="main-content">

                {/* Student Health Services Section */}
                <section className="health-services">
                    <h2>Introducing Omni, the new academic search tool presented by OCUL.</h2>
                    <p>An outcome of OCUL’s Collaborative Futures initiative, Omni is powered by a collaborative system of team members and resources from 19 of Ontario’s university libraries. Omni users experience fast and easy access to a vast collection of diverse, high-quality, academic material, empowering them to confidently develop new insights in their areas of study, and succeed in their research goals.</p>
                    

                    <div className="health-info">
                        <h3>What can I do with Omni?</h3>
                        <p>1. Search the collections of libraries at UWindsor and at many Ontario universities <br />
                           2. Discover millions of journal articles and other resources from within titles, across all disciplines<br />
                           3. Place requests to hold or digitize print materials at Leddy Library,<br/>
                           4. Order print materials from other Ontario university libraries <br/>
                           5. Manage loans in your library account</p>
                        

                        <img src={omni} alt="Nurse taking a student's blood pressure" className="health-image" />

                        <h3>Research and Reference Help</h3>
                        <p>
                        Strengthen your research with expert support—guiding you in discovering, navigating, and utilizing essential resources for your academic pursuits..
                        </p>
                        <p>
                        The library's Information Desk is open during library hours to assist you with basic research questions and find books and articles. Basic and advanced research support is provided over email, and with 1:1 research consultations with a Leddy librarian.
                        </p>
                    </div>
                </section>

                {/* Urgent Medical Concern Message Section */}
                <section className="urgent-message">
                    <p>
                    The Leddy Library stands ready to assist researchers and scholars in navigating the dynamic information and publication landscape. This page consolidates a diverse array of our services, encompassing support for open access and publishing, distinctive digital projects, archives and special collections, and research data and statistical consulting.
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
                            
                        </div>
                        <div className="clinic-image-container">
                            
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
                            <h2>Contact</h2>
                            <p>
                            130 St. George St. 7th fl
Toronto, ON Canada M5S 1A5
ocul@ocul.on.ca
                            </p>
                            
                            <a href="link-to-appointment-booking" className="appointment-link">Book an Appointment</a>
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

export default SearchJournal;
