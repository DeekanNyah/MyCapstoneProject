// BalanceSummary.jsx
import React from "react";

function BalanceSummary({ transactions }) {
  // Calculate totals
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + parseFloat(t.amount), 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + parseFloat(t.amount), 0);

  const balance = income - expenses;

  return (
    <div style={{ margin: "20px 0", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>Balance Summary</h2>
      <p style={{ color: "green" }}>Income: ${income.toFixed(2)}</p>
      <p style={{ color: "red" }}>Expenses: ${expenses.toFixed(2)}</p>
      <p style={{ fontWeight: "bold" }}>Balance: ${balance.toFixed(2)}</p>
    </div>
  );
}

export default BalanceSummary;
