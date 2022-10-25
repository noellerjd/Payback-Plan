import React from "react";

const ExpenseInput = () => {
  return (
    <div className="expense-container">
      <div className="expense-form">
        <label htmlFor="expense-name">Expense Name</label>
        <input type="string" placeholder="Bills, Rent, etc." />
        <label className="expense-amount-label" htmlFor="expense-amount">
          Expense Amount
        </label>
        <input type="number" min="0" placeholder="($)" />
      </div>
    </div>
  );
};

export default ExpenseInput;
