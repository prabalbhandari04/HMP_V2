import { useMutation } from "react-query"
import axiosInstance from "../utils/axios.config"

type expertData = {
    skills: string[]
    qualification: string
    bankAccount: string
    iamge: string
}
interface IExpert {
    userId: string,
    data: expertData | FormData
}

const expert = async ({ userId, data }: IExpert) => 
    await axiosInstance.post("http://localhost:5000/upload/expert/createExpert/639c06fafe3b90f55ae5e6b7", data, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `${localStorage.getItem('token')}`
        }
    })

const useExpert = (
    handleSuccess: (data: expertData) => void,
    handleError: (error: any) => void
) => useMutation(expert, {
    onSuccess: (data) => handleSuccess(data.data as expertData),
    onError: (error: any) => handleError(error)
})

export default useExpert;