import React from "react";
import "./Footer.css";
import FacebookIcon from "../assets/facebook-svgrepo-com.svg"
import InstagramIcon from "../assets/instagram-logo-facebook-svgrepo-com (1).svg"
import TiktokIcon from "../assets/tiktok-svgrepo-com.svg"
import YoutubeIcon from "../assets/youtube-168-svgrepo-com.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-socials">
         <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img height={"45px"} src={InstagramIcon} alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img height={"45px"} src={FacebookIcon} alt="Facebook" className="social-icon" />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <img height={"40px"} src={TiktokIcon} alt="TikTok" className="social-icon" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img height={"40px"} src={YoutubeIcon} alt="YouTube" className="social-icon" />
          </a>
        </div>

        <div className="footer-hours">
          <p>Tues - Fri: 9am - 7pm</p>
          <p>Sat: 9am - 5pm</p>
          <p>Sun - Mon: Closed</p>
        </div>

        <div className="footer-links">
          <a href="/privacypolicy">Privacy Policy</a>
          <a href="/termscondition">Terms & Conditions</a>
          <a href="/accessibility">Accessibility Statement</a>
          <a href="/refundpolicy">Refund Policy</a>
        </div>
      </div>

      <div className="footer-center">
        <h1 className="footer-logo">Miroir Chic</h1>

        <a href="mailto:info@mysite.com" className="footer-email">
          info@mysite.com
        </a>

        <p className="footer-phone">123-456-7890</p>

        <p className="footer-address">
          500 Terry Francine Street, San Francisco, CA 94158
        </p>
      </div>

      <div className="footer-bottom">
        © 2035 by Miroir Chic. Powered and secured by Benjamin
      </div>
    </footer>
  );
};

export default Footer;