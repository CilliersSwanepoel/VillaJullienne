import React from 'react';
import '../../static/css/page/Villas.css';
import TopView from '../../static/assets/page/homelanding/top_view.jpg';

function Villas() {
    return (
        <div style={{ marginTop: 80 }}>
            <div className='villas-welcome-message-container' style={{
                backgroundImage: `url(${TopView})`,
                position: 'relative',
                width: '100vw',
                height: '90vh',
                margin: 0,
                padding: 0,
                overflow: 'hidden',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <h1 className='villas-welcome-message-title'>Our Units @ Villa Jullienne</h1>
                <h2 className='villas-welcome-message-description'></h2>
            </div>
        </div>
    );
}

export default Villas;