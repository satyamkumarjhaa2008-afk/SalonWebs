import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Heart, Share2 } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import services from "../data/servicesData.js";

import "./ServiceDetails.css";

const ServiceDetails = () => {
  const { serviceSlug } = useParams();

  const service = services.find(
    (item) => item.slug === serviceSlug
  );

  const [isLiked, setIsLiked] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (!service) return;

    const likedServices =
      JSON.parse(localStorage.getItem("likedServices")) || [];

    const alreadyLiked = likedServices.some(
      (item) => item.id === service.id
    );

    setIsLiked(alreadyLiked);
  }, [service]);

  const showToast = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2000);
  };

  const handleLike = () => {
    const likedServices =
      JSON.parse(localStorage.getItem("likedServices")) || [];

    if (isLiked) {
      const updatedServices = likedServices.filter(
        (item) => item.id !== service.id
      );

      localStorage.setItem(
        "likedServices",
        JSON.stringify(updatedServices)
      );

      setIsLiked(false);
      showToast("Removed from Favorites");
    } else {
      const updatedServices = [
        ...likedServices,
        service,
      ];

      localStorage.setItem(
        "likedServices",
        JSON.stringify(updatedServices)
      );

      setIsLiked(true);
      showToast("Added to Favorites");
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: service.name,
      text: `Explore our ${service.name} service and experience expert hair care tailored to you.`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(
          window.location.href
        );

        showToast("Link copied to clipboard!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!service) {
    return (
      <>
        <Navbar />
        <div className="service-not-found">
          <h1>Service Not Found</h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {toast && (
        <div className="toast-message">
          {toast}
        </div>
      )}

      <section className="service-details">
        <div className="service-container">

          {/* Mobile Image */}
          <div className="service-image mobile-image">
            <img
              src={service.imageUrl}
              alt={service.name}
            />
          </div>

          {/* Left Content */}
          <div className="service-content">

            <div className="breadcrumbs">
              <span>Services</span>
              <span className="separator">›</span>
              <span>{service.category}</span>
              <span className="separator">›</span>
              <span className="active">
                {service.name}
              </span>
            </div>

            <h1 className="service-title">
              {service.name}
            </h1>

            <div className="service-icons">

              <Heart
                size={28}
                strokeWidth={1.7}
                className="icon-btn"
                onClick={handleLike}
                fill={isLiked ? "#ef4444" : "none"}
                color={isLiked ? "#ef4444" : "currentColor"}
              />

              <Share2
                size={24}
                strokeWidth={1.7}
                className="icon-btn"
                onClick={handleShare}
              />

            </div>

            <h3 className="service-price">
              {service.priceRange}
            </h3>

            <p className="service-description">
              {service.description}
            </p>

            <div className="service-duration">
              <span>Duration:</span>{" "}
              {service.duration}
            </div>

            <button className="book-btn">
              Book Now
            </button>

            <p className="service-note">
              To book this service, please call us
              at the salon.
            </p>

          </div>

          {/* Desktop Image */}
          <div className="service-image desktop-image">
            <img
              src={service.imageUrl}
              alt={service.name}
            />
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServiceDetails;