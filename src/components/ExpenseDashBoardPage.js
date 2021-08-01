import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
const ExpenseDashBoardPage = (props) => (
    <div>
    <ExpenseListFilters />
    <ExpenseList />
    </div>
);
export default ExpenseDashBoardPage;