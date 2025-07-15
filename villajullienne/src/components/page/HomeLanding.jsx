import React, { useEffect, useState } from "react";
import "/src/static/css/page/HomeLanding.css";
import ReusableCarousel from "../elements/Carousel.jsx";
import Button from "react-bootstrap/Button";
import Footer from "../elements/Footer.jsx";

const HomeLanding = () => {
    const [shrink, setShrink] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShrink(window.scrollY > 60);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className={`welcome-container${shrink ? " shrink" : ""}`}>
                <img
                    src="/src/static/assets/page/homelanding/top_view.jpg"
                    alt="Villa Jullienne"
                    className="welcome-image"
                />
                <div className="welcome-message">
                    <h1>WELCOME <br/> to <br/> Elyon Panorama Village</h1>
                    <p>A HOME AWAY FROM HOME</p>
                </div>
            </div>

            <div className="room-overview-container">
                <div className="carousel-text-wrapper">
                    <div className="carousel-text">
                        <h2 className="gradient-heading fade-in">UNWIND IN SERENE COMFORT</h2>
                        <p className="subheading fade-in">
                            Discover the tranquil charm of our Units—where elegance meets relaxation. Unwind in thoughtfully designed spaces, each offering a serene escape from the everyday.
                        </p>
                    </div>

                    <div className="carousel-box fade-in">
                        <ReusableCarousel
                            slides={[
                                { image: "/src/static/assets/page/homelanding/blue.jpg" },
                                { image: "/src/static/assets/page/homelanding/ocean.jpg" },
                                { image: "/src/static/assets/page/homelanding/orange.jpg" },
                                { image: "/src/static/assets/page/homelanding/purple.jpg" },
                                { image: "/src/static/assets/page/homelanding/red.jpg" },
                                { image: "/src/static/assets/page/homelanding/yellow.jpg" }
                            ]}
                        />
                    </div>
                </div>

                <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem", marginBottom: "2rem" }}>
                    <Button
                        href="#"
                        style={{
                            padding: "1.2rem 6rem",
                            background: "linear-gradient(to right, #628dc8, #f58b7c)",
                            color: "#fff",
                            border: "none",
                            borderRadius: "30px",
                            fontWeight: "bold",
                            fontSize: "1.1rem",
                            boxShadow: "0 4px 12px rgba(40, 80, 200, 0.15)",
                            transition: "background 0.3s",
                        }}
                    >
                        Explore Units
                    </Button>
                </div>
            </div>

            <div className="feature-overview-container">
                <div className="carousel-text-wrapper reverse">
                    <div className="carousel-box fade-in">
                        <ReusableCarousel
                            slides={[
                                { image: "/src/static/assets/page/homelanding/IMG-20250630-WA0147.jpg" },
                                { image: "/src/static/assets/page/homelanding/IMG-20250630-WA0148.jpg" },
                                { image: "/src/static/assets/page/homelanding/IMG-20250630-WA0149.jpg" },
                                { image: "/src/static/assets/page/homelanding/IMG-20250630-WA0150.jpg" },
                                { image: "/src/static/assets/page/homelanding/IMG-20250630-WA0151.jpg" },
                                { image: "/src/static/assets/page/homelanding/IMG-20250630-WA0152.jpg" }
                            ]}
                        />
                    </div>

                    <div className="carousel-text fade-in">
                        <h2 className="gradient-heading">Reconnect and Relax in the Heart of Nelspruit</h2>
                        <p className="subheading">
                            Enjoy a peaceful getaway with your loved ones at our family-friendly units, located just minutes from Nelspruit.
                            Thoughtfully designed for comfort and convenience, our accommodations offer a perfect balance of tranquility and access to local attractions.
                        </p>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem", marginBottom: "2rem" }}>
                    <Button
                        href="#"
                        style={{
                            padding: "1.2rem 6rem",
                            background: "linear-gradient(to right, #628dc8, #f58b7c)",
                            color: "#fff",
                            border: "none",
                            borderRadius: "30px",
                            fontWeight: "bold",
                            fontSize: "1.1rem",
                            boxShadow: "0 4px 12px rgba(40, 80, 200, 0.15)",
                            transition: "background 0.3s",
                        }}
                    >
                        Check Out Our About Page
                    </Button>
                </div>
            </div>

            <Footer/>
        </>
    );
};

export default HomeLanding;
