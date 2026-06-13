import React from "react";
import "./StoryValues.css";
import StoryImg from "../assets/story-image.jpg";
import NailPolishImg from "../assets/nail-polish-svgrepo-com.svg";
import MirrorImg from "../assets/mirror-svgrepo-com.svg"
import FlowerImg from "../assets/flower-5-svgrepo-com.svg"

const StoryValues = () => {
  return (
    <section className="story-values">
      {/* LEFT */}
      <div className="story-left">
        <div className="story-content">
          <span className="story-label">MY STORY</span>

          <h2>The Art of Personal Beauty
          </h2>

          <p>
            With years of experience in bespoke styling and a deep love for
            detail, I founded Miroir Chic to create a space where beauty feels
            personal.
          </p>
        </div>

        <div className="story-image">
          <img src={StoryImg} alt="Story" />
        </div>
      </div>

      {/* RIGHT */}
      <div className="story-right">
        <span className="story-label">OUR VALUES</span>

        <div className="values-row">
          <div className="value">
         < img width="50" height="50" src={MirrorImg} alt="Mirror" />    
            <h3>Personalized</h3>
            <p>
              Every look is tailored to reflect your unique style and essence.
            </p>
          </div>

          <div className="value">
         <img width="50" height="50" src={NailPolishImg} alt="Nail Polish" />
            <h3>Precision</h3>
            <p>
              We believe in the power of detail and timeless technique.
            </p>
          </div>

          <div className="value">
            <img width="50" height="50" src={FlowerImg} alt="Flower" />
            <h3>Experience</h3>
            <p>
              From the moment you arrive, it's all about you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryValues;