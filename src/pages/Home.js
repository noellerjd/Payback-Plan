import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  function RecentGraph() {
    const graphData = localStorage.getItem("budgetData");
    const parsedData = JSON.parse(graphData);

    if (parsedData == null) {
      return;
    }

    return (
      <div className="start">
        <Link to="/expense-graph">
          <h3>Visit most recent graph</h3>
        </Link>
      </div>
    );
  }

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
              <p>
                This is mainly just for my own personal use, but maybe this can
                help you too
              </p>
              <p>Push the "Get Started" button to begin!</p>
            </div>
          </div>
          <div className="start">
            <Link to="/budget">
              <h3>Get Started</h3>
            </Link>
          </div>
          <RecentGraph />
        </div>
      </div>
    </section>
  );
}
