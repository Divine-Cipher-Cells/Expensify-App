import { shallow } from "enzyme";
import React from "react";
import {EditExpensePage} from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses_fixtures";



let editExpenseSpy,removeExpenseSpy, historySpy,wrapper;


test("should render edit expense page",() => {
   expect(wrapper).toMatchSnapshot();
});

beforeAll(() => {
    editExpenseSpy = jest.fn();
     removeExpenseSpy = jest.fn();
     historySpy = {push:jest.fn()};
wrapper = shallow(<EditExpensePage expense={expenses[1]} editExpense={editExpenseSpy} removeExpense={removeExpenseSpy} history={historySpy} />);

});

test("should handle edit expense", () => {
wrapper.find("ExpenseForm").prop("whenSubmit")(expenses[1]);
expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[1].id,expenses[1]);
expect(historySpy.push).toHaveBeenLastCalledWith("/");
});



test("should handle remove expense", () => {
    wrapper.find("button").prop("onClick")();
    expect(removeExpenseSpy).toHaveBeenLastCalledWith({id:expenses[1].id});
    expect(historySpy.push).toHaveBeenLastCalledWith("/");
});


// keep small errors in check
// note first check when doing this  expect(historySpy.push).toHaveBeenLastCalledWith("/");