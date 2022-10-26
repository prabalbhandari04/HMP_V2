import { createSlice } from "@reduxjs/toolkit/dist";

const initialState = {
    auth: [],
    isFetching: false,
    isLogged: false,
    error: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        postAuthStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        postAuthSuccess: (state, action) => {
            state.isFetching = false;
            state.auth = action.payload;
            state.isLogged = true;
            state.error = false;
        },
        postAuthFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }
    }
})

export const { postAuthStart, postAuthSuccess, postAuthFailure } = authSlice.actions;
export default authSlice.reducer;