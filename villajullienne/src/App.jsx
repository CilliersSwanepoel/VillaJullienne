// villajullienne/src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLanding from "./components/page/HomeLanding.jsx";
import About from "./components/page/About.jsx";
import Villas from "./components/page/Villas.jsx";
import Navbar from "./components/navigation/Navbar.jsx";

export default () => (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<HomeLanding />} />
            <Route path="/villas" element={<Villas />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </Router>
);