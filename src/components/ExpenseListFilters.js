import React from "react";
import { DateRangePicker } from "react-dates";
import { connect } from "react-redux";
import { setStartDate, setTextFilter, sortByAmount ,sortByDate,setEndDate} from "../actions/filters_actions";

export class ExpenseListFilters extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            calendarFocused: null
        };
    }
    changeDualDates = ({startDate,endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = (calendarFocused) => {
        this.setState( () => ({ calendarFocused }));
    };
    ontextFilterChange =(e) =>{
        const inputValue= e.target.value;
        this.props.setTextFilter(inputValue);
    };

    onSelectValueChange= (e) => {
        e.target.value === "date" ? this.props.sortByDate() : this.props.sortByAmount() ;
    };

render(){
return (    <div>
    <input type="text" value={this.props.filters.text} onChange={this.ontextFilterChange} />
    <select value={this.props.filters.sortBy} onChange={this.onSelectValueChange}>
    <option value="date">Date</option>
    <option value="amount">Amount</option>
    </select>
    <DateRangePicker focusedInput={this.state.calendarFocused} startDate={this.props.filters.startDate} endDate={this.props.filters.endDate} 
    onDatesChange= {this.changeDualDates} onFocusChange={this.onFocusChange}
    numberOfMonths={1}
    isOutsideRange={() => false}
    showClearDates={true}
    />
    </div>);
}
}

const mapStateToProps = (state,props) =>({
    filters: state.filters
});

const mapDispatchToProps = (dispatch,props) =>({
setTextFilter: (inputValue) => dispatch(setTextFilter(inputValue)),
setStartDate:(startDate) => dispatch(setStartDate(startDate)),
setEndDate:(endDate) => dispatch(setEndDate(endDate)),
sortByAmount:() => dispatch(sortByAmount()),
sortByDate:() => dispatch(sortByDate())
});

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters);

//using value we set the form element to only read only value
// to read and update it we need to first let it access store 
// by accessing store it also gets a dispatch() method as dispatch prop