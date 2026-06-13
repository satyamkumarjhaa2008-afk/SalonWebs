import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./RefundPolicy.css";

const RefundPolicy = () => {
  return (
    <div className="refund-page">
      <Navbar />

      {/* Hero Section */}
      <section className="refund-hero">
        <h1>REFUND POLICY</h1>
      </section>

      {/* Content Section */}
      <section className="refund-content">
        <div className="refund-container">
          <h2>Refund Policy</h2>

          <div className="refund-block">
            <h3>Overview</h3>

            <p>
              We strive to provide the highest quality products and services to
              our customers. If you are not completely satisfied with your
              purchase, please review our refund policy below.
            </p>

            <p>
              By purchasing our products or services, you agree to the terms
              outlined in this Refund Policy.
            </p>
          </div>

          <div className="refund-block">
            <h3>Eligibility for Refunds</h3>

            <p>
              Refund requests must be submitted within the applicable refund
              period specified for the product or service purchased.
            </p>

            <p>
              To be eligible for a refund, proof of purchase may be required,
              and the product or service must meet the conditions stated in
              this policy.
            </p>
          </div>

          <div className="refund-block">
            <h3>Non-Refundable Items</h3>

            <p>
              Certain products, services, digital downloads, promotional items,
              gift cards, or customized orders may not be eligible for refunds.
            </p>

            <p>
              Any exceptions will be clearly communicated at the time of
              purchase.
            </p>
          </div>

          <div className="refund-block">
            <h3>How to Request a Refund</h3>

            <p>
              To request a refund, please contact our support team with your
              order details, proof of purchase, and a brief explanation of the
              issue.
            </p>

            <p>
              We will review your request and respond within a reasonable
              timeframe.
            </p>
          </div>

          <div className="refund-block">
            <h3>Refund Processing</h3>

            <p>
              Once your refund request has been approved, refunds will be
              processed using the original payment method whenever possible.
            </p>

            <p>
              Processing times may vary depending on your financial institution
              or payment provider.
            </p>
          </div>

          <div className="refund-block">
            <h3>Cancellations</h3>

            <p>
              Orders or services may be canceled according to the terms
              specified at the time of purchase. Cancellation eligibility may
              vary depending on the nature of the product or service.
            </p>

            <p>
              Any cancellation fees, if applicable, will be disclosed before
              processing.
            </p>
          </div>

          <div className="refund-block">
            <h3>Changes to This Policy</h3>

            <p>
              We reserve the right to update or modify this Refund Policy at
              any time. Changes will become effective immediately upon posting
              on our website.
            </p>
          </div>

          <div className="refund-block">
            <h3>Contact Us</h3>

            <p>
              If you have any questions regarding refunds, cancellations, or
              this policy, please contact our customer support team for
              assistance.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RefundPolicy;