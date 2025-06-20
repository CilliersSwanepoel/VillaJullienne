import React, { useState } from "react";
import calendarIcon from '../../static/assets/icons/calendar-event.svg';
import navbarLogo from '../../static/assets/icons/navbar-logo.png';


const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    // Simple dropdown styles
    const dropdownStyles = {
        opacity: dropdownOpen ? 1 : 0,
        transform: dropdownOpen ? 'translateY(0)' : 'translateY(-8px)',
        pointerEvents: dropdownOpen ? 'auto' : 'none',
        transition: 'opacity 0.2s, transform 0.2s',
        position: "absolute",
        top: "100%",
        left: 0,
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        borderRadius: "6px",
        listStyle: "none",
        margin: 0,
        padding: "0.25rem 0",
        minWidth: "140px",
        zIndex: 1000,
        border: '1px solid #e0e0e0',
    };
    const dropdownItemStyle = {
        padding: '0.5rem 1rem',
        color: '#222',
        textDecoration: 'none',
        background: 'none',
        border: 'none',
        borderRadius: 0,
        display: 'block',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'background 0.15s',
    };
    const dropdownItemHover = {
        background: '#f2f2f2',
    };
    return (
        <nav style={{ width: "100%", background: "#f8f9fa", padding: "1rem 0" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2rem" }}>
                {/* Logo or Brand */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <img src={navbarLogo} alt="Villa Jullienne Logo" style={{ height: '50px', width: 'auto', display: 'block' }} />
                    <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                        Villa Jullienne
                    </span>
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
                        <ul style={dropdownStyles}>
                            {[
                                { href: "#restaurant", label: "Restaurant" },
                                { href: "#salon", label: "Salon" },
                                { href: "#artgallery", label: "Art Gallery" },
                                { href: "#chapel", label: "Chapel" },
                                { href: "#communalpool", label: "Communal Pool" },
                            ].map((item, idx) => (
                                <li key={item.href} style={{ margin: 0 }}>
                                    <a
                                        href={item.href}
                                        style={dropdownItemStyle}
                                        onMouseEnter={e => e.target.style.background = dropdownItemHover.background}
                                        onMouseLeave={e => e.target.style.background = dropdownItemStyle.background}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
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