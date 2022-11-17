import { useMutation } from "react-query"
import axiosInstance from "../utils/axios.config"

type registerData = {
    email: string
    password: string
    confirmPassword?: string
    username: string
}

const register = async (data: registerData) => 
    await axiosInstance.post("user/register", data)

const useRegister = (
    handleSuccess: (data: registerData) => void,
    handleError: (error: any) => void
) => useMutation(register, {
    onSuccess: (data) => handleSuccess(data.data as registerData),
    onError: (error: any) => handleError(error)
})

export default useRegister;