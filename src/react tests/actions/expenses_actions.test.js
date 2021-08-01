import {addExpense, removeExpense, editExpense} from "../../actions/expenses_actions";

test("should set-up remove expense action object", () => {
  const action = removeExpense({id: "123@abc"});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: "123@abc"
  })
});

test("should set-up to check edit expense", () => {
const action = editExpense("123",{description: "45", createdAt: "45666"});
expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: "123",
    updates : {description: "45", createdAt: "45666"}
});
});

test("should check for add expense action", () => {
  const expenseData = {
  description: "Rent",
  amount: 189500,
  createdAt: 100,
  note: "This was last month's rent"
  };

  const action = addExpense(expenseData);
  expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
          ...expenseData,
          id: expect.any(String)
      }
  });
});
test("should set up add expense action object with default values",() => {
const action = addExpense();
expect(action).toEqual({

  type: 'ADD_EXPENSE',
  expense: {
    id: expect.any(String),
    description : '',
      note : '',
      amount : 0,
      createdAt : 0
  }
}
);
});