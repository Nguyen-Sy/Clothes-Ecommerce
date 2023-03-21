import axios from "axios";
import qs from "query-string";

const getToken = () => localStorage.getItem("token")

const axiosClient = axios.create({
    baseURL: "http://localhost:8000/api/",
    paramsSerializer: {
        serialize: function (params) {
            return qs.stringify(params, { arrayFormat: 'repeat' })
        }
    }
})

axiosClient.interceptors.request.use(async (config) => {
    return {
        ...config,
        headers: {
            "Content-Type": "application/json",
            Authorization: getToken ? `Bearer ${getToken()}` : ""
        }
    }
})

axiosClient.interceptors.response.use((response) => {
    if (response.status === 401) {
        alert("You are not authorized");
    }
    return response;
}, (error) => {
    if (error.response && error.response.data) {
        return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
});

export default axiosClient