import React from 'react';
import Navbar from '../header/navbar';
import Footer from '../footer/footer';
import getgscbanner from '../../assets/image/getgscbanner.png';
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

function GetGSC() {
  return (
    <>
        <Navbar />

        {/* Banner Section */}
        <section className="hero-section">
            <div className="hero-image-container">
                <img src={getgscbanner} alt="Students working together in a library" className="hero-image" />
                
            </div>
        </section>

        {/* Main Content Section */}
        <div className="main-content">

            {/* Student Health Services Section */}
            <section className="health-services">
                <h2>Basic Green Shield Health Insurance Plan</h2>
                <p>To book an appointment, please call <strong>(519) 973-7002</strong></p>

                <div className="health-info">
                    <h3>Regular Hours</h3>
                    <p>Monday-Thursday, 8:30am-4:30pm. Nurses hours 9am-4pm. <br />
                    Fridays we close for lunch from 12:00pm-1:00 pm.</p>
                    <p>Located on the second floor of the CAW Student Centre room 242</p>

                    <img src={HealthServices} alt="Nurse taking a student's blood pressure" className="health-image" />

                    <h3>GSHIP & FEES – Green Shield Health Insurance Plan (OHIP Equivalent) & Feesn</h3>
                    <p>
                    The GSHIP Administrator is Marisa Bonasso who is located on the 2nd Floor of Laurier Hall in the International Student Centre.
                    </p>
                    <p>
                    GSHIP is the equivalent to the Ontario Provincial Government’s Ontario Health Insurance Plan (OHIP) coverage.  </p>
                    <p>
                    It provides the registered International Students with the medically necessary coverage for services and treatments normally covered by the OHIP for an Ontario resident in all of Canada.</p>
                </div>
            </section>

            {/* Urgent Medical Concern Message Section */}
            <section className="urgent-message">
                <p>
                If you register for the first time in the WINTER semester, your coverage will be from January 1st – April 30th. If you arrive one month earlier, in December, you can request to be enrolled in the health insurance coverage for an additional 1 month fee.  </p>
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
                    <h3>Green Shield Canada Health Cards </h3>
                    <p>
                    All NEW registered International Students will receive an email from Green Shield Canada (GSC) within the first month after classes begin in the student's first semester. The email will include instructions on how to register and download your electronic copy of the green shield card. You will need to present your GSC OHIP Equivalent health card when visiting any health care provider or any medical facility for any medical services that are covered under this plan in Canada. You must carry your GSC health card with you at all times or be able to present an electronic version on your phone. Your GSC health card does not expire, the policy does, so please do not discard the GSC health card until you no longer meet the eligibility criteria.</p>
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

export default GetGSC;
