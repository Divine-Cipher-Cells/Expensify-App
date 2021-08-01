import React from "react";
import { NavLink } from "react-router-dom";
const Header = (props) =>(
    <header>
    <h1>{props.children}</h1>
    <NavLink to="/" activeClassName="is-active" exact strict >Dashboard </NavLink>
    <NavLink to="/create" activeClassName="is-active" exact strict>Create-Expense </NavLink>
    </header>
);
export default Header;