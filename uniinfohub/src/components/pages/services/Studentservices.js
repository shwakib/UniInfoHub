// // import React from 'react';
// import React, { useState } from "react";
// import Navbar from '../../header/navbar';
// import Footer from '../../footer/footer';
// //import bus_pass from '../../../assets/image/bus_pass.png'; 
// import '../../../css/studentservice.css'; 
// //import '../../../css/transport.css';

// // function SINClinic() {
//     const SINClinic = () => {
//         const [showBuildingImage, setShowBuildingImage] = useState(false);
//         const [showMap, setShowMap] = useState(false);
      
//         const toggleBuildingImage = () => {
//           setShowBuildingImage(!showBuildingImage);
//         };
      
//         const toggleMap = () => {
//           setShowMap(!showMap);
//         };
//     return (
//         <div>
//             <Navbar />





//         <div className="container">
//             <header>
//                 <h1>SIN Clinic Information</h1>
//                 <p>Get your Social Insurance Number (SIN) issued conveniently through the SIN Clinic.</p>
//             </header>
            
//             <section className="clinic-details">
//                 <h2>SIN Clinic</h2>
//                 <p>To facilitate this process, Service Canada staff will come to the ISC and issue SINs to eligible students. Check your Brightspace ISC announcements for dates for the next SIN Clinic.</p>
//             </section>
            
//             <section className="requirements">
//                 <h3>What You Need to Bring with You</h3>
//                 <ul>
//                     <li>Your passport</li>
//                     <li>Letter of confirmation of enrolment from the University, available online from UWinsite Student</li>
//                     <li>A valid Study Permit issued by CIC with permission to work in Canada</li>
//                 </ul>
//                 <p>International students enrolled full-time and in good academic standing can get a SIN with just the study permit.</p>
//             </section>
            
//             <section className="sin-info">
//                 <h3>Important Information about SIN</h3>
//                 <p>A Social Insurance Number (SIN) is personal information and not a piece of identification. It is a client account number for specific Government of Canada programs such as Employment Insurance or the Canada Pension Plan.</p>
//                 <p>Your SIN should not be shared unless necessary. For instance, it is not needed when applying for an apartment or for most banking purposes (e.g., opening a new account, loans, mortgages, etc.).</p>
//                 <p>If an organization refuses to provide its service or product unless you provide your SIN, you can complain to the Privacy Commissioner of Canada for investigation.</p>
//                 <p>If your SIN has expired, you can still use it for tax purposes, but you must renew your card before starting employment. Your SIN number remains the same.</p>
//             </section>
            
//             <section className="apply-sin">
                
//                 <h3>Applying for SIN in Person</h3>
//                 <p>You can apply for a SIN card at the Service Canada Offices in downtown Windsor:</p>
//                 <address>
//                     <strong>Service Canada Offices</strong><br />
//                     400 City Hall Square East<br />
//                     Suite 103<br />
//                     Windsor, Ontario<br />
//                     Phone: (800) 622-6232<br />
//                     Hours: Monday to Friday from 8:30am to 4:00pm
//                 </address>
//             </section>
            
//             <section className="permit-requirements">
//                 <h3>Permit Requirements for SIN Application</h3>
//                 <ul>
//                     <li>You must have one of the following conditions or remarks printed on your study permit to apply for a SIN for off-campus work:</li>
//                     <ul>
//                         <li>May work 20 hours per week off-campus or full time during regular breaks if meeting criteria outlined in section 186(v) of IRPR.</li>
//                         <li>May accept employment on or off-campus if meeting eligibility criteria as per R186(f), (v), or (w). Must cease working if no longer meeting these criteria.</li>
//                     </ul>
//                 </ul>
//                 <p>If your study permit does not have these conditions, schedule an appointment with an International Student Advisor to learn how to change your permit.</p>
//             </section>
//         </div>




//             <Footer />
//         </div>
//     );
// }

// export default SINClinic;

// import React, { useState } from "react";
// import Navbar from '../../header/navbar';
// import Footer from '../../footer/footer';
// //import bus_pass from '../../../assets/image/bus_pass.png'; 
// import '../../../css/studentservice.css'; 
// //import '../../../css/transport.css';

// // function SINClinic() {
// const SINClinic = () => {
//     const [showBuildingImage, setShowBuildingImage] = useState(false);
//     const [showMap, setShowMap] = useState(false);

//     const toggleBuildingImage = () => {
//         setShowBuildingImage(!showBuildingImage);
//     };

//     const toggleMap = () => {
//         setShowMap(!showMap);
//     };

//     return (
//         <div>
//             <Navbar />

//             <div className="sin-container">
//                 <header className="sin-header">
//                     <h1>SIN Clinic Information</h1>
//                     <p>Get your Social Insurance Number (SIN) issued conveniently through the SIN Clinic.</p>
//                 </header>

//                 <section className="sin-clinic-details">
//                     <h2>SIN Clinic</h2>
//                     <p>To facilitate this process, Service Canada staff will come to the ISC and issue SINs to eligible students. Check your Brightspace ISC announcements for dates for the next SIN Clinic.</p>
//                 </section>

//                 <section className="sin-requirements">
//                     <h3>What You Need to Bring with You</h3>
//                     <ul>
//                         <li>Your passport</li>
//                         <li>Letter of confirmation of enrolment from the University, available online from UWinsite Student</li>
//                         <li>A valid Study Permit issued by CIC with permission to work in Canada</li>
//                     </ul>
//                     <p>International students enrolled full-time and in good academic standing can get a SIN with just the study permit.</p>
//                 </section>

