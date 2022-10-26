import { createSlice } from "@reduxjs/toolkit/dist";

const initialState = {
    token: [],
    isFetching: false,
    error: false,
}

const tokenSlice = createSlice({
    name: "token",
    initialState,
    reducers: {
        getTokenStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getTokenSuccess: (state, action) => {
            state.isFetching = false;
            state.token = action.payload;
            state.error = false;
        },
        getTokenFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }
    }
})

export const { getTokenStart, getTokenSuccess, getTokenFailure } = tokenSlice.actions;
export default tokenSlice.reducer;