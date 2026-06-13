import React from "react";
import "./Top.css";

import heroImg from "../assets/top2.png";

const Top = () => {
  return (
    <section
      className="top-section"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="top-overlay"></div>

      <div className="top-content">
        <div className="top-left">
          <h1>
            The Art
            <br />
            of Refined Hair
          </h1>
        </div>

        <div className="top-right">
          <p>
            Experience bespoke styling in a space dedicated to
            modern elegance and timeless precision.
          </p>

          <button>Secure Your Appointment</button>
        </div>
      </div>
    </section>
  );
};

export default Top;