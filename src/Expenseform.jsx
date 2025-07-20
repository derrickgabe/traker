import React, { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    description: "",
    category: "",
    amount: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

const newExpense = {
  id: Date.now(), // or use crypto.randomUUID() if supported
  description: formData.description,
  category: formData.category,
  amount: parseFloat(formData.amount)
};

onAddExpense(newExpense);

// Reset the form
setFormData({
  description: "",
  category: "",
  amount: ""
});
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
      />
    
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
        required
      />
        <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            />
      <button type="submit">SUBMMIT</button>
    </form>
  );
}

export default ExpenseForm;