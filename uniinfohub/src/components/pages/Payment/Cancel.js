import React from 'react';
import Navbar from '../../header/navbar';
import Footer from '../../footer/footer';

const Cancel = () => {
    return (
        <>
            <Navbar />
            <div style={{ textAlign: 'center', padding: '50px' }}>
                <h1>Payment Canceled</h1>
                <p>
                    You have canceled the payment process. If this was a mistake, you can try again by returning to the payment page.
                </p>
                <a href="/load-uwincard" style={{ textDecoration: 'none', color: '#007bff', fontSize: '18px' }}>
                    Return to Payment Page
                </a>
            </div>
            <Footer />
        </>
    );
};

export default Cancel;
