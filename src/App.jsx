import React, { useState } from 'react';
import './App.css';
import SearchBar from './Searchbar';
import ExpenseForm from './Expenseform';
import ExpenseTable from './Expensetable';


function App() {
  const [expenses, setExpenses] = useState([]);
  const [search, setSearch] = useState("");

  function handleAddExpense(newExpense) {
    setExpenses([...expenses, newExpense]);
  }
git init
  function handleDeleteExpense(id) {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  }

  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(search.toLowerCase()) ||
    expense.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Expense Tracker</h1>

  <p>Track your expenses easily!</p>

  <p>Search for expenses by description or category:</p>
  <SearchBar searchQuery={search} setSearchQuery={setSearch} />
  <ExpenseForm onAddExpense={handleAddExpense} />
  <ExpenseTable expenses={filteredExpenses} onDelete={handleDeleteExpense} />
</div>
  );
}

export default App;