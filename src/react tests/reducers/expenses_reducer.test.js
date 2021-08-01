import expensesReducer from "../../reducers/expenses_reducer";
import expenses_fixtures from "../fixtures/expenses_fixtures";
import expenses from "../fixtures/expenses_fixtures";

test("should set default state",()=>{
expect(expensesReducer(undefined,{type:"@@INIT"})).toEqual([]);
});


test("should remove expense by id", () => {
expect(expensesReducer(expenses,{type: "REMOVE_EXPENSE",id: expenses[0].id})).toEqual([expenses[1],expenses[2]]);
});

test("should not remove expense if id not found", () => {
    expect(expensesReducer(expenses,{type: "REMOVE_EXPENSE",id: "123@ABC"})).toEqual([...expenses]);
    });
    

    //should add an expense
    test("should add an expense",() => {
        expect(expensesReducer(expenses,{type:"ADD_EXPENSE",expense: { description: "Rent",
        amount: 189500,
        createdAt: 100,
        note: "This was last month's rent",
        id:"123@abc"
    }})).toEqual([...expenses,{
            amount: 189500,
            createdAt: 100,
            note: "This was last month's rent",
            description: "Rent",
            id:expect.any(String)
        }]);
    });

    //note should remember to keep attention to whats needed and what not!


    // should edit an expense
    test("should edit an expense",() => {
        expect(expensesReducer(expenses,{type:"EDIT_EXPENSE",id:"1",updates:{}})).toEqual([...expenses]);
    });


    // should not edit the expense if expense not found
    test("should not edit an expense if expense not found",() => {
        expect(expensesReducer(expenses,{type:"EDIT_EXPENSE",id:"123@abc",updates:{description:"iop"}})).toEqual([...expenses_fixtures]);
    });