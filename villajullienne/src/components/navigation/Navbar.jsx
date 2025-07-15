import React, { useState, useRef } from "react";
import calendarIcon from '../../static/assets/icons/calendar-event.svg';
import navbarLogo from '../../static/assets/icons/navbar-logo.png';

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#villas", label: "Villas" },
    { href: "#about", label: "About" },
];

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownTimeout = useRef(null);

    const handleDropdownEnter = () => {
        if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
        setDropdownOpen(true);
    };

    const handleDropdownLeave = () => {
        dropdownTimeout.current = setTimeout(() => {
            setDropdownOpen(false);
        }, 500);
    };

    const dropdownStyles = {
        opacity: dropdownOpen ? 1 : 0,
        transform: dropdownOpen ? 'translateY(0)' : 'translateY(-8px)',
        pointerEvents: dropdownOpen ? 'auto' : 'none',
        transition: 'opacity 0.2s, transform 0.2s',
        position: "absolute",
        top: "120%",
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
        <nav style={{
            width: "100%",
            background: "#f8f9fa",
            padding: "1rem 0",
            position: "fixed",   // ✅ stays on top during scroll
            top: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
        }}>
            <style>{`
        .nav-underline {
          position: relative;
          text-decoration: none;
          color: #333;
          padding-bottom: 2px;
          cursor: pointer;
        }
        .nav-underline::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%) scaleX(0);
          transform-origin: center;
          width: 100%;
          height: 2px;
          background: #f8b195;
          transition: transform 0.3s cubic-bezier(.4,0,.2,1);
        }
        .nav-underline:hover::after,
        .nav-underline:focus::after {
          transform: translateX(-50%) scaleX(1);
        }
      `}</style>

            {/* Rainbow wave SVG */}
            <div style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                width: '100%',
                height: '30px',
                pointerEvents: 'none',
                zIndex: 1
            }}>
                <svg viewBox="0 0 1440 24" width="100%" height="100%" preserveAspectRatio="none" style={{ display: 'block' }}>
                    <defs>
                        <linearGradient id="rainbow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#f8b195" />
                            <stop offset="16%" stopColor="#f6eac2" />
                            <stop offset="33%" stopColor="#b5ead7" />
                            <stop offset="50%" stopColor="#c7ceea" />
                            <stop offset="66%" stopColor="#a7c7e7" />
                            <stop offset="83%" stopColor="#d4a5a5" />
                            <stop offset="100%" stopColor="#f8b195" />
                        </linearGradient>
                    </defs>
                    <path d="M0,12 C360,36 1080,-12 1440,12 L1440,24 L0,24 Z" fill="url(#rainbow-gradient)" />
                </svg>
            </div>

            <div style={{
                maxWidth: "1200px",
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 2rem"
            }}>
                {/* Logo and Brand */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <img src={navbarLogo} alt="Villa Jullienne Logo" style={{ height: '50px', width: 'auto', display: 'block' }} />
                    <span style={{ fontWeight: "bold", fontSize: "2.0rem" }}>
            Villa Jullienne
          </span>
                </div>

                {/* Navigation Links */}
                <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", position: "relative" }}>
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="nav-underline">
                            {link.label}
                        </a>
                    ))}

                    {/* Dropdown */}
                    <div
                        style={{ position: "relative" }}
                        onMouseEnter={handleDropdownEnter}
                        onMouseLeave={handleDropdownLeave}
                    >
                        <a href="#amenities" className="nav-underline">Amenities</a>
                        <ul style={dropdownStyles}>
                            {[
                                { href: "#restaurant", label: "Restaurant" },
                                { href: "#artgallery", label: "Art Gallery" },
                                { href: "#chapel", label: "Chapel" },
                                { href: "#communalpool", label: "Communal Pool" },
                            ].map((item) => (
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

                    {/* Book Now */}
                    <a
                        href="#booknow"
                        className="nav-underline"
                        style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                    >
                        Book Now
                        <img src={calendarIcon} alt="Book Now" style={{ width: '20px', height: '20px', verticalAlign: 'middle' }} />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
