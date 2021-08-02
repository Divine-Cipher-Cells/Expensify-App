import React from "React";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import {addExpense} from "../actions/expenses_actions";

export class AddExpensePage extends React.Component{
    whenSubmit = (expense) => {
        this.props.addExpense(expense);
        this.props.history.push("/");

    };

    render(){
        return (
            <div>
            <h1>Add Expense</h1>
            <ExpenseForm whenSubmit = {this.whenSubmit}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addExpense:(expense) => dispatch(addExpense({
        description: expense.description,
    amount: parseFloat(expense.amount,10)*100,
    createdAt: expense.createdAt.valueOf(),
    note: expense.note
    })),
});
export default connect(undefined,mapDispatchToProps)(AddExpensePage);


// note we need to parse number from string to a float value(and also remove the decimals as we are taking the value in pennies)
// and also need to parse createdAt as it will give an improper data and thus we need data in miliseconds so we 
// one of the moment apis to convert present state to milliseconds this api is valueOf() method