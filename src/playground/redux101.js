import { createStore } from "redux";


const incrementCountGen=({incrementBy=1} = {}) =>({
    type: "INCREMENT",
    incrementBy: typeof incrementBy === "number" ? incrementBy : 1
});


const decrementCountGen=({decrementBy=1} ={}) => (
    {
    type: "DECREMENT",
    decrementBy:typeof decrementBy === "number" ? decrementBy : 1
});


const resetCountGen= () => ({
type: "RESET"
});

const setCountGen= ({count=45} ={}) => ({
    type: "SET",
    count
});
const reducerFunc=(state = { count: 0 }, action) =>{
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
            case "DECREMENT":
                    return {
                        count: state.count - action.decrementBy
                    };
                    case "RESET":
                    return {
                        count: 0
                    };
                    case "SET":
                        return{
                            count: action.count
                        };
            default:
            return state;
    }

};
const store = createStore(reducerFunc);
//this is done to build store and uses a function as an argument and the internal function can use
// the arguments supplied to it too, the first of which is always a the current state and as the first state is not defined for the first call we set its
// default value right there in the argument parantheses (state={count: 0}.
const unsubscribe = store.subscribe(() =>{console.log(store.getState());}
);
 
store.dispatch( incrementCountGen( {incrementBy: 5} ));

store.dispatch(
    incrementCountGen()
); 
store.dispatch(
    resetCountGen()
);
store.dispatch(decrementCountGen());

store.dispatch(decrementCountGen({decrementBy: 12}));

store.dispatch(setCountGen({count:25}));
console.log(typeof unsubscribe);


// it returns it not prints it






// getstate() will return a object by running store createStore
// it is a method on store
// the get state is used to return the state.
// hence this return the actual value



// Action is an object used to change the state and hence manipulate the view


// RESET - to set count to zero(extra work)


//$$$task :setCountGen 
// and resetCountGen