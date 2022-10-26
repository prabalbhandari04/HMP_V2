import axios from "axios";

let access_token: string = '';

if (typeof window !== 'undefined') {
    access_token = localStorage.getItem('access_token') as string;
}

const axiosInstance = axios.create({
    baseURL: "https://hmp-backend.onrender.com/",
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ access_token
    }
});

axiosInstance.defaults.withCredentials = false;
axiosInstance.defaults.xsrfCookieName = 'csrftoken'
axiosInstance.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default axiosInstance;