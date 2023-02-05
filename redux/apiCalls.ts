import axiosInstance from "../utils/axios.config";
import { userInfoSuccess } from "./features/userSlice";

type Dispatch = (arg0: { type: string; payload?: any }) => void;

export const getUserInfo = async(dispatch: any, token: any) => {
    try {
        const res = await axiosInstance.get("user/info", token);
        dispatch(userInfoSuccess(res.data));
    } catch (err) {
        console.log(err);
    }
}
