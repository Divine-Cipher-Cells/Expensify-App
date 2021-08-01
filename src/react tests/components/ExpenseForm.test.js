import React from "react";
import ExpenseForm from "../../components/ExpenseForm";
import {shallow} from "enzyme";
import expenses from "../fixtures/expenses_fixtures";
import moment from "moment";

test("FOR EXPENSEFORM",() => {
const wrapper = shallow(<ExpenseForm />);
expect(wrapper).toMatchSnapshot();
});

test("FOR EXPENSEFORM WITH EXPENSE",() => {
const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>);
expect(wrapper).toMatchSnapshot();
});

test("should render error for invalid form", () => {
const wrapper = shallow(<ExpenseForm />);
wrapper.find("form").simulate("submit",{
    preventDefault: () => { }
});
expect(wrapper.state("error")).toEqual(<div>Please fill the description and form</div>);
expect(wrapper).toMatchSnapshot();

});


test("DESCRIPTION CHECK SIMULATE", () => {
    const value = "NEW DESCRIPTION";
const wrapper = shallow(<ExpenseForm />);
wrapper.find("input").at(0).simulate("change",{
    target:{value}
});
expect(wrapper.state("description")).toBe(value);
});


test("NOTE ON CHANGE CHECK", () => {
    const value = "TEST NOTE";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("textarea").simulate("change",{
        target: {value}
    });
    expect(wrapper.state("note")).toBe(value);
});


test("should set amount if valid input",() =>{
    const value = "123.25";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("input").at(1).simulate("change",{
        target:{value}
    });
    expect(wrapper.state("amount")).toBe(value);
});

test("should not set amount if invalid input", () => {
    const value= "123.235";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("input").at(1).simulate("change",{
        target:{value}
    });
    expect(wrapper.state("amount")).toBe("");
});


//should check if onsubmit was called with valid props

test("should check if onsubmit was called with valid props",()=> {
    const whensubmitSpy = jest.fn(); //calls a spy
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} whenSubmit={whensubmitSpy} />);
    wrapper.find("form").simulate("submit",{
        preventDefault: () => {}
    });
    expect(wrapper.state("error")).toBe("");
    expect(whensubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        note:expenses[0].note,
        amount: ((expenses[0].amount)/100).toString(),
        createdAt: moment(expenses[0].createdAt),
        focused: false,
        error:""
    });    // we are not directly sending expense as an argument as it has id also which is an extra argument and hence if called will result in a failed test. so we do not use expense directly.
});


// Note : we cannot do wrapper.find("form").simulate(with argument).state XXXXXXXXXXXXX WRONG!
// wrapper.simulate() does not return a shallow wrapper of self instead it returns undefined

// Note avoid doing silly syntax mistakes

test("spy learning check",()=> {
    const onsubmitSpy = jest.fn(); //calls a spy
    onsubmitSpy();
    expect(onsubmitSpy).toHaveBeenCalled();
});

// ondatepicker calls ondateChange
test(" ondatepicker should set new date",() => {
const wrapper = shallow(<ExpenseForm />);
wrapper.find("SingleDatePicker").prop("onDateChange")(moment());
expect(wrapper.state("createdAt")).toEqual(moment());
});

// here when comparing moment instances we use toEqual because moment is an instance of an object hence to equal keep this in mind 
// note .prop returns the prop value


test("should change calendar focused", () => {
    const focused = true;
const wrapper = shallow(<ExpenseForm />);
wrapper.find("SingleDatePicker").prop("onFocusChange")({focused});
expect(wrapper.state("focused")).toBe(true);
});









//Referencing a function is not calling it everytime to return a value but to just relate to it.