import React from "react";
import { shallow } from "enzyme";
import ExpenseListItems from "../../components/ExpenseListItems";
import expenses from "../fixtures/expenses_fixtures";


test("test for expense list items", () => {
    const wrapper = shallow(<ExpenseListItems {...expenses[1]}/>)
    expect(wrapper).toMatchSnapshot();
    });