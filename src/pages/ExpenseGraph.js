import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function ExpenseGraph() {
  const localData = localStorage.getItem("budgetData");
  const parsedData = JSON.parse(localData);
  const localAmounts = parsedData.expenses.map((expense) =>
    parseInt(expense.expenseAmount)
  );

  const expenseTotal = localAmounts.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);

  const paycheck = parseInt(parsedData.paycheckAmount) - expenseTotal;

  const finalAmounts = parsedData.expenses
    .map((expense) => expense.expenseAmount)
    .concat(paycheck);

  const localNames = parsedData.expenses.map((expense) => expense.expenseName);
  const expenseNames = localNames.concat("Leftover");

  const data = {
    labels: expenseNames,
    datasets: [
      {
        label: "Expenses",
        data: finalAmounts,
        backgroundColor: [
          "#424242",
          "#222222",
          "#d8f8d1",
          "#5a874f",
          "#f5f3ed",
          "#a4cf9b",
        ],
        borderColor: [
          "#222222",
          "#424242",
          "#5a874f",
          "#d8f8d1",
          "#a4cf9b",
          "#5a874f",
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="graph-page-container">
      <div className="graph-container">
        <div className="graph">
          <Doughnut data={data} />
        </div>
      </div>
      <div className="graph-text">
        <p>Explanation text goes here</p>
        <ul>
          <li>All expenses cost a total of ${expenseTotal}</li>
          <li>After paying all expenses, you'll have ${paycheck} leftover</li>
        </ul>
      </div>
    </div>
  );
}
