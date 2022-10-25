import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import ReactDOM from "react-dom";
import ExpenseCard from "../component/ExpenseCard";

const Form = () => {
  const [expenseInputList, setExpenseInputList] = useState([]);

  const addExpenseBtnClick = (event) => {
    setExpenseInputList(
      expenseInputList.concat(<ExpenseCard key={expenseInputList.length} />)
    );
    console.log(expenseInputList);
  };

  return (
    <div
      className="expense-list-container"
      // id={"expense" + expenseInputList.length}
    >
      {expenseInputList}
      <div className="add-expense-field">
        <div className="add-expense-container">
          <p>Add New Expense</p>
          <button id="add-expense-btn" onClick={addExpenseBtnClick}>
            <FontAwesomeIcon icon={faPlus} size="lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

/* <button id="add-expense-btn" onClick={ addExpenseBtnClick }>
            <FontAwesomeIcon icon={faPlus} size="lg" />
          </button> */

export default function Budget() {
  return (
    <section className="budget">
      <div className="budget-container">
        <form className="budget-form">
          <label htmlFor="pay">Paycheck Amount</label>
          <input type="number" min="0" placeholder="($)"></input>
        </form>
      </div>
      {/* <ExpenseCard />
      {expenseInputList} */}
      <Form />
      <div className="submit-field">
        <button id="submit-btn" type="button">
          Submit
        </button>
      </div>
    </section>
  );
}

// reference react portfolio for the props addition?
