import React from 'react';

const Footer = () => {
    return (
        <footer className="pt-5" style={{ textAlign: 'center' }}>
            <p>&copy; {new Date().getFullYear()} LankaEstate. All rights reserved.</p>
        </footer>
    );
};

export default Footer;