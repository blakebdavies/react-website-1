import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

import "../../App.css";

export default function Contact() {
  return (
    <>
      <div className="contact-container">
        <h1>Let's Talk</h1>
        <p>
          How can we make your world a better experience? Shoot us an email or
          connect with us on social!{" "}
        </p>

        <div className="contact-details">
          <p className="email">
            <Link to="/">hello@mtkg.com</Link>
          </p>

          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <a href="/">
                <i className="fab fa-facebook-f" />
              </a>
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <a href="/">
                <i className="fab fa-instagram" />
              </a>
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <a href="/">
                <i className="fab fa-youtube" />
              </a>
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <a href="/">
                <i className="fab fa-twitter" />
              </a>
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <a href="/">
                <i className="fab fa-linkedin" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
