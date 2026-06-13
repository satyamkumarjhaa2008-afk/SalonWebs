import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./privacy.css";

const Privacy = () => {
  return (
    <div className="privacy-page">
      <Navbar />

      {/* Hero Section */}
      <section className="privacy-hero">
        <h1>PRIVACY POLICY</h1>
      </section>

      {/* Content Section */}
      <section className="privacy-content">
        <div className="privacy-container">
          <h2>Privacy Policy</h2>

          <div className="privacy-block">
            <h3>Introduction</h3>

            <p>
              We value your privacy and are committed to protecting your
              personal information. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website or use our services.
            </p>

            <p>
              By accessing or using our website, you agree to the collection
              and use of information in accordance with this policy.
            </p>
          </div>

          <div className="privacy-block">
            <h3>Information We Collect</h3>

            <p>
              We may collect personal information that you voluntarily provide
              to us when filling out forms, subscribing to newsletters,
              contacting us, or using our services.
            </p>

            <p>
              The information collected may include your name, email address,
              phone number, and any other information you choose to provide.
            </p>
          </div>

          <div className="privacy-block">
            <h3>How We Use Your Information</h3>

            <p>
              We use the information we collect to provide, operate, maintain,
              and improve our services. This includes responding to inquiries,
              sending updates, processing requests, and enhancing user
              experience.
            </p>

            <p>
              We may also use information for analytics, security monitoring,
              and compliance with legal obligations.
            </p>
          </div>

          <div className="privacy-block">
            <h3>Cookies and Tracking Technologies</h3>

            <p>
              Our website may use cookies and similar technologies to improve
              functionality, analyze website traffic, and personalize content.
            </p>

            <p>
              You can choose to disable cookies through your browser settings,
              although some website features may not function properly.
            </p>
          </div>

          <div className="privacy-block">
            <h3>Information Sharing</h3>

            <p>
              We do not sell, trade, or rent your personal information to third
              parties. Information may be shared with trusted service providers
              when necessary to operate our website and services.
            </p>

            <p>
              We may also disclose information when required by law or to
              protect our legal rights.
            </p>
          </div>

          <div className="privacy-block">
            <h3>Data Security</h3>

            <p>
              We implement appropriate security measures designed to protect
              your personal information from unauthorized access, disclosure,
              alteration, or destruction.
            </p>

            <p>
              However, no method of transmission over the Internet or electronic
              storage is completely secure, and we cannot guarantee absolute
              security.
            </p>
          </div>

          <div className="privacy-block">
            <h3>Your Rights</h3>

            <p>
              Depending on your jurisdiction, you may have the right to access,
              update, correct, or delete your personal information.
            </p>

            <p>
              To exercise these rights or make a privacy-related request,
              please contact us using the information provided on our website.
            </p>
          </div>

          <div className="privacy-block">
            <h3>Contact Us</h3>

            <p>
              If you have any questions regarding this Privacy Policy or how
              your information is handled, please contact us and we will be
              happy to assist you.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;