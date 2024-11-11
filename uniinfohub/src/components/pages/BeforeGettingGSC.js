import React from 'react';
import Navbar from '../header/navbar';
import Footer from '../footer/footer';
import actiactiimgbanner from '../../assets/image/actiactiimgbanner.png';
import '../../css/gssprovider.css';
import '../../css/landing.css';
import HealthServices from '../../assets/image/HealthServices.png';
// Replace the path below with the actual path of the new clinic image
import activationimg from '../../assets/image/activationimg.png';
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

function BeforeGettingGSC() {
  return (
    <>
        <Navbar />

        {/* Banner Section */}
        <section className="hero-section">
            <div className="hero-image-container">
                <img src={actiactiimgbanner} alt="Students working together in a library" className="hero-image" />
                
            </div>
        </section>

        {/* Main Content Section */}
        <div className="main-content">

            {/* Student Health Services Section */}
            <section className="health-services">
                <h2>Before Getting GSC</h2>
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

export default BeforeGettingGSC;
