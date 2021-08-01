import moment from "moment";
import { setEndDate, setStartDate } from "../../actions/filters_actions";
import selectedExpenses from "../../selectors/expenses_selector";
import expenses from "../fixtures/expenses_fixtures";



test("should filter by text value", () => {
    const filters= {
        text: "e",
        startDate: undefined,
        endDate:undefined,
        sortBy: "date"
    }
const result = selectedExpenses(expenses,filters);
expect(result).toEqual([expenses[2],expenses[1]]);
});



test("should filter by start date", () => {
    const filters= {
        text: '',
        startDate: moment(0),
        endDate: undefined,
        sortBy: "date"
    }
const result = selectedExpenses(expenses,filters);
expect(result).toEqual([expenses[0],expenses[2]]);
});



// should filter by end date
test("should filter by end date",() => {
  const filters= {
  text:"",
  startDate: undefined,
  endDate: moment(0).add(6,"days"),
  sortBy: "date"
  };
  
  expect(selectedExpenses(expenses,filters)).toEqual([expenses[0],expenses[2],expenses[1]]);
});



//should sort by date
test("should sort by date",() => {
  const filters= {
  text:"",
  startDate: undefined,
  endDate: undefined,
  sortBy: "date"
  };
  
  expect(selectedExpenses(expenses,filters)).toEqual([expenses[0],expenses[2],expenses[1]]);
});



//should sort by amount
test("should sort by amount",() => {
    const filters= {
    text:"",
    startDate: undefined,
    endDate: undefined,
    sortBy: "amount"
    };
    
    expect(selectedExpenses(expenses,filters)).toEqual([expenses[1],expenses[2],expenses[0]]);
  });