//                 <section className="sin-info">
//                     <h3>Important Information about SIN</h3>
//                     <p>A Social Insurance Number (SIN) is personal information and not a piece of identification. It is a client account number for specific Government of Canada programs such as Employment Insurance or the Canada Pension Plan.</p>
//                     <p>Your SIN should not be shared unless necessary. For instance, it is not needed when applying for an apartment or for most banking purposes (e.g., opening a new account, loans, mortgages, etc.).</p>
//                     <p>If an organization refuses to provide its service or product unless you provide your SIN, you can complain to the Privacy Commissioner of Canada for investigation.</p>
//                     <p>If your SIN has expired, you can still use it for tax purposes, but you must renew your card before starting employment. Your SIN number remains the same.</p>
//                 </section>

//                 <section className="sin-apply">
//                     <h3>Applying for SIN in Person</h3>
//                     <p>You can apply for a SIN card at the Service Canada Offices in downtown Windsor:</p>
//                     <address className="sin-address">
//                         <strong>Service Canada Offices</strong><br />
//                         400 City Hall Square East<br />
//                         Suite 103<br />
//                         Windsor, Ontario<br />
//                         Phone: (800) 622-6232<br />
//                         Hours: Monday to Friday from 8:30am to 4:00pm
//                     </address>
//                 </section>

//                 <section className="sin-permit-requirements">
//                     <h3>Permit Requirements for SIN Application</h3>
//                     <ul>
//                         <li>You must have one of the following conditions or remarks printed on your study permit to apply for a SIN for off-campus work:</li>
//                         <ul>
//                             <li>May work 20 hours per week off-campus or full time during regular breaks if meeting criteria outlined in section 186(v) of IRPR.</li>
//                             <li>May accept employment on or off-campus if meeting eligibility criteria as per R186(f), (v), or (w). Must cease working if no longer meeting these criteria.</li>
//                         </ul>
//                     </ul>
//                     <p>If your study permit does not have these conditions, schedule an appointment with an International Student Advisor to learn how to change your permit.</p>
//                 </section>
//             </div>

//             <Footer />
//         </div>
//     );
// }

// export default SINClinic;

import React, { useState } from "react";
import Navbar from '../../header/navbar';
import Footer from '../../footer/footer';
import '../../../css/studentservice.css';
import StudentHub from '../../../helper/StudentHub.js';

const SINClinic = () => {
    const [showBuildingImage, setShowBuildingImage] = useState(false);
    const [showMap, setShowMap] = useState(false);

    const toggleBuildingImage = () => {
        setShowBuildingImage(!showBuildingImage);
    };

    const toggleMap = () => {
        setShowMap(!showMap);
    };

    return (
        <div className="sin-body">
            <Navbar />

            <div className="sin-container">
                <header className="sin-header">
                    <h1>SIN Clinic Information</h1>
                    <p>Get your Social Insurance Number (SIN) issued conveniently through the SIN Clinic.</p>
                </header>

                <section className="sin-section">
                    <h2 className="sin-section-title">SIN Clinic</h2>
                    <p className="sin-text">To facilitate this process, Service Canada staff will come to the ISC and issue SINs to eligible students. Check your Brightspace ISC announcements for dates for the next SIN Clinic.</p>
                </section>

                <section className="sin-section">
                    <h3 className="sin-section-title">What You Need to Bring with You</h3>
                    <ul className="sin-list">
                        <li>Your passport</li>
                        <li>Letter of confirmation of enrolment from the University, available online from UWinsite Student</li>
                        <li>A valid Study Permit issued by CIC with permission to work in Canada</li>
                    </ul>
                    <p className="sin-text">International students enrolled full-time and in good academic standing can get a SIN with just the study permit.</p>
                </section>

                <section className="sin-section">
                    <h3 className="sin-section-title">Important Information about SIN</h3>
                    <p className="sin-text">A Social Insurance Number (SIN) is personal information and not a piece of identification. It is a client account number for specific Government of Canada programs such as Employment Insurance or the Canada Pension Plan.</p>
                    <p className="sin-text">Your SIN should not be shared unless necessary. For instance, it is not needed when applying for an apartment or for most banking purposes (e.g., opening a new account, loans, mortgages, etc.).</p>
                    <p className="sin-text">If an organization refuses to provide its service or product unless you provide your SIN, you can complain to the Privacy Commissioner of Canada for investigation.</p>
                    <p className="sin-text">If your SIN has expired, you can still use it for tax purposes, but you must renew your card before starting employment. Your SIN number remains the same.</p>
                </section>

                <section className="sin-section">
                    <h3 className="sin-section-title">Applying for SIN in Person</h3>
                    <p className="sin-text">You can apply for a SIN card at the Service Canada Offices in downtown Windsor:</p>
                    <address className="sin-address">
                        <strong>Service Canada Offices</strong><br />
                        400 City Hall Square East<br />
                        Suite 103<br />
                        Windsor, Ontario<br />
                        Phone: (800) 622-6232<br />
                        Hours: Monday to Friday from 8:30am to 4:00pm
                    </address>
                </section>

                <section className="sin-section">
                    <h3 className="sin-section-title">Permit Requirements for SIN Application</h3>
                    <ul className="sin-list">
                        <li>You must have one of the following conditions or remarks printed on your study permit to apply for a SIN for off-campus work:</li>
                        <ul className="sin-list-nested">
                            <li>May work 20 hours per week off-campus or full time during regular breaks if meeting criteria outlined in section 186(v) of IRPR.</li>
                            <li>May accept employment on or off-campus if meeting eligibility criteria as per R186(f), (v), or (w). Must cease working if no longer meeting these criteria.</li>
                        </ul>
                    </ul>
                    <p className="sin-text">If your study permit does not have these conditions, schedule an appointment with an International Student Advisor to learn how to change your permit.</p>
                </section>
            </div>
            <StudentHub/>
            <Footer />
        </div>
    );
}

export default SINClinic;
