import axiosClient from "./axiosClient";

const userApi = {
    getUserById: (id, params) => axiosClient.get(`user/${id}`, params),
    updateUser: (id, params) => axiosClient.post(`user/${id}`, params),
}
export default userApi;