import { useState } from "react";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

export default function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (t) => setTransactions((prev) => [...prev, t]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-blue-600">Personal Expense Tracker</h1>
      <TransactionForm onAddTransaction={addTransaction} />
      <TransactionList transactions={transactions} />
    </div>
  );
}
