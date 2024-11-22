import React from 'react';
import Navbar from '../../header/navbar';
import Footer from '../../footer/footer';
//import bus_pass from '../../../assets/image/bus_pass.png'; 
import TW_Smart_Ride from '../../../assets/image/TW_Smart_Ride.png';
import TW_Smart_Pass from '../../../assets/image/TW_Smart_Pass.png';

//import PrivateTransport from '../../../assets/image/PrivateTransport.png';
import '../../../css/refillbuspass.css';

function OutsideUniBusPass() {
    return (
        <div>
            <Navbar />

            <section className="refill-buspass-bus-pass-outside-section">
                {/* Fares, Tickets, Passes Section */}
                <div className="refill-buspass-fares-tickets-section">
                    <h1>If you want to know about bus pass outside the university</h1>
                    <h2>Know more information about fares, tickets, passes</h2>
                    <p>Transit Windsor (TW) provides a range of fare payment options to suit your convenience. Below, you'll find the available options for bus passes and tickets.</p>
                    
                    <h3>Current Fares</h3>
                    <p>Every new smart card has an additional fee of $1.10 at the time of purchase.</p>

                    <h3>Cash Payments</h3>
                    <p>Cash payments on buses require <strong>exact fare</strong> as operators do not carry change and any overpayment cannot be refunded. </p>
                    <p>Unfortunately, debit and credit cards are <strong>not accepted</strong> for fare payment on the bus.</p>

                    <table className="refill-buspass-fare-table">
                        <thead>
                            <tr>
                                <th>Rider Type</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Adult, Senior, Youth <br /><small>(includes 2-hour transfer)</small></td>
                                <td>$3.75</td>
                            </tr>
                            <tr>
                                <td>Day Pass</td>
                                <td>$11.00</td>
                            </tr>
                            <tr>
                                <td>Child </td>
                                <td>free </td>
                            </tr>
                        </tbody>
                    </table>

                    <p className="refill-buspass-note">Note: Children 12 years of age and under are free on City service with a full paying passenger. If riding alone, qualifies as youth.</p>
                </div>

                {/* What Card is Right for You Section */}
                <div className="refill-buspass-cards-section">
                    <h2>Choosing the Right Card for You </h2>
                    <h4>If you're unsure which bus pass to get, here is a summary of the available options to help you decide:</h4>
                    <div className="refill-buspass-cards-container">
                        <div className="refill-buspass-card">
                            <img src={TW_Smart_Ride} alt="TW Smart Ride" className="refill-buspass-card-image" />
                            <div className="refill-buspass-card-details">
                                <h3>TW Smart Ride</h3>
                                <ul>
                                    <li>Loaded with a minimum of <strong>5 rides</strong>.</li>
                                    <li>Provides an automatic transfer, valid for <strong>2 hours</strong>.</li>
                                    <li><strong>Reloadable</strong> and can be used over and over again.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="refill-buspass-card">
                            <img src={TW_Smart_Pass} alt="TW Smart Pass" className="refill-buspass-card-image" />
                            <div className="refill-buspass-card-details">
                                <h3>TW Smart Pass</h3>
                                <ul>
                                    <li>Loaded with a minimum of <strong>15 days</strong>.</li>
                                    <li>Valid for <strong>consecutive days</strong> from the first tap on the farebox.</li>
                                    <li><strong>Reloadable</strong> and can be used over and over again.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Smart Ride Pricing Section */}
                <div className="refill-buspass-smart-ride-section">
                    <h2>Smart Ride</h2>
                    <table className="refill-buspass-pricing-table">
                        <thead>
                            <tr>
                                <th>Rider Type</th>
                                <th>10 Rides</th>
                                <th>5 Rides</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Adult (20 to 59)</td>
                                <td>$30.00</td>
                                <td>$15.00</td>
                            </tr>
                            <tr>
                                <td>Senior (60 and over)</td>
                                <td>$23.50</td>
                                <td>$11.75</td>
                            </tr>
                            <tr>
                                <td>Youth (13 to 19)</td>
                                <td>$23.50</td>
                                <td>$11.75</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Smart Pass Pricing Section */}
                <div className="refill-buspass-smart-pass-section">
                    <h2>Smart Pass</h2>
                    <table className="refill-buspass-pricing-table">
                        <thead>
                            <tr>
                                <th>Rider Type</th>
                                <th>30 Days</th>
                                <th>15 Days</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Adult (20 to 59)</td>
                                <td>$115.00</td>
                                <td>$57.00</td>
                            </tr>
                            <tr>
                                <td>Senior (60 and over)</td>
                                <td>$57.75</td>
                                <td>$29.00</td>
                            </tr>
                            <tr>
                                <td>Youth (13 to 19)</td>
                                <td>$78.50</td>
                                <td>$39.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default OutsideUniBusPass;
