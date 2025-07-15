import React from 'react';

const Footer = () => (
    <footer style={{
        background: '#f8f8f8',
        padding: '20px',
        textAlign: 'center',
        borderTop: '1px solid #eaeaea'
    }}>
        <div>
            <strong>Address:</strong> 123 Main Street, City, Country
        </div>
        <div>
            <strong>Email:</strong> <a href="mailto:info@example.com">info@example.com</a>
        </div>
        <div>
            <strong>Phone:</strong> <a href="tel:+1234567890">+1 234 567 890</a>
        </div>
    </footer>
);

export default Footer;