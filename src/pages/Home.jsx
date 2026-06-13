import React from "react";
import "./Home.css";

import salonBg from "../assets/eb51ca42a8295ee6456a001639fd52de.jpg";
import ladyImg from "../assets/zhj.png";
import Footer from "../components/Footer";
import Artist from "../components/Artist";
import Top from "../components/Top";
import Feedback from "../components/Feedback";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
    <Navbar />
    <Top />
    <div
      className="home-section"
      style={{ backgroundImage: `url(${salonBg})` }}
    >
      <div className="content-card">
        <div className="text-content">
          <h1>Ready for a Transformation?</h1>

          <p>
            Your best hair is just an appointment away. Book your visit to our
            salon today to experience modern elegance refined for you.
          </p>

          <button>Book Online</button>
        </div>

        <div className="image-content">
          <img src={ladyImg} alt="Salon Model" />
        </div>
      </div>
      
    </div>
    <Feedback />
    <Artist />
    <Footer />
    </>
  );
};

export default Home;