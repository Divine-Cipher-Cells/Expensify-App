import ExpenseDashBoardPage from "../../components/ExpenseDashBoardPage";
import React from "react";
import { shallow } from "enzyme";


test("Expense dash board component",() => {
    const wrapper = shallow(<ExpenseDashBoardPage />);
    expect(wrapper).toMatchSnapshot();
    });