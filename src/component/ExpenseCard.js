import React from "react";

const ExpenseInput = (props) => {
  const handleName = (event) => {};

  const handleAmount = (event) => {};

  return (
    <div className="expense-container">
      <div className="expense-form">
        <label htmlFor="expense-name">Expense Name</label>
        <input
          type="string"
          placeholder="Bills, Rent, etc."
          onChange={(event) => {
            props.updateExpenseName(event.target.value, props.expenseId);
          }}
        />
        <label className="expense-amount-label" htmlFor="expense-amount">
          Expense Amount
        </label>
        <input
          type="number"
          min="0"
          placeholder="($)"
          onChange={(event) => {
            props.updateExpenseAmount(event.target.value, props.expenseId);
          }}
        />
      </div>
    </div>
  );
};

export default ExpenseInput;
