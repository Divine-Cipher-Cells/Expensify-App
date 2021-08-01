import React from "react";
import { connect } from "react-redux"; 
import getVisibleExpenses from "../selectors/expenses_selector";
import ExpenseListItems from "./ExpenseListItems";

export const ExpenseList = (props) => (
<div>

<h2>Expense List Items</h2>
{props.expenses.length === 0 ? <p>No expense</p> : props.expenses.map( (expense,index) => {
    return <ExpenseListItems key={expense.id} {...expense} />;
})}
</div>
);
const mapStateToProps = (state) =>( {
    expenses: getVisibleExpenses(state.expenses,state.filters),
    });

export default connect(mapStateToProps)(ExpenseList);
 // store state gets passed inside the inside funxtion of connect

 // we reference something when we don t want return value but the function to execute the conditions
 // as we do not want to use the return value here just want to get it as a props for the wrapped component so we only reference it

 // NOte before EXpenseListener was not conected to store but now it is so it has now both the props as supplied from here and also the ones it got from store