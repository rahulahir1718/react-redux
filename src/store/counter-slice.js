import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'Counter',
    initialState: {
        counter:0
    },
    reducers:{
        add(state, action) {
            state.counter = state.counter + action.payload;
        },
        subtract(state, action){
            state.counter = state.counter - action.payload; 
        },
        set(state, action){
            state.counter = action.payload;
        }
    }
})

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;