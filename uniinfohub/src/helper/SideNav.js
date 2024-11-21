import React from 'react';
import '../css/SideNav.css';

function SideNav() {
    return (
        <aside className="side-nav">
            <h3>In This Section</h3>
            <ul className="nav-list">
                <li className="nav-item active">
                    <a href="#overview">Overview</a>
                </li>
                <li className="nav-item">
                    <a href="#deadlines">Deadlines, Periods, and Costs</a>
                </li>
                <li className="nav-item">
                    <a href="#documents">Required Documents</a>
                </li>
                <li className="nav-item">
                    <a href="#opt-in">Opt-In Information</a>
                </li>
                <li className="nav-item">
                    <a href="#opt-in-form">Opt-In Application Form</a>
                </li>
                <li className="nav-item">
                    <a href="#opt-out">Opt-Out Information</a>
                </li>
                <li className="nav-item">
                    <a href="#opt-out-form">Opt-Out Application Form</a>
                </li>
                <li className="nav-item">
                    <a href="#card-pickup">Card Pickup</a>
                </li>
                <li className="nav-item">
                    <a href="#replacement-cards">Replacement Cards</a>
                </li>
                <li className="nav-item">
                    <a href="#faqs">Frequently Asked Questions</a>
                </li>
                <li className="nav-item">
                    <a href="#related-links">Related Links</a>
                </li>
            </ul>
        </aside>
    );
}

export default SideNav;
