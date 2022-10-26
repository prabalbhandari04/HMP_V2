import { createSlice } from "@reduxjs/toolkit/dist";

const initialState = {
    user: [],
    isFetching: false,
    isLogged: false,
    error: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userInfoStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        userInfoSuccess: (state, action) => {
            state.isFetching = false;
            state.user = action.payload;
            state.error = false;
        },
        userInfoFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }
    }
})

export const { userInfoStart, userInfoSuccess, userInfoFailure } = userSlice.actions;
export default userSlice.reducer;