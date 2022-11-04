import { createSlice } from "@reduxjs/toolkit/dist";

const initialState = {
    token: [],
    isFetching: false,
    error: false,
    isValid: false,
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
            state.isValid = true;
        },
        getTokenFailure: (state) => {
            state.isFetching = false;
            state.error = true;
            state.isValid = false;
        }
    }
})

export const { getTokenStart, getTokenSuccess, getTokenFailure } = tokenSlice.actions;
export default tokenSlice.reducer;