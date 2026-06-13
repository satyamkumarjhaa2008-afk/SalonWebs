import React from "react";
import "./Contact.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Navbar />

      <div className="contact-page">

        {/* HERO SECTION */}

        <section className="contact-hero">
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <span className="hero-subtitle">
              WE'D LOVE TO HEAR FROM YOU
            </span>

            <h1>Contact Us</h1>

            <p>
              Have a question, need styling advice, or ready to book your
              transformation? Get in touch — we're here for you.
            </p>
          </div>
        </section>

        {/* CONTACT SECTION */}

        <section className="contact-container">

          {/* LEFT */}

          <div className="contact-left">
            <h2>Get In Touch</h2>

            <div className="info-item">
              <div className="icon-box">
                <FaPhoneAlt />
              </div>

              <div className="hatt" >
                <h4>Phone</h4>
                <p>+620 58 5005800</p>
              </div>
            </div>

            <div className="line"></div>

            <div className="info-item">
              <div className="icon-box">
                <FaEnvelope />
              </div>

              <div className="hatt" >
                <h4>Email</h4>
                <p>info@miroirchic.com</p>
              </div>
            </div>

            <div className="line"></div>

            <div className="info-item">
              <div className="icon-box">
                <FaMapMarkerAlt />
              </div>

              <div className="hatt">
                <h4 >Address</h4>
                <p>500 Terry Francine Street, San Francisco</p>
              </div>
            </div>

            <div className="line"></div>

            <div className="info-item">
              <div className="icon-box">
                <FaClock />
              </div>

              <div className="hatt" >
                <h4>Hours</h4>
                <p>Tues - Fri: 9 AM - 7 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="contact-right">

            <h2>Send Us a Message</h2>

            <form>

              <div className="name-row">
                <input
                  type="text"
                  placeholder="First Name"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
              />

              <input
                type="text"
                placeholder="Phone Number"
              />

              <textarea
                placeholder="Your Message"
                rows="6"
              ></textarea>

              <button type="submit">
                Send Message
              </button>

            </form>

          </div>

        </section>

      </div>

      <Footer />
    </>
  );
};

export default Contact;