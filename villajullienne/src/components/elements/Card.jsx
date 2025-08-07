import React from 'react';

function Card({ image, title, buttonText }) {
    return (
        <div
            style={{
                maxWidth: '320px',
                borderRadius: '1.2rem',
                overflow: 'hidden',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
                backgroundColor: '#fff',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease',
            }}
        >
            <img
                src={image}
                alt={title}
                style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                }}
            />

            <div style={{ padding: '1rem', textAlign: 'center' }}>
                <h3
                    style={{
                        margin: '0.5rem 0',
                        fontWeight: '600',
                        fontSize: '1.2rem',
                        color: '#333',
                    }}
                >
                    {title}
                </h3>

                <button
                    style={{
                        marginTop: '0.8rem',
                        padding: '0.6rem 1.2rem',
                        background: 'linear-gradient(to right, #628dc8, #f58b7c)',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '2rem',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '0.9rem',
                        transition: 'background 0.3s ease',
                    }}
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
}

export default Card;
