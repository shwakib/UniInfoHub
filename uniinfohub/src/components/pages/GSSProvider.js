import React from 'react';
import Navbar from '../header/navbar';
import Footer from '../footer/footer';
import GSSBanner from '../../assets/image/GSSBanner.png';
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

                    <img src={HealthServices} alt="Nurse taking a student's blood pressure" className="health-image" />

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

export default GSSProvider;
