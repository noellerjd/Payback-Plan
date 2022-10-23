import React from "react";
import GHLink from "../assets/githublogoblack.png";
import LILink from "../assets/linkedinlogoblack.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-text">
          <p>Created By: Justin Noeller</p>
        </div>
        <div className="footer-links">
          <a
            href="https://github.com/noellerjd"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GHLink} alt="GitHub link" />
          </a>
          <a
            href="https://www.linkedin.com/in/justin-noeller-797181235/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LILink} alt="LinkedIn link" />
          </a>
        </div>
      </div>
    </div>
  );
}
