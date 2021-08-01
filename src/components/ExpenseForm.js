import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";


//const now = moment();
//console.log(now.format("MMMM YYYY Do a"));


export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            description: props.expense ? props.expense.description :"",
            note: props.expense ? props.expense.note :"",
            amount: props.expense ? (props.expense.amount/100).toString() :"",
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            focused: false,
            error:""
        };

    }


    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState( () =>({
            description
        }));
    };

    onNoteChange = (e) =>{
        const note = e.target.value;
        this.setState( () => ({
            note
        }));
    };

        onAmountChange = (e) => {
            const amount= e.target.value;
            if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
                this.setState(() => ({
                    amount
                }));
            }
        };
        onDateChanging = (createdAt) => {
            if (!!createdAt)
            this.setState( () =>({createdAt}));
        };
        onFocusChange =({focused}) => {
            this.setState( () => ({focused}));
        };

        onSubmitForm = (e) => {
            e.preventDefault();
            const error = <div>Please fill the description and form</div>
            if(!this.state.description || !this.state.amount){
                this.setState( () => ({
                    error
                }));
            }else {
                this.setState(() =>({
                    error:""
                }));
                this.props.whenSubmit(this.state);
            }
        };
        
    
    render(){
            return (<div>
                <p>{this.state.error}</p>
                <form onSubmit={this.onSubmitForm}>
                <input type="text" placeholder="Description" autoFocus value={this.state.description} onChange = {this.onDescriptionChange} />
                <input type="number" placeholder="Amount" value={this.state.amount} onChange = {this.onAmountChange} />
                <SingleDatePicker date={this.state.createdAt} onDateChange={this.onDateChanging} 
                focused={this.state.focused} onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={() => false}
                />
                <textarea placeholder="Add a note for your expense (optional)" value={this.state.note} onChange={this.onNoteChange}></textarea>
                <button>Add Expense</button>
                </form>
                </div>);
};
}

// here we track the updation and filling of form by local state