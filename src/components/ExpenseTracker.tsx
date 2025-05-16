import { useState } from "react";
import { useStore } from "../store/store";

const ExpenseTracker = () => {
  const { expenses, addExpense, removeExpense } = useStore();

  const [description, setDescription] = useState<string>("");
  const [amount, setAmount] = useState<number | "">("");

  function handleAddExpense() {
    if (description.trim() === "" || amount === "") return;

    addExpense({
      id: Date.now(),
      description: description,
      amount: +amount,
    });

    setDescription("");
    setAmount("");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-lg p-8 bg-gray-900 rounded-lg shadow-2xl">
        <h1 className="mb-6 text-4xl font-extrabold text-center text-yellow-400">
          Expense Tracker
        </h1>

        <div className="mb-6 space-y-4">
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Expense Description"
            className="w-full px-4 py-3 text-white transition duration-200 bg-black border-2 border-yellow-500 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="number"
            value={amount}
            onChange={(e) =>
              setAmount(e.target.value === "" ? "" : +e.target.value)
            }
            placeholder="Amount"
            className="w-full px-4 py-3 text-white transition duration-200 bg-black border-2 border-yellow-500 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <button
            onClick={handleAddExpense}
            className="w-full px-4 py-2 font-semibold text-black bg-yellow-500 rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            Add Expense
          </button>
        </div>

        <ul className="mb-6 space-y-4">
          {expenses.map((expense) => (
            <li
              key={expense.id}
              className="flex items-center justify-between p-4 transition-transform transform bg-gray-800 rounded-lg shadow-sm hover:scale-105"
            >
              <span className="font-semibold text-gray-200">
                {expense.description} :{" "}
                <span className="text-yellow-400">
                  ${expense.amount.toFixed(2)}
                </span>
              </span>

              <button
                onClick={() => removeExpense(expense.id)}
                className="text-sm text-red-400 hover:text-red-600"
              >
                ❌ Delete
              </button>
            </li>
          ))}
        </ul>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-yellow-400">
              Total Expenses : {''}
              <span className="text-yellow-400">
                ${expenses.reduce((total, expense)=>total+expense.amount,0).toFixed(2)}
              </span>
            </h2>
          </div>
        
      </div>
    </div>
  );
};

export default ExpenseTracker;








