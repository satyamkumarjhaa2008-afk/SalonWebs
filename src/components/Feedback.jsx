import React from "react";
import "./Feedback.css";

import clientImage from "../assets/top.jpg";

const Feedback = () => {
  const testimonials = [
    {
      name: "Amara Leone",
      review:
        "The attention to detail at Miroir Chic is unparalleled. My hair has never looked or felt better.",
    },
    {
      name: "Felix Brandt",
      review:
        "Lucian is a true color genius. He understood my vision perfectly and executed it flawlessly.",
    },
    {
      name: "Sophie Vermeulen",
      review:
        "A beautiful, calming space with incredible talent. It’s my go-to salon for every occasion.",
    },
  ];

  return (
    <section className="feedback">
      <div className="feedback-content">
        <h2>Words from Our Clients</h2>

        <div className="reviews">
          {testimonials.map((item, index) => (
            <div className="review" key={index}>
              <p className="client-name">{item.name}</p>

              <p className="client-review">
                “{item.review}”
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="feedback-image">
        <img src={clientImage} alt="Client" />
      </div>
    </section>
  );
};

export default Feedback;