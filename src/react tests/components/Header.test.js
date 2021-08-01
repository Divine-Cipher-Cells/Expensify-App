import React from "react";
import Header from "../../components/Header";
import {shallow} from "enzyme";



test("shallow test for Header component", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot(); //this statememnt removes the json directly without specifying enzyme to json and using toJSON thats provided below
    // all we did was to set up the config.json to run enzyme-to-json over it

    //const renderer = new ReactShallowRenderer();
    //renderer.render(<Header />);
//expect(renderer.getRenderOutput()).toMatchSnapshot();
});

//text() this to access the value of h1


//import toJSON from "enzyme-to-json";
  //expect(toJSON(wrapper)).toMatchSnapshot();