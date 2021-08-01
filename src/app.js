
import React from "react";

import ReactDOM from "react-dom";

import Approuter from "./routers/Approuter";

import { Provider } from "react-redux";

import configureStore from "./store/configure_store";
import { addExpense } from "./actions/expenses_actions";
import { setTextFilter } from "./actions/filters_actions";
import getVisibleExpenses from "./selectors/expenses_selector";

import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";


const store = configureStore();
store.dispatch(addExpense({ description: "Water bill",amount: 4500}));
store.dispatch(addExpense({ description: "Gas bill",createdAt:1000}));
store.dispatch(addExpense({ description: "Rent",amount:189500}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
console.log(visibleExpenses);


const jsx = (
    <Provider store={store}>
      <Approuter />
    </Provider>
  );
  
  ReactDOM.render(jsx, document.getElementById('first'));
// we can pass both a const variable or a functional component
// but it is better to pass it as component functions as we may be needing to pass props