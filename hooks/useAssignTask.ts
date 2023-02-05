import { useMutation } from "react-query"
import axiosInstance from "../utils/axios.config"

type taskData = {
    title: string
    deadline: Date
    format: string
    question: string
    description: string
}
interface IExpert {
    userId: string,
    data: taskData | FormData
}

const task = async ({ userId, data }: IExpert) => 
    await axiosInstance.post(`upload/createTask/${userId}`, data, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `${localStorage.getItem('token')}`
        }
    })

const useAssignTask = (
    handleSuccess: (data: taskData) => void,
    handleError: (error: any) => void
) => useMutation(task, {
    onSuccess: (data) => handleSuccess(data.data as taskData),
    onError: (error: any) => handleError(error)
})

export default useAssignTask;