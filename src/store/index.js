import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";
import taskReducer from "./task-slice.ts";

// const reducer = (state = {counter:0}, action) => {
//     if(action.type == 'Add'){
//         return {
//             counter: state.counter + action.add
//         };
//     }

//     if(action.type == 'Subtract'){
//         return {
//             counter: state.counter - action.subtract
//         };
//     }

//     return {
//         counter:state.counter
//     };
// };


//const store = createStore(reducer);

const store  = configureStore({
    reducer: {counterState:  counterReducer, authState: authReducer, taskState: taskReducer}
});

export default store;