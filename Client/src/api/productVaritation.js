import axiosClient from "./axiosClient";

const END_POINT = "productvaritation"

const productVaritationApi = {
    createProductVaritation: (params) => axiosClient.post(END_POINT, params),
    updateProductVaritation: (id, params) => axiosClient.post(`${END_POINT}/${id}`, params),
    deleteProductVaritation: (id) => axiosClient.delete(`${END_POINT}/${id}`),
};

export default productVaritationApi;