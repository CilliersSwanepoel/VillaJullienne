import React from 'react';
import Card from "../elements/Card";
import HFrame from '../elements/HorizontalFrame';
import OceanRoom from '../../static/assets/page/villas/WhatsApp Image 2025-07-01 at 08.16.47_eb7ebe11.jpg';
import AmenitiesIcons from '../../static/assets/icons/AmenitiesIcons.png';

function Villas() {
    return (
        <div style={{ marginTop: 80 }}>
            <div
                style={{
                    position: 'relative',
                    width: '100vw',
                    height: '40vh',
                    margin: 0,
                    padding: 0,
                    overflow: 'hidden',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: '-10px',
                        left: '-10px',
                        width: 'calc(100% + 20px)',
                        height: 'calc(100% + 20px)',
                        backgroundImage: `url(${OceanRoom})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        filter: 'blur(4px) brightness(1.0)',
                        zIndex: 0
                    }}
                />
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <h1 style={{ color: '#fff', margin: 0, padding: '1em', fontSize: '6rem',  textShadow: '0 4px 16px rgba(0,0,0,0.6), 0 1.5px 3px rgba(0,0,0,0.4)' }}>
                        Our Units @ Villa Jullienne
                    </h1>
                    <h2 style={{ color: '#fff', margin: 0, padding: '0 1em', textShadow: '0 4px 16px rgba(0,0,0,0.6), 0 1.5px 3px rgba(0,0,0,0.4)' }}>Charm Meets Modern Comfort</h2>
                </div>
            </div>

            <HFrame imageSrc={AmenitiesIcons} />

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '2rem',
                    padding: '2rem 0',
                    justifyItems: 'center'
                }}
            >
                <Card
                    image={OceanRoom}
                    title="Villa Jullienne"
                    buttonText="Book Now"
                />

                <Card
                    image={OceanRoom}
                    title="Villa Jullienne"
                    buttonText="Book Now"
                />

                <Card
                    image={OceanRoom}
                    title="Villa Jullienne"
                    buttonText="Book Now"
                />
                {/* Add more <Card /> components here for more grid items */}
            </div>
        </div>
    );
}

export default Villas;