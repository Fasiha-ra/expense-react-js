import "./Expenses.css";
import React from "react";
import ExpenseItems from "./ExpenseItems";

const expenses = (props) => {
  return (
    <div className="expenses">
      {
      props.item.map(
        expense => 
        (
        <ExpenseItems
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))
      }

      {/* <ExpenseItems
        date={props.item[1].date}
        title={props.item[1].title}
        amount={props.item[1].amount}
      ></ExpenseItems>
      <ExpenseItems
        date={props.item[2].date}
        title={props.item[2].title}
        amount={props.item[2].amount}
      ></ExpenseItems>
      <ExpenseItems
        date={props.item[3].date}
        title={props.item[3].title}
        amount={props.item[3].amount}
      ></ExpenseItems> */}
    </div>
  );
};

export default expenses;
