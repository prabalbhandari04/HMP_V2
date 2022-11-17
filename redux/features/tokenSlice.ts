import { createSlice } from "@reduxjs/toolkit/dist";

const initialState = {
    token: '',
    error: false,
    isLogged: false,
}

const tokenSlice = createSlice({
    name: "token",
    initialState,
    reducers: {
        getTokenSuccess: (state, action) => {
            state.token = action.payload;
            state.error = false;
            state.isLogged = true;
        },
        removeToken: (state) => {
            state.token = '';
            state.error = false;
            state.isLogged = false;
        }
    }
})

export const { getTokenSuccess, removeToken } = tokenSlice.actions;
export default tokenSlice.reducer;