import React, { useState } from "react";
import calendarIcon from '../../static/assets/icons/calendar-event.svg';


const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    return (
        <nav style={{ width: "100%", background: "#f8f9fa", padding: "1rem 0" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2rem" }}>
                {/* Logo or Brand */}
                <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                    Villa Jullienne
                </div>
                {/* Navigation Links */}
                <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", position: "relative" }}>
                    <a href="#home" style={{ textDecoration: "none", color: "#333" }}>Home</a>
                    <a href="#villas" style={{ textDecoration: "none", color: "#333" }}>Villas</a>
                    <div style={{ position: "relative" }}
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                    >
                    <a href="#amenities" style={{ textDecoration: "none", color: "#333", position: "relative" }}>Amenities</a>
                        <ul style={{
                            display: dropdownOpen ? "block" : "none",
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            background: "transparent",
                            boxShadow: "none",
                            listStyle: "none",
                            margin: 0,
                            padding: "0.5rem 0",
                            minWidth: "150px",
                            zIndex: 1000
                        }}>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#restaurant" style={{ display: "block", padding: "0.5rem 1rem", color: "#333", textDecoration: "none", whiteSpace: "nowrap", background: '#b3d8fd', borderRadius: '10px 50px 15px', transition: 'background 0.2s', border: '1px solid #000' }} onMouseEnter={e => e.target.style.background = '#90c7fa'} onMouseLeave={e => e.target.style.background = '#b3d8fd'}>Restaurant</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#salon" style={{ display: "block", padding: "0.5rem 1rem", color: "#333", textDecoration: "none", whiteSpace: "nowrap", background: '#ffd1c1', borderRadius: '10px 50px 15px', transition: 'background 0.2s', border: '1px solid #000' }} onMouseEnter={e => e.target.style.background = '#ffb6a7'} onMouseLeave={e => e.target.style.background = '#ffd1c1'}>Salon</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#artgallery" style={{ display: "block", padding: "0.5rem 1rem", color: "#333", textDecoration: "none", whiteSpace: "nowrap", background: '#fff8dc', borderRadius: '10px 50px 15px', transition: 'background 0.2s', border: '1px solid #000' }} onMouseEnter={e => e.target.style.background = '#ffe4b5'} onMouseLeave={e => e.target.style.background = '#fff8dc'}>Art Gallery</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#chapel" style={{ display: "block", padding: "0.5rem 1rem", color: "#333", textDecoration: "none", whiteSpace: "nowrap", background: '#e6e6fa', borderRadius: '10px 50px 15px', transition: 'background 0.2s', border: '1px solid #000' }} onMouseEnter={e => e.target.style.background = '#d1c4e9'} onMouseLeave={e => e.target.style.background = '#e6e6fa'}>Chapel</a></li>
                            <li><a href="#communalpool" style={{ display: "block", padding: "0.5rem 1rem", color: "#333", textDecoration: "none", whiteSpace: "nowrap", background: '#b2fff7', borderRadius: '10px 50px 15px', transition: 'background 0.2s', border: '1px solid #000' }} onMouseEnter={e => e.target.style.background = '#a0e7e5'} onMouseLeave={e => e.target.style.background = '#b2fff7'}>Communal Pool</a></li>
                        </ul>
                    </div>
                    <a href="#about" style={{ textDecoration: "none", color: "#333" }}>About</a>
                    <a href="#booknow" style={{ textDecoration: "none", color: "#333", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        Book Now
                        <img src={calendarIcon} alt="Book Now" style={{ width: '20px', height: '20px', verticalAlign: 'middle' }} />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;