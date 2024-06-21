import React from "react";
import { Button } from "./Button";
// import "../App.css";
import "../components/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Working Hours </p>
        <p className="footer-subscription-text">
          Monday-Friday 5:00 AM - 1:00 Am
        </p>
        <p className="footer-subscription-text">
          Saturday-Sunday 7:00 AM - 10:00 PM
        </p>
      </section>

      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join to our Gym Newsletter to be aware of all the news
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your email..."
              className="footer-input"
            />
            <button className="btn btn-block btn--medium btn--outline">
              Subscribe
            </button>
          </form>
        </div>
      </section>
      {/* <div className="footer-links">
        <div className="footer-links-wrapper">
          <div className="footer-links-items">
            <h2>About us</h2>
            <Link to="/info">Info</Link>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
          </div>

          <div className="footer-links-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorship</Link>
          </div>
        </div>

        <div className="footer-links-wrapper">
          <div className="footer-links-items">
            <h2>Services</h2>
            <Link to="/">Membership plans</Link>
            <Link to="/">Personal Training</Link>
            <Link to="/">Nutrition Counseling</Link>
            <Link to="/">Facilities</Link>
          </div>

          <div className="footer-links-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">YouTube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div> */}
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              TRENIROWKA <i class="fa-solid fa-dumbbell"></i>
            </Link>
          </div>
          <small className="website-rights">TRENIROWKA GYM © 2024</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram "></i>
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
