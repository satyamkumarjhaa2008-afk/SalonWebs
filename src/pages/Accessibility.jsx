import React from "react";
import Navbar from "../components/Navbar";
import "./accessibility.css";
import Footer from "../components/Footer";


const Accessibility = () => {
  return (
    <div className="accessibility-page">
      <Navbar />

      {/* Hero Section */}
      <section className="accessibility-hero">
        <h1>ACCESSIBILITY</h1>
      </section>

      {/* Content Section */}
      <section className="accessibility-content">
        <div className="accessibility-container">
          <h2>
            The Distillery Restaurants Corp. — Accessible Customer Service
            Plan
          </h2>

          <a href="#" className="accessibility-link">
            Multi-Year Accessibility Plan
          </a>

          <div className="content-block">
            <h3>Statement of Commitment</h3>

            <p>
              The Distillery Restaurants Corp. (DRC) is committed to ensuring
              equal access and participation for people with disabilities. We
              are committed to ensuring people living with disabilities can
              visit our restaurants and event spaces in a way that allows them
              to maintain their dignity and independence.
            </p>

            <p>
              The DRC is committed to meeting our current and ongoing
              obligations under the Human Rights Code respecting
              non-discrimination. We believe in integration, and we are
              committed to meeting the needs of people with disabilities in a
              timely manner. We will do so by removing and preventing barriers
              to accessibility and by meeting our accessibility requirements
              under Ontario’s accessibility laws.
            </p>

            <p>
              The DRC understands that obligations under the Accessibility for
              Ontarians with Disabilities Act, 2005 (AODA) and its
              accessibility standards do not substitute or limit its
              obligations under the Ontario Human Rights Code or obligations to
              people with disabilities under any other law.
            </p>

            <p>
              The DRC is committed to exceptional service in providing goods,
              services or facilities to all customers including people with
              disabilities. Our accessible customer service policies are
              consistent with the principles of independence, dignity,
              integration and equality of opportunity for people with
              disabilities.
            </p>
          </div>

          <div className="content-block">
            <h3>Information and Communication</h3>

            <p>
              We will communicate with people with disabilities in ways that
              take into account their disability. Upon request, we will provide
              information made available to the public in accessible
              alternative formats or with communication support. We will work
              with the person with disabilities to determine what method of
              communication works for them.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Accessibility;