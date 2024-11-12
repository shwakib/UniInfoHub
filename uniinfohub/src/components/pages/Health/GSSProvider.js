import React from 'react';
import Navbar from '../../header/navbar';
import Footer from '../../footer/footer';
import GSSBanner from '../../../assets/image/GSSBanner.png';
import GSSImage from '../../../assets/image/GSSImage.png';
import GSSMain from '../../../assets/image/GSSMain.png';

import '../../../css/gssprovider.css';
import '../../../css/landing.css';

import HealthServices from '../../../assets/image/HealthServices.png';
import CollegeDoctors from '../../../assets/image/CollegeDoctors.png';
import SexualHealth from '../../../assets/image/SexualHealth.png';
import Vaccinations from '../../../assets/image/Vaccinations.png';
import MentalHealth from '../../../assets/image/MentalHealth.png';
import HealthClinic from '../../../assets/image/HealthClinic.png';


import HealthWellnessSection from '../CommonWidgets/HealthWellnessSection'; // Adjust path as needed

const healthData = [
    {
        image: HealthServices,
        title: 'Health services',
        description: 'Access to health services including dentists, prescriptions, and opticians.'
    },
    {
        image: CollegeDoctors,
        title: 'College doctors and nurses',
        description: 'Registering with the NHS and details of your college doctor and nurse.'
    },
    {
        image: SexualHealth,
        title: 'Sexual health',
        description: 'Information about all aspects of sexual health including STIs and contraception.'
    },
    {
        image: Vaccinations,
        title: 'Important vaccinations',
        description: 'Information about infectious diseases such as meningitis and important vaccinations.'
    },
    {
        image: MentalHealth,
        title: 'Mental health',
        description: 'Mental health support and resources for students.'
    },
    {
        image: HealthClinic,
        title: 'Visit the Health Clinic',
        description: 'Information about visiting the campus health clinic.'
    }
];


function GSSProvider() {
  return (
    <>
        <Navbar />

        {/* Banner Section */}
        <section className="hero-section">
            <div className="hero-image-container">
                <img src={GSSBanner} alt="Students working together in a library" className="hero-image" />
                
            </div>
        </section>

        {/* Main Content Section */}
        <div className="main-content">

            {/* Student Health Services Section */}
            <section className="health-services">
                <h2>The Graduate Student Society (GSS)</h2>
                <p>To book an appointment, please call <strong>(519) 973-7002</strong></p>

                <div className="health-info">
                     <h3>Regular Hours</h3>
                    <p>Monday-Thursday, 8:30am-4:30pm. Nurses hours 9am-4pm. <br />
                    Fridays we close for lunch from 12:00pm-1:00 pm.</p>
                    <p>Located on the second floor of the CAW Student Centre room 242</p>

                    <img src={GSSMain} alt="Nurse taking a student's blood pressure" className="health-image" />

                    <h3>The History</h3>
                    <p>
                    The Graduate Student Society (GSS) is the official representative organization of all graduate students at the University of Windsor, pursuant to Bill 184, College and University Student Associations Act, 2011 of the Province of Ontario.
                    </p>
                    <p>
                    The Society was established and incorporated in 1980. The founding leaders were inspired by a popular national trend in that era to establish a unified voice for masters' students, as done on many other campuses across Canada.
                    </p>
                    <p>
                    Since its inception, GSS has been crafted with governance, processes and an increasing value proposition to its members. The value proposition generally includes programs, which comprise of services and events, designed to advance and defend the interest of member students.


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
                        <h2>Our Volunteers</h2>
                        <p>
                        We are hosting a cricket tournament on June 8,9 & 15 and we are looking for a team of volunteers for all three days. We have two roles: scorekeeper & check-in, job descriptions will be provided upon selection.
                        </p>
                        <p>
                        Volunteers who volunteer for 3 shifts over the three days will receive a $50 dollar gift certificate, and GSS swag! The volunteers will be given their gift cards on their last shift. Shifts are 9:00 AM – 2:00 PM & 1:30 PM – 6:00 PM. Please apply for a volunteer position by June 1 at 4 PM. Light snacks will be provided.    </p>
                        <a href="link-to-appointment-booking" className="appointment-link">Book an Appointment</a>
                    </div>
                    <div className="clinic-image-container">
                        <img src={GSSImage} alt="Nurse wearing mask and safety goggles" className="clinic-image" />
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

            {/* Our Clinic Section */}
            {/* <section className="our-clinic">
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
                        <img src={GSSImage} alt="Nurse wearing mask and safety goggles" className="clinic-image" />
                    </div>
                </div>
            </section> */}


        </div>
       

            {/* Health & Wellness Section */}
            <HealthWellnessSection healthData={healthData} />

        <Footer />
    </>
  );
}

export default GSSProvider;
