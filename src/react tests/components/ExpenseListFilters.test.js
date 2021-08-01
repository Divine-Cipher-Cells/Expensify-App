import React from "react";
import {ExpenseListFilters} from "../../components/ExpenseListFilters";
import {shallow} from "enzyme";
import { filters,altfilters} from "../fixtures/filters_fixtures";

let setTextFilterSpy,setStartDateSpy,setEndDateSpy,sortByAmountSpy,sortByDateSpy,wrapper;
beforeEach(() => {
    setTextFilterSpy=jest.fn();
    sortByDateSpy=jest.fn();
    sortByAmountSpy=jest.fn();
    setEndDateSpy=jest.fn();
    setStartDateSpy=jest.fn();
     wrapper = shallow(
         <ExpenseListFilters 
        filters={filters}
        setTextFilter={setTextFilterSpy}
        sortByDate={sortByDateSpy}
        setStartDate={setStartDateSpy}
        setEndDate={setEndDateSpy}
        sortByAmount={sortByAmountSpy}
        />);
});
test("should render expense list filters",() => {
expect(wrapper).toMatchSnapshot();
});



test("should render expense list with altfilters",() => {
    wrapper.setProps({
        filters:altfilters
    } );
expect(wrapper).toMatchSnapshot();
});

//should handle text change
test("should handle text change",() => {
    wrapper.find("input").simulate("change",{target:{value:altfilters.text}});
    expect(setTextFilterSpy).toHaveBeenLastCalledWith(altfilters.text);
});


//should handle sort by date
test("should handle sort by amount",() => {
    wrapper.find("select").simulate("change",{target:{value:"date"}});
    expect(sortByDateSpy).toHaveBeenCalled();
});

//should handle sort by amount
test("should handle sort by amount",() => {
    wrapper.find("select").simulate("change",{target:{value:"amount"}});
    expect(sortByAmountSpy).toHaveBeenCalled();
});


//should handle date changes
test("should handle date changes", () =>{
    wrapper.setProps({
        filters:altfilters
    } );
    wrapper.find("DateRangePicker").prop("onDatesChange")(filters);
    expect(setEndDateSpy).toHaveBeenLastCalledWith(filters.endDate);
    expect(setStartDateSpy).toHaveBeenLastCalledWith(filters.startDate);
});


//should handle focus changes
test("should handle focus changes", () =>{
    
   
    wrapper.find("DateRangePicker").prop("onFocusChange")("startDate");
    expect(wrapper.state("calendarFocused")).toBe("startDate");
});
