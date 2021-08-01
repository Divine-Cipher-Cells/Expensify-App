import { createStore, combineReducers } from "redux";
import expensesReducer from "../reducers/expenses_reducer";
import filtersReducer from "../reducers/filters_reducer";

//Store

export default () => {
    const store = createStore(
        combineReducers({
          expenses: expensesReducer,
          filters: filtersReducer
        }),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      );
      return store;
};