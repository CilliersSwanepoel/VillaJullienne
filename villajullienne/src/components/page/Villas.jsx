import React from 'react';
import Card from "../elements/Card";
import HFrame from '../elements/HorizontalFrame';
import OceanRoom from '../../static/assets/page/villas/WhatsApp Image 2025-07-01 at 08.16.47_eb7ebe11.jpg';
import AmenitiesIcons from '../../static/assets/icons/AmenitiesIcons.png';

function Villas() {
    return (
        <div style={{ marginTop: '80px', overflowX: 'hidden' }}>
            {/* Banner Section */}
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '45vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                }}
            >
                {/* Blurred Background */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${OceanRoom})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        filter: 'blur(4px) brightness(1.0)',
                        zIndex: 0,
                    }}
                />

                {/* Foreground Text */}
                <div
                    style={{
                        position: 'relative',
                        zIndex: 1,
                        textAlign: 'center',
                        padding: '1rem',
                        color: '#fff',
                    }}
                >
                    <h1 style={{ fontSize: '5rem', margin: 0, textShadow: '0 4px 16px rgba(0,0,0,0.6)' }}>
                        Our Units @ Villa Jullienne
                    </h1>
                    <h2 style={{ marginTop: '0.5rem', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                        Charm Meets Modern Comfort
                    </h2>
                </div>
            </div>

            {/* Amenities */}
            <div style={{ marginTop: '3rem', boxShadow: '0 4px 16px rgba(0,0,0,0.2)', borderRadius: '8px', overflow: 'hidden' }}>
                <HFrame imageSrc={AmenitiesIcons} />
            </div>

            {/* Villa Cards Grid */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem',
                    padding: '3rem 2rem',
                }}
            >
                <Card image={OceanRoom} title="Unit 1 - Ciel Rouge" buttonText="Book Now" />
                <Card image={OceanRoom} title="Unit 3 - Lumière Noire" buttonText="Book Now" />
                <Card image={OceanRoom} title="Unit 5 - Bleu Nuit" buttonText="Book Now" />
                <Card image={OceanRoom} title="Unit 8 - Violette Noire" buttonText="Book Now" />
                <Card image={OceanRoom} title="Unit 9 - Rose Azur" buttonText="Book Now" />
                <Card image={OceanRoom} title="Unit 10 - Vert Calme" buttonText="Book Now" />

                {/* Add more <Card /> components as needed */}
            </div>
        </div>
    );
}

export default Villas;
