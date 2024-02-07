import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveDataHandler = (enterData) =>{
        const expenseData = {
            ...enterData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    console.log(expenseData)
    }
    return (
        <div className='new-expense'>
           <ExpenseForm onSaveData={saveDataHandler}/>
        </div>
    );
}
export default NewExpense;

