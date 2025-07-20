import React from "react";

function ExpenseTable({ expenses, onDelete }) {
  return (
    <table border="1" cellPadding="10" cellSpacing="0">
      <thead>
        <tr>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.length === 0 ? (
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              No expenses to show.
            </td>
          </tr>
        ) : (
          expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>${expense.amount.toFixed(2)}</td>
              <td>{expense.date}</td>
              <td>
                <button onClick={() => onDelete(expense.id)}>Delete</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default ExpenseTable;