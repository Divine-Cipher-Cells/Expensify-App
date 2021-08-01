import { ExpenseList } from "../../components/ExpenseList";
import React from "react";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses_fixtures";

test("ExpenseList component",() => {
const wrapper = shallow(<ExpenseList expenses={expenses} />);
expect(wrapper).toMatchSnapshot();
});

test("should render expense list with empty message", () =>{
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});