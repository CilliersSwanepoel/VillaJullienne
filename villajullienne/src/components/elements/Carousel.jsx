import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";


/**
 * ReusableCarousel Component
 *
 * Props:
 * - slides: Array of objects with shape:
 *   {
 *     image: string (URL),
 *     heading?: string,
 *     text?: string
 *   }
 */
function ReusableCarousel({ slides = [] }) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {slides.map((slide, idx) => (
                <Carousel.Item key={idx}>
                    <img
                        className="d-block w-100"
                        src={slide.image}
                        alt={slide.heading || `Slide ${idx + 1}`}
                    />
                    {(slide.heading || slide.text) && (
                        <Carousel.Caption>
                            {slide.heading && <h3>{slide.heading}</h3>}
                            {slide.text && <p>{slide.text}</p>}
                        </Carousel.Caption>
                    )}
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default ReusableCarousel;
