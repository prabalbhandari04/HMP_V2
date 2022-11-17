import { createSlice } from "@reduxjs/toolkit/dist";

const initialState = {
    user: [],
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userInfoSuccess: (state, action) => {
            state.user = action.payload;
        },
        userLogout: (state) => {
            state.user = [];
        }
    }
})

export const { userInfoSuccess, userLogout } = userSlice.actions;
export default userSlice.reducer;