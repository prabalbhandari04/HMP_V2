import axiosInstance from "../utils/axios.config";
import { getTokenFailure, getTokenStart, getTokenSuccess } from "./features/tokenSlice";
import { userInfoFailure, userInfoStart, userInfoSuccess } from "./features/userSlice";

type Dispatch = (arg0: { type: string; payload?: any }) => void;

export const getToken = async(dispatch: Dispatch) => {
    dispatch(getTokenStart())

    try {
        const res = await axiosInstance.get('/user/refresh_token');
        dispatch(getTokenSuccess(res.data));
    }
    catch (err: any) {
        dispatch(getTokenFailure())
        console.log(err)
    }
}

export const getUserInfo = async(dispatch: any, token: any) => {
    dispatch(userInfoStart());
    try {
        const res = await axiosInstance.get("user/info", token);
        dispatch(userInfoSuccess(res.data));
    } catch (err) {
        dispatch(userInfoFailure());
    }
}
