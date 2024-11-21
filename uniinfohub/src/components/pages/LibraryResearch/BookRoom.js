import React, { useState } from 'react';
import Navbar from '../../header/navbar';
import Footer from '../../footer/footer';
import actiactiimgbanner from '../../../assets/image/actiactiimgbanner.png';
import '../../../css/gssprovider.css';
// import '../../../css/landing.css';
import HealthServices from '../../../assets/image/HealthServices.png';
// Replace the path below with the actual path of the new clinic image
import activationimg from '../../../assets/image/activationimg.png';
import Emergency from '../../../assets/image/Emergency.png';
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
                    <img src={actiactiimgbanner} alt="Students working together in a library" className="banner-image" />

                </div>
            </section>

            {/* Main Content Section */}
            <div className="main-content">

                {/* Student Health Services Section */}
                <section className="health-services">
                    <h2>Book Room</h2>
                    <p>To book an appointment, please call <strong>(519) 973-7002</strong></p>

                    <div className="health-info">
                        <h3>Regular Hours</h3>
                        <p>Monday-Thursday, 8:30am-4:30pm. Nurses hours 9am-4pm. <br />
                            Fridays we close for lunch from 12:00pm-1:00 pm.</p>
                        <p>Located on the second floor of the CAW Student Centre room 242</p>

                        <img src={HealthServices} alt="Nurse taking a student's blood pressure" className="health-image" />

                        <h3>Plan Activation</h3>
                        <p>
                            The first 6 weeks of the fall semester intake, the first 6 weeks of the winter semester intake or during the first 6 weeks of the summer semester intake, this is known as the “blackout period”.
                        </p>
                        <p>
                            This means that until the opt-in, opt out and add/drop deadlines have passed, no full-time graduate student will be activated for Green Shield during this period, until GSS obtains a master list from the Registrar’s office and Green Shield (for the opt-out list) before being able to activate any graduate students.
                        </p>
                    </div>
                </section>

                {/* Urgent Medical Concern Message Section */}
                <section className="urgent-message">
                    <p>
                        IF YOU HAVE AN URGENT MEDICAL CONCERN PLEASE GO TO THE NEAREST WALK-IN CLINIC OR EMERGENCY ROOM OR CONTACT TELEHEALTH AT 1-866-797-0000.
                    </p>
                </section>

                {/* Emergancy Assistance Section */}
                <section className="our-clinic">
                    <div className="clinic-content">
                        <div className="clinic-text">
                            <h2>How Registraton Works</h2>
                            <p>
                                Once you are activated for the Green Shield benefits plan through the GSS, you will receive an email with instructions. Then, follow these steps:
                            </p>
                            <p>
                                1. Read the welcome email very carefully and follow all steps to register your profile on the Green Shield Canada website.
                            </p>
                            <p>
                                2. Download the Green Shield phone app to submit claims from a mobile device.
                            </p>
                            <p>
                                3. Alternatively, you can submit claims through the portal website, by attaching scans of invoices and documents.
                            </p>
                            <a href="link-to-appointment-booking" className="appointment-link">Book an Appointment</a>
                        </div>
                        <div className="clinic-image-container">
                            <img src={Emergency} alt="Nurse wearing mask and safety goggles" className="clinic-image" />
                        </div>
                    </div>
                </section>

                {/* Important Updates Section */}
                <section className="health-services">
                    <div className="health-info">
                        <h3>Instruction</h3>
                        <p>
                            *Patients who require that a Form, Medical Certificate or Note be completed by a physician, should contact the front desk to book an appointment.  A hardcopy of the requested form must be brougt into the office (not emailed) before the appointment.  The doctor will review the form with the patient during the booked appointment.  A price will be quoted based on the individual form.  Debit, Visa and Matercard are all acceptable forms of payment.
                        </p>
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
                            <h2>Our Clinic</h2>
                            <p>
                                We place you first, work to limit out-of-pocket expenses for students, and seek partnerships with you in personal health.Caring for University of Windsor students is our number one priority.Caring for University of Windsor students is our number one priority.Caring for University of Windsor students is our number one priority.Caring for University of Windsor students is our number one priority.
                            </p>
                            <p>
                                Located on the second floor of the CAW Student Centre, Room 242, our medical clinic offers health care visits with doctors and nurses.
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

export default BookRoom;
