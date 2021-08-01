import NotFoundPage from "../../components/NotFoundPage";
import React from "react";
import { shallow } from "enzyme";


test("not found page component",() => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
    });