import React from 'react';
import '../../../src/css/footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-about">
                    <h3>About</h3>
                    <p>UniInfoHub is a centralized platform designed to simplify university life for students by providing easy access to essential resources, services, and information in one place. From health services to transit details and academic schedules, UniInfoHub is here to streamline and enhance the student experience.</p>
                </div>
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="https://www.uwindsor.ca/registrar/uwinsite-student">Uwinsite</a></li>
                        <li><a href="https://brightspace.uwindsor.ca/d2l/login">Brightspace</a></li>
                        <li><a href="https://www.uwindsor.ca/directory">University Directory</a></li>
                        <li><a href="https://ask.uwindsor.ca/">ask.uwindsor</a></li>
                        <li><a href="https://www.uwindsor.ca/supportuwindsor/">Support Uwindsor</a></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="https://www.uwindsor.ca/foodservices/">Food Services</a></li>
                        <li><a href="https://www.uwindsor.ca/residence/">Residence</a></li>
                        <li><a href="https://www.uwindsor.ca/residence/">International Student Centre</a></li>
                        <li><a href="https://epicentreuwindsor.ca/">Epicentre</a></li>
                        <li><a href="https://maps.mapsted.com/uwindsor">Campus Maps</a></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="https://www.uwindsor.ca/science/computerscience/">School Of Computer Science</a></li>
                        <li><a href="https://www.uwindsor.ca/science/computerscience/event-calendar/month">CS Events</a></li>
                        <li><a href="https://www.future.uwindsor.ca/program-listing/?filter=Graduate">Graduate Studies</a></li>
                        <li><a href="https://www.uwindsor.ca/coop-workplace-partnerships/">Co-OP Education</a></li>
                        <li><a href="https://uwindsorgss.ca/">Graduate Student Society</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
