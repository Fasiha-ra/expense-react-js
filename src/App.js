import React, { useState } from "react";
import Expenses from "./Components/Expenses";
import NewExpense from "./Components/Form/NewExpense";
// let dummy_expenses = [
//   // {
//   //   title: "School Fee",
//   //   amount: 500,
//   //   date: new Date(2023, 10, 12),
//   // },
//   // {
//   //   title: "Books",
//   //   amount: 300,
//   //   date: new Date(2023, 9, 10),
//   // },
//   // {
//   //   title: "Rent",
//   //   amount: 500,
//   //   date: new Date(2023, 9, 10),
//   // },
//   // {
//   //   title: "Food",
//   //   amount: 600,
//   //   date: new Date(2023, 9, 10),
//   // },
// ];
const App = () => {
  const [expenses, setExpenses] = useState([]);
  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses]
    setExpenses(updatedExpense);
  };
  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses}></Expenses>
    </>
  );
};

export default App;
