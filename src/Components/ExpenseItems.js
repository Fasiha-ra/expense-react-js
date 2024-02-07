import React, {useState} from "react";
import "./ExpensItems.css";


const ExpenseItems = (props) => {
  // const [newTitle, setNewTitle] = useState(" ");

  // const [title, setTitle] = useState(props.title);

  // const clickHandler = ()=>{
  //       setTitle(newTitle);
  // }

  // const changeHandler = (event) =>{
  //        setNewTitle(event.target.value);
  // }
  const month = props.date.toLocaleString("en-US", { month: "short" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className="container">
      <div className="expense-item">
        <div className="expense-date">
          <div className="month">{month}</div>
          <div className="year">{year}</div>
          <div className="day">{day}</div>
        </div>

        <div className="expense-desc">
          <h2>{props.title }</h2>
          <div className="expense-price">${props.amount}</div>
        </div>
        {/* <input type="text" value={newTitle} onChange={changeHandler} />
        <button onClick={clickHandler}>Change Title</button> */}
      </div>
    </div>
  );
};
export default ExpenseItems;


