import moment from "moment";

// get visble expenses


const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => (

    expenses.filter( (expense) => {
    
      const createdAtMoment = moment(expense.createdAt);
      const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
      const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
  
      return startDateMatch && endDateMatch && textMatch;   // they must match dates and even go through text filters to be able to finally be displayed in the UI
  }).sort((a,b) =>{
    if(sortBy === "date"){
      return a.createdAt <= b.createdAt ? 1 : -1; // note when sort returns a negative value then a comes before b
  // and when returns a positive value b comes before a 
  // so sorting here reorders the array with the most recent date or highest amount first or the most recent date first in this case hence arranging in a descending order
    }
    else{
      return a.amount <= b.amount ? 1 : -1;
    }
  })
  );
export default getVisibleExpenses;  