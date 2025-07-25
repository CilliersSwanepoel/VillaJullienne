import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

function About() {
    return (
        <div style={{ marginTop: 80 }}>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Welcome to Villa Jullienne</Accordion.Header>
                    <Accordion.Body>
                        Escape to Elyon Panorama Village, nestled between the scenic towns of
                        White River and Nelspruit in the heart of Mpumalanga. Imagine waking to the
                        sounds of nature, the fresh mountain air invigorating your senses. Our village
                        offers an idyllic retreat where rustic charm meets modern comfort, creating the
                        perfect blend of tranquility and adventure. Spend your days exploring the
                        breathtaking beauty of Mpumalanga; picture yourself hiking through lush forests,
                        discovering hidden waterfalls, and taking in panoramic vistas that stretch as far
                        as the eye can see. <br/><br/> Evenings are spent unwinding in the peaceful ambiance of
                        our village, perhaps enjoying a delicious meal at a local restaurant or simply
                        relaxing on your private veranda, taking in the stunning sunset. Elyon Panorama
                        Village provides the perfect base for exploring all that Mpumalanga has to offer,
                        while also providing a tranquil haven where you can escape the everyday hustle
                        and bustle and reconnect with yourself and nature. Come and experience the magic
                        of Mpumalanga from this ideal location. Whether you seek adventure or relaxation,
                        Elyon Panorama Village promises an unforgettable escape.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What Facilities We Offer</Accordion.Header>
                    <Accordion.Body>
                        Nestled between White River and Nelspruit, Elyon Panorama Village offers a unique escape in the heart of Mpumalanga.
                        <br/>
                        <br/>
                        Imagine waking to breathtaking panoramic views, surrounded by the tranquil beauty of nature and the sounds of abundant birdlife.
                        Our village provides the perfect blend of rustic charm and modern comfort, creating an idyllic setting for relaxation and adventure.
                        <br/>
                        <br/>
                        <h6>Experience the Difference:</h6>
                        <ul>
                            <li><b>Art & Culture:</b> Immerse yourself in the local art scene at our gallery, showcasing the works of talented Mpumalanga artists.</li>
                            <li><b>Culinary Delights:</b> Savor delicious meals throughout the day at our restaurant, featuring fresh, locally-sourced ingredients.</li>
                            <li><b>Rejuvenation & Wellness:</b> Pamper yourself at our tranquil salon and spa, offering a range of treatments designed to restore and revitalize.</li>
                            <li><b>Celebrations:</b> Our picturesque chapel provides a stunning backdrop for weddings and other special events.</li>
                            <li><b>Modern Comforts:</b> Enjoy complimentary WiFi, satellite TV, and attentive housekeeping services for a truly relaxing stay.</li>
                        </ul>

                        <h6>Ideal for:</h6>
                        <ul>
                            <li><b>Corporate Retreats:</b> Our inspiring setting is perfect for team-building activities and year-end functions.</li>
                            <li><b>Nature Enthusiasts:</b> Explore the natural beauty of Mpumalanga with easy access to hiking trails and stunning vistas.</li>
                            <li><b>Travelers: Conveniently</b> located for exploring the region, including the iconic Kruger National Park.</li>
                        </ul>
                        <br/>
                        Elyon Panorama Village offers a memorable escape, whether you seek adventure, relaxation, or a unique blend of both. Come experience the magic of Mpumalanga.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Why Choose Villa Jullienne?</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>How to Contact Us</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default About;