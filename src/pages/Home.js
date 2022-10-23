import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home">
      <div className="home-container">
        <div className="home-description">
          <h2 className="intro-title">Easy Budgeting</h2>
          <div className="description-container">
            <div className="description-text">
              <p>
                This project came about as a way to track my own expenses and
                budget in an easy way.
              </p>
              <p>Technical Description goes here</p>
              <p>
                This is mainly just for my own personal use, but maybe this can
                help you too!
              </p>
            </div>
          </div>
          <div className="start">
            <Link to="/budget">
              <h3>Get Started</h3>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
