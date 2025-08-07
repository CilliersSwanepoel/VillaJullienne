import React from 'react';

function HFrame({ imageSrc }) {
    return (
        <div className="horizontal-frame">
            <div className="frame-content">
                {imageSrc ? (
                    <img
                        src={imageSrc}
                        alt="Amenities"
                        style={{
                            width: '100%',
                            height: '350px',
                            objectFit: 'contain',
                            display: 'block'
                        }}
                    />
                ) : (
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
                )}
            </div>
        </div>
    );
}

export default HFrame;