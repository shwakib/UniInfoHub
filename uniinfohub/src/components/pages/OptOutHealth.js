import React from 'react';
import Navbar from '../header/navbar';
import Footer from '../footer/footer';
import optoutbanner from '../../assets/image/optoutbanner.png';
import '../../css/gssprovider.css';
import '../../css/landing.css';
import HealthServices from '../../assets/image/HealthServices.png';
// Replace the path below with the actual path of the new clinic image
import OurClinicImage from '../../assets/image/OurClinicImage.png';
import Emergency from '../../assets/image/Emergency.png';
import BusPass from '../../assets/image/BusPass.png';
import BusSchedule from '../../assets/image/BusSchedule.png';
import PrivateTransport from '../../assets/image/PrivateTransport.png';

const transitData = [
  {
      image: BusPass,
      title: 'Getting a Bus Pass',
      description: 'Information on how to get access to transit passes and bus services.'
  },
  {
      image: BusSchedule,
      title: 'Bus Schedules',
      description: 'Details on bus schedules to navigate around the campus and city.'
  },
  {
      image: PrivateTransport,
      title: 'Private Transportation',
      description: 'Information on private transportation options such as bike rentals and car services.'
  }
];

function OptOutHealth() {
  return (
    <>
        <Navbar />

        {/* Banner Section */}
        <section className="hero-section">
            <div className="hero-image-container">
                <img src={optoutbanner} alt="Students working together in a library" className="hero-image" />
                
            </div>
        </section>

        {/* Main Content Section */}
        <div className="main-content">

            {/* Student Health Services Section */}
            <section className="health-services">
                <h2>How to Opt Out from GSS</h2>
                <p>To book an appointment, please call <strong>(519) 973-7002</strong></p>

                <div className="health-info">
                    <h3>Regular Hours</h3>
                    <p>Monday-Thursday, 8:30am-4:30pm. Nurses hours 9am-4pm. <br />
                    Fridays we close for lunch from 12:00pm-1:00 pm.</p>
                    <p>Located on the second floor of the CAW Student Centre room 242</p>

                    <img src={HealthServices} alt="Nurse taking a student's blood pressure" className="health-image" />

                    <h3>Instruction</h3>
                    <p>
                    If you are a graduate student at the University of Windsor and wish to opt out of (GSC) Health Insurance plan (Green Shield), you may be eligible to do so under certain conditions.
                    </p>
                    <p>
                    Opting out means you will no longer pay the health insurance fees and will not have access to the health and dental benefits provided by the GSC.
                    </p>
                    <p>
                    Please note: Before proceeding, it's important to understand the implications of opting out and ensure you're following the correct procedure. owever, opting out also means you will lose access to health and dental coverage, which may be important if you need access to healthcare, prescription medications, or dental services.
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
                        <h2>How to Opt Out: Step-by-Step Guide</h2>
                        <p>
1. Verify Your Eligibility
Before beginning the opt-out process, verify whether you are eligible to opt out of the GSC health insurance. Typically, full-time graduate students are automatically enrolled in the health insurance plan through the GSC, but you may be eligible to opt out if you have equivalent coverage.
Eligibility Criteria:
--You must have equivalent health and dental insurance coverage.
--You must be a full-time graduate student enrolled at the University of Windsor.
If you're unsure whether your existing coverage qualifies, you can contact the GSC for clarification.
                        </p>
                        <p>
                        2. Access the Opt-Out Form
                        The opt-out form for Green Shield Health Insurance is available through the Graduate Student Council's (GSC) official website or the University of Windsor student portal. Look for the section related to Health Insurance or Opting Out.
                        </p>
                        <p>
                        3. Fill Out the Opt-Out Form
                        Complete the opt-out form carefully. 
                        </p>
                        <p>
                        4. Submit the Opt-Out Form
                        Once the form is completed, submit it as instructed on the website. Most submissions are handled electronically, but some may require in-person submissions at the GSC office or other designated locations.
                        </p>
                        <p>
                           5. Confirm Your Opt-Out
                           After submitting the form, you should receive a confirmation email or notice through your student portal. This confirmation will verify that your opt-out request has been successfully processed. If you do not receive confirmation, follow up with the GSC to ensure your request has been received and processed.
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
                    <h3>Important Things to Consider</h3>
                    <p>
                    -->Opt-Out Deadlines: Opting out of the GSC health insurance plan is time-sensitive. Opt-out periods usually happen at the beginning of each semester. If you miss the deadline, you will be charged for the insurance fees for the entire academic year. Be sure to confirm the exact dates on the GSC website or via the student portal.
                    </p>
                    <p>
                    -->Impact on Coverage: Once you opt out, you will lose access to the health and dental insurance provided by the GSC. Be sure you have adequate alternative coverage in place before opting out.
                    </p>
                    <p>
                    -->Partial Opt-Out: In some cases, you may be able to opt out of only the health insurance portion or other specific services offered by the GSC, rather than the entire membership. Be sure to check the details on the form for any partial opt-out options.
                    </p>
                    <p>
                    -->Seek Clarification: If you're unsure about your eligibility or need assistance with the opt-out process, it's always a good idea to contact the GSC directly. They can provide further guidance on how to proceed and clarify any specific questions you may have.
                    </p>
                </div>
            </section>

            {/* Our Clinic Section */}
            <section className="our-clinic">
                <div className="clinic-content">
                    <div className="clinic-text">
                        <h2>How to Contact the GSC</h2>
                        <p>
                        If you have any questions or need assistance with the opt-out process, you can contact the Graduate Student Council (GSC) directly:
                        </p>
                        <p>
                        If you are an international student and have inquiries about your Green Shield Health Plan or OHIP Equivalency plan and what coverage you have, please either call the administrator of the Health Plan or OHIP Equivalency Plan for all international students:

Contact: Marissa Bonasso
Phone: 519-253-3000 #3937
Email: gship@uwindsor.ca
                        </p>
                        <a href="link-to-appointment-booking" className="appointment-link">Book an Appointment</a>
                    </div>
                    <div className="clinic-image-container">
                        <img src={OurClinicImage} alt="Nurse wearing mask and safety goggles" className="clinic-image" />
                    </div>
                </div>
            </section>


        </div>
        {/* Transit & Transportation Section */}
        <section className="transit-section">
                <h2>Transit & Transportation</h2>
                <div className="transit-cards-container">
                    {transitData.map((item, index) => (
                        <div key={index} className="transit-card">
                            <img src={item.image} alt={item.title} className="transit-card-image" />
                            <div className="transit-card-content">
                                <h3 className="transit-card-title">{item.title}</h3>
                                <p className="transit-card-description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


        <Footer />
    </>
  );
}
export default OptOutHealth;
