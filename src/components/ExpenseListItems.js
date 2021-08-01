
import React from "react";

import { Link } from "react-router-dom";

const ExpenseListItems = ({ id,description, amount, createdAt }) => (
    <div>
    <Link to={`/edit/${id}`}> <h3>{description}</h3></Link>
   
    <p>{amount} ~ {createdAt}</p>
    </div>
  
);

export default ExpenseListItems;
// here i an not using mapStateToProps as the button doesn't need it to run this
// here we access dispatch via expense 