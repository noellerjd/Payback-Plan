import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Budget() {
  return (
    <section className="budget">
      <div className="budget-container">
        <form className="budget-form">
          <label htmlFor="pay">Paycheck Amount</label>
          <input type="number" min="0" placeholder="($)"></input>
        </form>
      </div>
      <div className="add-expense-field">
        <div className="add-expense-container">
          <p>Add New Expense</p>
          <button id="add-expense-btn">
            <FontAwesomeIcon icon={faPlus} size="lg" />
          </button>
        </div>
      </div>
      <div className="submit-field">
        <button id="submit-btn" type="button">
          Submit
        </button>
      </div>
    </section>
  );
}
