import axiosClient from "./axiosClient";

const orderApi = {
    getAllOrder: () => axiosClient.get("order"),
    getOrderByUserId: (id) => axiosClient.get(`order/${id}`),
    updateOrder: (params, id) => axiosClient.post(`order/${id}`, params),
    createOrder: (params) => axiosClient.post("order", params)
};

export default orderApi;