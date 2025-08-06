import React from 'react';
import HFrame from '../elements/HorizontalFrame';
import TopView from '../../static/assets/page/villas/WhatsApp Image 2025-07-01 at 08.16.47_eb7ebe11.jpg';
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
                        backgroundImage: `url(${TopView})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        filter: 'blur(4px) brightness(1.0)',
                        zIndex: 0
                    }}
                />
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <h1 style={{ color: '#fff', margin: 0, padding: '1em', fontSize: '6rem' }}>
                        Our Units @ Villa Jullienne
                    </h1>
                    <h2 style={{ color: '#fff', margin: 0, padding: '0 1em' }}></h2>
                </div>
            </div>

            <HFrame imageSrc={AmenitiesIcons} />

        </div>
    );
}

export default Villas;