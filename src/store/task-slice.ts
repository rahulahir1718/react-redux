import { createSlice } from "@reduxjs/toolkit";
import Task from "../model/Task";

const initialState: Task[] = [
    {
        text:"Implement Login Page"
    },
    {
        text:"Implement Tasks Page"
    }
];

const taskSlice = createSlice({
    name:'Tasks',
    initialState: {
        tasks : initialState
    },
    reducers:{
        add(state, action) {
            state.tasks = [...state.tasks, {text:action.payload}]
        },
        remove(state, action){
            state.tasks  = state.tasks.filter(task=>task.text!=action.payload);
        },
    }
})

export const taskActions = taskSlice.actions;

export default taskSlice.reducer;