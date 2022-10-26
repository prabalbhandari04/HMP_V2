import axiosInstance from "../utils/axios.config";
import { userInfoFailure, userInfoStart, userInfoSuccess } from "./features/userSlice";

export const getUserInfo = async(dispatch: any, token: any) => {
    dispatch(userInfoStart());
    try {
        const res = await axiosInstance.get("user/info", token);
        dispatch(userInfoSuccess(res.data));
    } catch (err) {
        dispatch(userInfoFailure());
    }
}