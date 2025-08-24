export default function TransactionList({ transactions }) {
  if (transactions.length === 0) {
    return <p className="mt-4 text-gray-500">No transactions yet.</p>;
  }

  return (
    <ul className="mt-6 space-y-2">
      {transactions.map((t) => (
        <li
          key={t.id}
          className={`flex items-center justify-between rounded-lg p-3 shadow border
          ${t.type === "income" ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}
        >
          <span className="text-sm text-gray-700">{t.text}</span>
          <span
            className={`font-semibold ${
              t.type === "income" ? "text-green-700" : "text-red-700"
            }`}
          >
            {t.type === "expense" ? "-" : "+"}${Math.abs(t.amount).toFixed(2)}
          </span>
        </li>
      ))}
    </ul>
  );
}
