import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function ScrollToTop() {
  return (
    <a href="#top" alt="back to top">
      <div id="back-to-top">
        <FontAwesomeIcon
          className="backtotop-icon"
          icon={faArrowUp}
          size="2x"
        />
      </div>
    </a>
  );
}
