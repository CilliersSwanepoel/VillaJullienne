import React from 'react';
import "/src/static/css/elements/Footer.css";

const Footer = () => (
    <footer style={{
        background: '#000000',
        color: '#ffffff',
        padding: '20px',
        textAlign: 'center',
        borderTop: '1px solid #eaeaea'
    }}>
        <div>
            <strong>Address:</strong> Corner Penryn Road and Kingfisher Ave, Drumrock, Mbombela

        </div>
        <div>
            <strong>Email:</strong> <a href="mailto:info@example.com">reservations@villajullienne.co.za</a>
        </div>
        <div>
            <strong>Phone:</strong> <a href="tel:+27612951130">+27 61 295 1130</a>
        </div>
    </footer>
);

export default Footer;