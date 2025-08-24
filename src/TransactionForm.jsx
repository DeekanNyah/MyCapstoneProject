import { useState } from "react";

export default function TransactionForm({ onAddTransaction }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return;

    onAddTransaction({
      id: Date.now(),
      text,
      amount: parseFloat(amount),
      type,
    });

    setText("");
    setAmount("");
    setType("income");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex flex-wrap items-center gap-2">
      <input
        type="text"
        placeholder="Description"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border rounded p-2 flex-1 min-w-[180px]"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border rounded p-2 w-36"
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border rounded p-2"
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button
        type="submit"
        className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
      >
        Add
      </button>
    </form>
  );
}
