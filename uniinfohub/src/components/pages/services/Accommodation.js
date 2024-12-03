import React, { useState } from 'react';
import Navbar from '../../header/navbar';
import Footer from '../../footer/footer';
//import bus_pass from '../../../assets/image/bus_pass.png'; 
import '../../../css/accommodation.css';
import alumnihall from '../../../assets/image/alumnihall.jpg';
import cartierhall from '../../../assets/image/cartierhall.jpg';
import laurierhall from '../../../assets/image/laurierhall.png';
import roomassignments from '../../../assets/image/roomassignments.jpg';
import rodzik from '../../../assets/image/rodzik.png';
import room_accommodation from '../../../assets/image/room_accommodation.jpg';
import StudentHub from '../../../helper/StudentHub.js';

function ResidenceInfo() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="accommodation-root">
            <Navbar />
                
            <div className="accommodation-container">
                <header className="accommodation-header">
                <img src={room_accommodation} alt="Room" className='.accomodation-section  '/>
                    <h1>Residence Halls Information</h1>
                    <p>Explore details about Residence Halls, Room Assignments, and Facilities Services below.</p>
                </header>

                <nav className="accommodation-on-this-page">
                    <h2>On This Page</h2>
                    <ul>
                        <li><a href="#residence-halls">Residence Halls</a></li>
                        <li><a href="#room-assignments">Room Assignments</a></li>
                        <li><a href="#facilities-services">Facilities Services</a></li>
                        <li><a href="#house-polices">Housing Policies</a></li>
                        <li><a href="#Residence-Fees">Residence Fees</a></li>
                        <li><a href="#Meal-Plan">Meal Plan</a></li>
                    </ul>
                </nav>

                <section id="residence-halls" className="accommodation-residence-halls">
                    <h2>Residence Halls</h2>
                    <p>The University of Windsor is a medium-sized campus and is located on Windsor’s west side and downtown. It offers you the chance to explore one of Canada’s most ethnically diverse cities, and with a variety of restaurants, friendly shops, and ample cultural offerings, there are many experiences outside of the classroom.</p>
                    <p>There are 3 residence buildings, each with its unique characteristics. Our communities range from 150 to 350 students and are conveniently located throughout the campus. You will enjoy short walks to class, food outlets, recreational facilities, the library, the Bookstore, the student centre, and banks.</p>
                    <div className="accommodation-halls-list">
                        <div className="accommodation-hall">
                            <img src={alumnihall} alt="Alumni Hall" />
                            <h3>Alumni Hall</h3>
                            <p>Alumni Hall is home to Beyond & First Year students (of their first undergraduate program) and offers 2-bedroom suites.</p>
                            <a href="https://www.youtube.com/watch?v=cJCjgDxowGk">Take a virtual tour of ALUMNI</a>
                        </div>
                        <div className="accommodation-hall">
                            <img src={cartierhall} alt="Cartier Hall" />
                            <h3>Cartier Hall</h3>
                            <p>Cartier Hall is home to First Year students (entering into the first year of their first undergraduate program).</p>
                            <a href="https://www.youtube.com/watch?v=nOWEj7Brr9o">Take a virtual tour of CARTIER</a>
                        </div>
                        <div className="accommodation-hall">
                            <img src={laurierhall} alt="Laurier Hall" />
                            <h3>Laurier Hall</h3>
                            <p>Laurier Hall is home to Beyond first-year students living in a single room; or First-year students (entering into their first year of their first undergraduate program) in a double room.</p>
                            <a href="https://www.youtube.com/watch?v=lTBriYUmlQI">Take a virtual tour of LAURIER</a>
                        </div>
                        <div className="accommodation-hall">
                            <img src={rodzik} alt="Rodzik Hall - OPENING FALL 2025" />
                            <h3>Rodzik Hall - OPENING FALL 2025</h3>
                            <p>Rodzik Hall</p>
                            <li>First-Year & Beyond First-Year students
                                <li>more details forthcoming</li>
                            </li>

                        </div>

                    </div>
                </section>

                <section id="room-assignments" className="accommodation-room-assignments">
                    <h2>Room Assignments</h2>
                    <p>Assignments are based on your 1st, 2nd, and 3rd preferences on your application. We assign based on 1st preference, but this cannot be guaranteed due to availability.</p>
                    <img src={roomassignments} alt="Room Assignment" />
                    <p>First-year students are typically assigned to double rooms, but a limited number of single rooms are available. These are assigned on a first-come, first-served basis. First-year students can expect to receive an email containing their room assignment by the end of July. Beyond first-year, students are assigned to single rooms.</p>
                    <h3>Room Switch Process</h3>
                    <ul>
                        <li>Residence Services has the right to relocate students if required.</li>
                        <li>A student can request a room switch and can be re-assigned if approved. They must contact their Residence Life Coordinator who will review the request and make a recommendation to the Admissions Secretary.</li>
                        <li>If approved, a processing fee of $100 is applied to the student's account.</li>
                        <li>If a room change results in a higher fee, the student is responsible for the additional costs. This will be prorated from the time of room change to the end of the contract.</li>
                    </ul>
                    <h3>Moving to a Single Room</h3>
                    <ul>
                        <li>There are a limited number of single rooms available across the residence system.</li>
                        <li>In most cases, these rooms are fully occupied so if students are interested in a single room, they can request their name be placed on a wait list in the Residence Office.</li>
                        <li>However, there is no guarantee that single rooms will become available during the year.</li>
                        <li>Assignments will depend on various circumstances and are at the sole discretion of the Residence Office.</li>
                    </ul>
                </section>

                <section id="facilities-services" className="accommodation-facilities-services">
                    <h2>Facilities Services</h2>
                    <div className="accommodation-accordion">
                        {['Air Conditioning', 'Clothing Donation Bins', 'Garbage and Recycling', 'Heating', 'Kitchen and Microwave Rooms', 'Light Bulb Replacement', 'Locking Doors', 'Pest Control'].map((title, index) => (
                            <div className="accommodation-accordion-item" key={index}>
                                <button
                                    className={`accommodation-accordion-button ${activeIndex === index ? 'active' : ''}`}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    {title}
                                </button>
                                <div className={`accommodation-accordion-content ${activeIndex === index ? 'open' : ''}`}>
                                    {title === 'Air Conditioning' && (
                                        <p>
                                            All of the cooling systems in Residences rely on a process called "convection" where cold water circulates through a pipe inside a metal cover and the cooled air surrounding the pipe rises into the room. The water in each residence building is cooled with a chilled water system which is produced at the Energy Conservation Centre (ECC) and distributed through underground pipes to all the major buildings.
                                        </p>
                                    )}
                                    {title === 'Clothing Donation Bins' && (
                                        <p>
                                            If you would like to give away old clothing, donation bins are located in the residence buildings.
                                        </p>
                                    )}
                                    {title === 'Garbage and Recycling' && (
                                        <p>
                                            Garbage bins are located on each floor and are regularly emptied. Glass and sharp objects should be placed beside the regular garbage, use caution. Blue and red boxes are provided for recycling of aluminum cans, fine paper, glass, and newspaper.
                                        </p>
                                    )}
                                    {title === 'Heating' && (
                                        <p>
                                            All of the heating systems in Residences rely on a process called "convection" where hot water circulates through a finned pipe inside a metal cover and the heated air surrounding the pipe rises into the room. The water in each residence building is heated with steam which is produced at the Energy Conservation Centre (ECC) and distributed through underground pipes to all the major buildings. It is important that the area around the heating unit is kept clear at all times. The system relies on natural convection and anything in the path of the air entering or leaving the convector can seriously reduce the heating capacity. Leaving the window open will cause pipes to freeze. Please ensure all windows are closed.
                                        </p>
                                    )}
                                    {title === 'Kitchen and Microwave Rooms' && (
                                        <p>
                                            Microwaves located in microwave rooms or in kitchens are for your use. You are responsible for cleaning microwaves and kitchens after each use. You will be charged for damage to the microwave from misuse or abuse. Kitchens/microwave rooms may be closed by Residence staff if they are not kept clean (for more details, refer to Damages Policy under Residence Community Standards).
                                        </p>
                                    )}
                                    {title === 'Light Bulb Replacement' && (
                                        <p>
                                            Ceiling lights and burned out light bulbs on desk lamps requiring bulb replacements should be reported by submitting a work order request online.
                                        </p>
                                    )}
                                    {title === 'Locking Doors' && (
                                        <p>
                                            All residence buildings have a tap card access security system on the front doors. You will use your student card to enter the building where you live. Once inside the building, your room key gives you access to your room with the exception of Alumni Hall. In Alumni Hall, use your student card to swipe into your suite and then use your key to enter your room, located inside the suite.
                                        </p>
                                    )}
                                    {title === 'Pest Control' && (
                                        <p>
                                            There is a Pest Control company that provides monthly service in the residence buildings. If you are concerned with pests in your room or on your floor, document your issue in the Pest Control binder found in the lobby of your building. You can also contact your Facilities Coordinator for assistance at: alumnifc@uwindsor.ca, cartierfc@uwindsor.ca, laurierfc@uwindsor.ca. Avoid pests by properly storing food in your fridge and by keeping your room clean of garbage.
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                {/* NEW CHANGES  */}
                <section id="house-polices" className="accommodation-facilities-services">

                    <h2> Housing Policies</h2>
                    <p>Housing and Residence Life is committed to ensuring policies and procedures are readily available to current and future residents. At this time the policies can be found throughout our website and within the residence agreement.</p>

                    <p>If you do have any questions about our policies please email <strong>resservices@uwindsor.ca</strong> for support.</p>

                </section>
                <section id="Residence-Fees" className="accommodation-facilities-services">
                    <h2>Residence Fees</h2>

                    <div className="fees-container">
                        <h2>Fees - Winter 2025</h2>
                        <p>
                            Meal Plans are mandatory for Residence Students. Please go to for {' '}
                            <a href="https://www.uwindsor.ca/foodservices/meal-plan-rates" target="_blank" rel="noopener noreferrer">
                            Meal Plan rates.
                            </a>{' '}
                            
                        </p>
                        <table className="fees-table">
                            <thead>
                                <tr>
                                    <th>Building</th>
                                    <th>Winter 2025</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Alumni Hall - Single</td>
                                    <td>$4,763</td>
                                </tr>
                                <tr>
                                    <td>Cartier Hall - Double</td>
                                    <td>$4,379</td>
                                </tr>
                                <tr>
                                    <td>Laurier Hall - Single</td>
                                    <td>$4,166</td>
                                </tr>
                                <tr>
                                    <td>Laurier Hall - Double</td>
                                    <td>$3,375</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="note">
                            *The residence fees listed above have been approved by the Board of Governors, May 2024
                        </p>
                        <ul className="additional-info">
                            <li>Meal Plans are mandatory for Residence students</li>
                            <li>
                                All University fees including Residence Fees are payable in two instalments
                                <ul>
                                    <li>Winter fees are due December 15, 2024</li>
                                </ul>
                            </li>
                        </ul>
                        <p>To calculate your approximate university expenses, click on the button below.</p>
                        <a
                            href="https://www.uwindsor.ca/finance/fee-estimator"
                            className="fee-estimator-button"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Take Me to the Fee Estimator
                        </a>
                    </div>
                </section>
                <section id="Meal-Plan" className="accommodation-facilities-services">
                    <h2>Meal Plans</h2>
                    <div className="accommodation-accordion">
                        {['How does the meal plan work?', 'Understanding meal plans', 'To check your meal plan balance', 'Change your meal plan', 'Meal plan payment information', 'Meal plan policy', 'Meal plan agreement', 'Contact for more information'].map((title, index) => (
                            <div className="accommodation-accordion-item" key={index}>
                                <button
                                    className={`accommodation-accordion-button ${activeIndex === index ? 'active' : ''}`}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    {title}
                                </button>
                                <div className={`accommodation-accordion-content ${activeIndex === index ? 'open' : ''}`}>
                                    {title === 'How does the meal plan work?' && (
                                        <p>
                                            Your meal plan information is encoded on your UwinCARD which works like a debit card. Simply present your UwinCARD each time you make a purchase, and the total is automatically deducted from your account. The cards can also be used for purchases at our vending machines on campus, and with our off-campus partners.
                                        </p>
                                    )}
                                    {title === 'Understanding meal plans' && (
                                        <div>
                                            <ol>
                                                <li>
                                                    <strong>Basic Plan:</strong> A tax-exempt account for use at all food locations on campus.
                                                </li>
                                                <li>
                                                    <strong>Flex Plan:</strong> A taxable account used for taxable food purchases on campus, at our convenience store, for vending purchases or at our off-campus partners.
                                                </li>
                                            </ol>
                                            <p>
                                                Students can add money to their meal plan accounts at the UwinCARD Office in the Joyce Entrepreneurship Building (west side entrance).
                                            </p>
                                            <p>
                                                <a href="#" style={{ color: '#0056b3', textDecoration: 'none' }}>
                                                    Students can also add money to their meal plan accounts online (available September–April).
                                                </a>
                                            </p>
                                            <p>
                                                <strong>Note:</strong> 50% of your meal plan will be automatically set aside at the beginning of the semester for overhead fees; however, with every purchase made on campus (excluding our Off Campus Partners), a 50% discount will be applied at the cash register. Account balances will carry over from the fall semester to the winter semester.
                                            </p>
                                        </div>

                                    )}
                                    {title === 'To check your meal plan balance' && (
                                        <div>
                                            <h3>To check your meal plan balance/history, you can:</h3>
                                            <ul>
                                                <li>
                                                    Ask a cashier at the time of your purchase to give you the balance on your meal plan.
                                                </li>
                                                <li>
                                                    Visit <strong>GET Mobile</strong> to view your meal plan balance and history for the past 30 days.
                                                </li>
                                                <li>
                                                    Go to the UwinCARD Office located in Room B-07 (Basement) CAW Student Centre (year-round).
                                                </li>
                                            </ul>

                                            <h3>To add funds to your meal plan, you can:</h3>
                                            <ul>
                                                <li>
                                                    Go to the UwinCARD Office located in the Joyce Entrepreneurship Building (west side entrance).
                                                </li>
                                            </ul>

                                            <h3>If you are experiencing difficulties with managing your meal plan, please follow these instructions:</h3>
                                            <ul>
                                                <li>
                                                    <strong>How do I check my balance and/or transaction history?</strong>
                                                </li>
                                                <li>
                                                    <strong>How do I add funds to my UwinCARD?</strong>
                                                </li>
                                                <li>
                                                    Contact the UwinCARD Office at <a href="mailto:uwincard@uwindsor.ca">uwincard@uwindsor.ca</a> or 519-253-3000 ext. 8946.
                                                </li>
                                            </ul>

                                            <p>
                                                <strong>Please note:</strong> Meal Plan balances cannot be used to pay other fees owed to the University.
                                            </p>
                                        </div>

                                    )}
                                    {title === 'Change your meal plan' && (
                                        <div>
                                            <p>
                                                You may switch to a lower meal plan in the first month of each semester; however, you can upgrade your meal plan at any time during the (Fall/Winter) semester.
                                            </p>
                                            <h3>The deadline to reduce your meal plan is as follows:</h3>
                                            <ul>
                                                <li><strong>September 30th:</strong> Fall Semester</li>
                                                <li><strong>January 31st:</strong> Winter Semester</li>
                                            </ul>
                                            <p>
                                                To change your meal plan, please fill out the form found here:
                                                <a href="#" style={{ color: '#0056b3', textDecoration: 'none' }}> change your Meal Plan online</a>.
                                            </p>
                                            <p>
                                                Please note that it might take up to five business days before you will see the change on your Meal Plan Account.
                                                Students are not allowed to minimize their meal plans after the deadlines above as per the Residence Licence & Meal Plan Agreement.
                                            </p>
                                        </div>

                                    )}
                                    {title === 'Meal plan payment information' && (
                                        <div>
                                            <h3>Meal Plan fees are payable each semester with the following deadlines:</h3>
                                            <ul>
                                                <li><strong>August 15th:</strong> Fall Semester</li>
                                                <li><strong>December 15th:</strong> Winter Semester</li>
                                            </ul>
                                            <p>
                                                Payment for your meal plan is charged in two installments – at the beginning of each semester. Your meal plan will be billed with your Residence & Tuition Fees on your SIS Account.
                                            </p>
                                            <p>
                                                Payments for your meal plan need to be forwarded to the Cashier's Office, located in Room 1118 of Chrysler North Building.
                                            </p>
                                        </div>

                                    )}
                                    {title === 'Meal plan policy' && (
                                        <div>
                                            <p>
                                                The residence meal plan is in effect from <strong>September 2024</strong> and will expire on <strong>April 25, 2025</strong> at 3:00 pm.
                                                All students that live in residence are required to purchase a meal plan each semester.
                                            </p>
                                            <p>
                                                The meal plan may only be used to purchase food and non-alcoholic beverages in Food Services outlets designated by the university,
                                                our off-campus partners, and vending machines on campus. Meal plans cannot be used to purchase alcohol or gift certificates from
                                                any of our off-campus partners and may not be used to pay any other fees owed to the University of Windsor.
                                            </p>
                                        </div>

                                    )}
                                    {title === 'Meal plan agreement' && (
                                        <div>
                                            <p>
                                                The residence meal plan is in effect from <strong>September 2024</strong> and will expire on <strong>April 25, 2025</strong> at 3:00 pm.
                                                All students that live in residence are required to purchase a meal plan each semester.
                                            </p>
                                            <p>
                                                The meal plan may only be used to purchase food and non-alcoholic beverages in Food Services outlets designated by the university,
                                                our off-campus partners, and vending machines on campus. Meal Plans cannot be used to purchase alcohol or gift certificates from
                                                any of our off-campus partners and may not be used to pay any other fees owed to the University of Windsor.
                                            </p>
                                        </div>

                                    )}
                                    {title === 'Contact for more information' && (
                                        <div>
                                            <p>
                                                If you have any questions or concerns regarding your meal plan, please contact the UwinCARD Office at:
                                            </p>
                                            <ul>
                                                <li>
                                                    <strong>Phone:</strong> 519-253-3000 ext. 8946
                                                </li>
                                                <li>
                                                    <strong>Email:</strong> <a href="mailto:uwincard@uwindsor.ca">uwincard@uwindsor.ca</a>
                                                </li>
                                            </ul>
                                        </div>

                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>





                {/* END OF NEW CHANGES */}
            </div >
            <StudentHub/>
            <Footer />
        </div >
    );
}

export default ResidenceInfo;
