import React from 'react';
import Navbar from '../../header/navbar';
import Footer from '../../footer/footer';

const Success = () => {
    return (
        <>
            <Navbar />
            <div style={{ textAlign: 'center', padding: '50px' }}>
                <h1>Payment Successful!</h1>
                <p>
                    Thank you for your payment. Your UWinCard will be updated shortly. 
                    You will receive a confirmation email at the email address you provided.
                </p>
                <a href="/" style={{ textDecoration: 'none', color: '#007bff', fontSize: '18px' }}>
                    Return to Home
                </a>
            </div>
            <Footer />
        </>
    );
};

export default Success;
