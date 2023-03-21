import axios from "axios";
import axiosClient from "./axiosClient";

const productApi = {
    getAllProduct: () => axiosClient.get("product"),
    getProductById: (id) => axiosClient.get(`product/${id}`),
    updateProduct: (id, params) => axiosClient.put(`product/${id}`, params),
    createProduct: (params) => axiosClient.post(`product`, params),
    deleteProduct: (id) => axiosClient.delete(`product/${id}`),
    uploadImage: (params) => axios.post("http:localhost:8000/api/product/image", params, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
};

export default productApi;