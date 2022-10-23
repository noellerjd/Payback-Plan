import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div>
          <h1 className="title">
            <span className="title1">PayBack</span>
            <span className="title2">Plan</span>
          </h1>
        </div>
      </Link>
    </div>
  );
}
