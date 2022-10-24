import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-text">
          <p>Created By: Justin Noeller</p>
        </div>
        <div className="footer-links">
          <a
            id="github-btn"
            href="https://github.com/noellerjd"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            id="linkedin-btn"
            href="https://www.linkedin.com/in/justin-noeller-797181235/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
}
