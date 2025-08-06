import React, { useState, useEffect } from 'react';

const Card = ({ image, title, buttonText, onButtonClick }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="card position-relative" style={{ width: '18rem' }}>
            {loading && (
                <div
                    className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center"
                    style={{ background: 'rgba(255,255,255,0.7)', zIndex: 2, top: 0, left: 0 }}
                >
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
            <img src={image} className="card-img-top" alt="Card" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <button style={{ background: "linear-gradient(to right, #628dc8, #f58b7c)" }}
                    className="btn btn-primary"
                    onClick={onButtonClick}
                    disabled={loading}
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default Card;