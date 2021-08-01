import React from "react";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import Header from "../components/Header";
import EditExpensePage from "../components/EditExpensePage";
import ExpenseDashBoardPage from "../components/ExpenseDashBoardPage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import AddExpensePage from "../components/AddExpensePage";


//root of this app(home)("/")

const Approuter= () => ( <BrowserRouter>
    <div>
    <Header>{"Expensify:"}</Header>
    <Switch>
    <Route path="/" component={ExpenseDashBoardPage} exact={true} />  
    <Route path="/create" component={AddExpensePage} />
    <Route path="/help" component={HelpPage} />
    <Route path="/edit/:id" component={EditExpensePage} />
    <Route component={NotFoundPage} />
    </Switch>
    </div>
    </BrowserRouter>
    );

    export default Approuter;