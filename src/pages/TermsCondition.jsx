import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./TermsCondition.css";

const TermsCondition = () => {
  return (
    <div className="terms-page">
      <Navbar />

      {/* Hero Section */}
      <section className="terms-hero">
        <h1>TERMS & CONDITIONS</h1>
      </section>

      {/* Content Section */}
      <section className="terms-content">
        <div className="terms-container">
          <h2>Terms & Conditions</h2>

          <div className="terms-block">
            <h3>Acceptance of Terms</h3>

            <p>
              By accessing and using this website, you accept and agree to be
              bound by these Terms & Conditions. If you do not agree with any
              part of these terms, please refrain from using our website and
              services.
            </p>

            <p>
              These terms apply to all visitors, users, customers, and others
              who access or use our services.
            </p>
          </div>

          <div className="terms-block">
            <h3>Use of the Website</h3>

            <p>
              You agree to use this website only for lawful purposes and in a
              manner that does not infringe the rights of, restrict, or inhibit
              anyone else's use and enjoyment of the website.
            </p>

            <p>
              Unauthorized use of this website may result in legal action and
              termination of access to our services.
            </p>
          </div>

          <div className="terms-block">
            <h3>Intellectual Property</h3>

            <p>
              All content on this website, including text, graphics, logos,
              images, designs, and software, is the property of the company or
              its licensors and is protected by applicable intellectual
              property laws.
            </p>

            <p>
              No material from this website may be copied, reproduced,
              distributed, or used without prior written permission.
            </p>
          </div>

          <div className="terms-block">
            <h3>Products and Services</h3>

            <p>
              We reserve the right to modify, suspend, or discontinue any
              product or service at any time without prior notice.
            </p>

            <p>
              We make reasonable efforts to ensure the accuracy of information
              displayed on the website; however, errors may occasionally occur.
            </p>
          </div>

          <div className="terms-block">
            <h3>User Responsibilities</h3>

            <p>
              Users are responsible for maintaining the confidentiality of any
              account information and for all activities that occur under their
              accounts.
            </p>

            <p>
              You agree not to engage in any activity that may damage, disrupt,
              or interfere with the proper functioning of the website.
            </p>
          </div>

          <div className="terms-block">
            <h3>Limitation of Liability</h3>

            <p>
              To the fullest extent permitted by law, we shall not be liable
              for any direct, indirect, incidental, consequential, or special
              damages arising from the use of or inability to use our website
              or services.
            </p>

            <p>
              Your use of the website is at your own risk.
            </p>
          </div>

          <div className="terms-block">
            <h3>Third-Party Links</h3>

            <p>
              This website may contain links to third-party websites. We are
              not responsible for the content, privacy practices, or policies
              of any external websites.
            </p>

            <p>
              Accessing third-party websites is done entirely at your own
              discretion and risk.
            </p>
          </div>

          <div className="terms-block">
            <h3>Changes to Terms</h3>

            <p>
              We reserve the right to update or revise these Terms &
              Conditions at any time. Changes will become effective immediately
              upon publication on this website.
            </p>

            <p>
              Continued use of the website following any updates constitutes
              acceptance of the revised terms.
            </p>
          </div>

          <div className="terms-block">
            <h3>Contact Information</h3>

            <p>
              If you have any questions regarding these Terms & Conditions,
              please contact us through the contact information available on our
              website.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsCondition;