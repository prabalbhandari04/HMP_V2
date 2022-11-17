import { useMutation } from "react-query"
import axiosInstance from "../utils/axios.config"

type loginData = {
    email: string
    password: string
}

const login = async (data: loginData) => 
    await axiosInstance.post("user/login", data)

const useLogin = (
    handleSuccess: (data: loginData) => void,
    handleError: (error: any) => void
) => useMutation(login, {
    onSuccess: (data) => handleSuccess(data.data as loginData),
    onError: (error: any) => handleError(error)
})

export default useLogin;