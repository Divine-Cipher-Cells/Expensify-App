import moment from "moment";
import filtersReducer from "../../reducers/filters_reducer";

test("Checking for reducer filters", () => {
  expect(filtersReducer(undefined,{
    type: '@@INIT'
  })).toEqual({endDate: moment().endOf("month"), sortBy:"date", startDate: moment().startOf("month"), "text": ""}
  );
});

test("checking for sort by amount", () => {
    expect(filtersReducer(undefined,{type: "SORT_BY_AMOUNT",sortBy: "amount"})).toEqual({
        text: '',
        sortBy: "amount",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    });
});

test("checking for sort by date", () => {
    const currentState ={
    text: '',
    sortBy: "amount",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
    };
    const action = {
        type: "SORT_BY_DATE",
        sortBy: "date"
    };
    expect(filtersReducer(currentState,action)).toEqual({
        text: '',
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")

    });
});
//should test text filter
test("should test text filter", () => {
  expect(filtersReducer(undefined,{type:"SET_TEXT_FILTER", text:"tick"})).toEqual({
    text: 'tick',
    sortBy: 'date',
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});
test("should set start date", () => {
    const startDate =moment();
  expect(filtersReducer(undefined,{type:"SET_START_DATE", startDate})).toEqual({
    text: '',
    sortBy: 'date',
    startDate,
    endDate: moment().endOf("month")
  });
});
test("should set end date", () => {
    const endDate =moment();
  expect(filtersReducer(undefined,{type:"SET_END_DATE", endDate})).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf("month"),
    endDate
  });
});


// calling a function with the argument set as undefined ask the argument if it has a default value and if it has then it takes that value
// and if no default value then it would remain assinged the usual undefined