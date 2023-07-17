import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:'Auth',
    initialState: {
        isLoggedIn: false,
        userEmail: null
    },
    reducers:{
        login(state, action) {
            state.isLoggedIn = true;
            state.userEmail = action.payload;
        },
        logout(state, action){
            state.isLoggedIn = false;
            state.userEmail = null;
        },
        set(state, action){
            state.isLoggedIn = action.payload.isLoggedIn;
            state.userEmail = action.payload.userEmail;
        }
    }
})

export const authActions = authSlice.actions;

export default authSlice.reducer;