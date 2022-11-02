import React, { useState } from "react";

export default function TakeHomePayCalculator() {
  const [hourlyPay, setHourlyPay] = useState();
  const [hoursPerWeek, setHoursPerWeek] = useState();
  const TakeHomeDisplay = document.getElementById("take-home-display");
  const submitBtn = document.getElementById("submit-btn");
  const resetEl = document.getElementById("reset-container");
  const localTakeHome = document.getElementById("local-take-home");

  const updateHoursPerWeek = (hours) => {
    setHoursPerWeek(hours);
  };

  const updateHourlyPay = (pay) => {
    setHourlyPay(pay);
  };

  const dataPay = () => {
    const takeHomeData = localStorage.getItem("takeHomePayData");
    const parsedData = JSON.parse(takeHomeData);
    const localAmount = parseInt(parsedData.storedTakeHome);
    console.log(localAmount);
    localTakeHome.innerHTML = localAmount;
  };
  const handleSubmit = (event) => {
    if (hourlyPay == null) {
      alert("Invalid hourly amount.");
      return;
    }
    if (hourlyPay <= 0) {
      alert("Invalid hourly amount.");
      return;
    }
    if (hoursPerWeek == null) {
      alert("Invalid hours per week.");
      return;
    }
    if (hoursPerWeek <= 0) {
      alert("Invalid hours per week.");
      return;
    }

    const payPerWeek = hourlyPay * hoursPerWeek;
    const grossPayPerYear = payPerWeek * 52;
    const netPayPerYear = grossPayPerYear * 0.8;
    const takeHomePay = netPayPerYear / 12;
    const finalTakeHomePay =
      Math.round((takeHomePay + Number.EPSILON) * 100) / 100;

    const data = { storedTakeHome: finalTakeHomePay };

    localStorage.setItem("takeHomePayData", JSON.stringify(data));

    if (TakeHomeDisplay.style.display === "none") {
      TakeHomeDisplay.style.display = "block";
    }
    if (submitBtn.style.display === "block") {
      submitBtn.style.display = "none";
    }
    if (resetEl.style.display === "none") {
      resetEl.style.display = "block";
    }
    dataPay();
  };

  const resetStorage = () => {
    localStorage.removeItem("takeHomePayData");
    console.log("test");
  };

  return (
    <section className="take-home">
      <div className="take-home-container">
        <p id="take-home-display" style={{ display: "none" }}>
          Recent calculation: <span className="local-take-home">$</span>
          <span id="local-take-home" className="local-take-home"></span>/month
          take home pay.
        </p>
        <div className="expense-container">
          <form className="expense-form">
            <label htmlFor="hourly">What is your hourly pay?</label>
            <input
              type="number"
              minLength="0"
              placeholder="$/hr"
              onChange={(event) => {
                updateHourlyPay(event.target.value);
              }}
            />
            <label htmlFor="hourly">How many hours do you work per week?</label>
            <input
              type="number"
              minLength="0"
              placeholder="hours"
              onChange={(event) => {
                updateHoursPerWeek(event.target.value);
              }}
            />
          </form>
        </div>
        <div className="submit-field">
          <button
            onClick={handleSubmit}
            id="submit-btn"
            style={{ display: "block" }}
          >
            Submit
          </button>
          <div id="reset-container" style={{ display: "none" }}>
            <div className="reset-button">
              <a href="/Payback-Plan/take-home">
                <button className="reset-btn" onClick={resetStorage}>
                  Reset
                </button>
              </a>
            </div>
            <div>
              <a href="/Payback-Plan/budget">
                <button className="reset-btn">Return to expense entry</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
