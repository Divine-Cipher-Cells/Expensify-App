import { shallow } from "enzyme";
import React from "react";
import {AddExpensePage} from "../../components/AddExpensePage";
import expenses from "../fixtures/expenses_fixtures";

test("should render add expense page correctly", () => {
const wrapper = shallow(<AddExpensePage />);
expect(wrapper).toMatchSnapshot();  // no need to pass props here as we are not using them in testing and also they are not a direct part of render
});

let wrapper, historySpy, addExpenseSpy; // so no matter whereever you define these variables they will be assinged to each test before they are called
// hence i used after each instead of before each as these setting of variables happen only after we are done with the first one and hence for every test except the first one

afterEach( () => {
     addExpenseSpy = jest.fn();
     historySpy = { push : jest.fn()};
     wrapper = shallow(<AddExpensePage history={historySpy} addExpense={addExpenseSpy} />);
});

test("should handle whenSubmit",() => {

    wrapper.find("ExpenseForm").prop("whenSubmit")(expenses[1]);
    expect(historySpy.push).toHaveBeenLastCalledWith("/");
    expect(addExpenseSpy).toHaveBeenLastCalledWith(expenses[1]);

});




//note when testing it will not have access to any props like history match which are provided by Route
/*(test("test without going through all that hassle",() => {
    const dispatchSpy = jest.fn();
    const historySpy = {push: jest.fn()};
    const wrapper = shallow(<AddExpensePage dispatch={dispatchSpy} history={historySpy} />);
    wrapper.find("ExpenseForm").prop("whenSubmit")(expenses[1]);
    expect(dispatchSpy).toBeCalled();
});)*/