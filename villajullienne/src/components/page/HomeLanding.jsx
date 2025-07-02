import React from "react";
import "/src/static/css/page/HomeLanding.css";
import ReusableCarousel from "../elements/Carousel.jsx";



const HomeLanding = () => (
    <>
        <div className="welcome-container">
            <img
                src="/src/static/assets/page/homelanding/top_view.jpg"
                alt="Villa Jullienne"
                className="welcome-image"/>
            <div className="welcome-message">
                <h1>WELCOME <br/> to <br/> Elyon Panorama Village</h1>
                <p>A HOME AWAY FROM HOME</p>
            </div>
        </div>

        <div className="room-overview-container">
            <h2 className="gradient-heading fade-in">UNWIND IN SERENE COMFORT</h2>
            <h3 className="subheading fade-in">Discover the tranquil charm of our Units — where elegance meets relaxation.</h3>


            <ReusableCarousel
                slides={[
                    {
                        image: "/src/static/assets/page/homelanding/blue.jpg",
                    },
                    {
                        image: "/src/static/assets/page/homelanding/ocean.jpg",
                    },
                    {
                        image: "/src/static/assets/page/homelanding/orange.jpg",
                    },
                    {
                        image: "/src/static/assets/page/homelanding/purple.jpg",
                    },
                    {
                        image: "/src/static/assets/page/homelanding/red.jpg",
                    },
                    {
                        image: "/src/static/assets/page/homelanding/yellow.jpg",
                    }
                ]}
            />
        </div>
    </>
);

export default HomeLanding;