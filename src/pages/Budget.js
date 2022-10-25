import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import ReactDOM from "react-dom";
import ScrollToTop from "../component/ScrollToTop";
import ExpenseCard from "../component/ExpenseCard";

export default function Budget() {
  const [expenseInputList, setExpenseInputList] = useState([]);

  const navigate = useNavigate();

  const [paycheckAmount, setPaycheckAmount] = useState();
  const [expenses, setExpenses] = useState([]);

  const addExpenseBtnClick = (event) => {
    setExpenseInputList(
      expenseInputList.concat(
        <ExpenseCard
          expenseId={expenseInputList.length}
          key={expenseInputList.length}
          updateExpenseName={updateExpenseName}
          updateExpenseAmount={updateExpenseAmount}
        />
      )
    );
  };

  const updatePaycheckAmount = (amount) => {
    setPaycheckAmount(amount);
  };

  const updateExpenseName = (expenseName, key) => {
    const prevArray = expenses;
    prevArray[key] = { ...prevArray[key], expenseName: expenseName };
    setExpenses(prevArray);
  };
  const updateExpenseAmount = (expenseAmount, key) => {
    const prevArray = expenses;
    prevArray[key] = { ...prevArray[key], expenseAmount: expenseAmount };
    setExpenses(prevArray);
  };

  const handleSubmit = (event) => {
    if (paycheckAmount == null) {
      alert("Invalid paycheck amount.");
      return;
    }
    if (paycheckAmount <= 0) {
      alert("Invalid paycheck amount.");
      return;
    }
    if (expenses.length === 0) {
      alert("No expenses listed.");
    }
    for (let i = 0; i < expenseInputList.length; i++) {
      if (expenses[i] == null) {
        alert("Expense entry missing.");
      }
      if (expenses[i].expenseName == null || expenses[i].expenseName === "") {
        alert("Expense name missing.");
      }
      if (
        expenses[i].expenseAmount == null ||
        expenses[i].expenseAmount === ""
      ) {
        alert("Expense amount missing.");
      }
    }
    const data = { paycheckAmount: paycheckAmount, expenses: expenses };

    localStorage.setItem("budgetData", JSON.stringify(data));

    const test1 = localStorage.getItem("budgetData");
    const parsetest = JSON.parse(test1);

    console.log(parsetest.expenses);

    navigate("/expense-graph", { replace: true }, [navigate]);
  };

  // console.log(expenseInputList.filter((expense) => expense.key > 1));
  return (
    <section className="budget">
      <div className="budget-container">
        <form className="budget-form">
          <label htmlFor="pay">Take Home Pay (Monthly)</label>
          <input
            type="number"
            minLength="0"
            placeholder="($)"
            onChange={(event) => {
              updatePaycheckAmount(event.target.value);
            }}
          />
        </form>
      </div>
      <div className="expense-list-container">
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
      <div className="submit-field">
        <button id="submit-btn" type="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div>
        <ScrollToTop />
      </div>
    </section>
  );
}

// reference react portfolio for the props addition?
