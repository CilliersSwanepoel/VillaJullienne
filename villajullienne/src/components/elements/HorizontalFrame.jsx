import React from 'react';

function HFrame() {
    return (
        <div className="horizontal-frame">
            <div className="frame-content">
                <div
                    style={{
                        width: '100%',
                        height: '150px',
                        border: '2px dashed #ccc',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#aaa',
                        fontSize: '1.2rem',
                        background: '#fafafa'
                    }}
                >
                    Image
                </div>
            </div>
        </div>
    );
}

export default HFrame;