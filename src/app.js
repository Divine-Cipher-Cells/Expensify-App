
import React from "react";

import ReactDOM from "react-dom";

import Approuter from "./routers/Approuter";

import { Provider } from "react-redux";

import configureStore from "./store/configure_store";


import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";


const store = configureStore();



const jsx = (
    <Provider store={store}>
      <Approuter />
    </Provider>
  );
  
  ReactDOM.render(jsx, document.getElementById('first'));
// we can pass both a const variable or a functional component
// but it is better to pass it as component functions as we may be needing to pass props