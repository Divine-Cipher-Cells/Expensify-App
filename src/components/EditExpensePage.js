import React from "react";
import {connect} from "react-redux";
import { editExpense } from "../actions/expenses_actions";
import { removeExpense } from "../actions/expenses_actions";
import ExpenseForm from "./ExpenseForm";

 export class EditExpensePage extends React.Component{
    whenSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id,expense);
        this.props.history.push("/");

    };
    removeExpense = () => {
        this.props.removeExpense({id:this.props.expense.id});
        this.props.history.push("/");
    };


    render(){
        return(
            <div>
            <ExpenseForm expense={this.props.expense} whenSubmit= {this.whenSubmit} />
            <button onClick={this.removeExpense}>REMOVE</button>
            </div>
        );
    }
}

const mapStateToProps =(state, props) =>({
expense: state.expenses.find( (expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
editExpense: (id,expense) => dispatch(editExpense(id,{
    description: expense.description,
amount: parseFloat(expense.amount,10)*100,
createdAt: expense.createdAt.valueOf(),
note: expense.note
})),

removeExpense: (expense) => dispatch(removeExpense({id: expense.id}))
});
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);



//       props.dispatch(editExpense(props.expense.id, {
    //   description: expense.description,
    //   amount: parseFloat(expense.amount,10)*100,
    //   createdAt: expense.createdAt.valueOf(),
    //   note: expense.note
    //   }));
    //   we here simplify this using mapDispatchToProps


    // here we do not use second argument props in mapdispatch as it could not provide mapstate props