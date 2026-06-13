import React from "react";
import "./About.css";

import HeroImg from "../assets/top2.png";
import StoryImg from "../assets/story-image.jpg";
import ScissorImg from "../assets/scissors.jpg";
import SalonImg from "../assets/salon.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StoryValues from "../components/StoryValues";

const About = () => {
  return (
    <div className="about-page">
        <Navbar />
      {/* HERO */}

      <StoryValues />
        <Footer />

    </div>
  );
};

export default About;