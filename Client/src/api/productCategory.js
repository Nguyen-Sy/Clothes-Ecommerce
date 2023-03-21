import axiosClient from "./axiosClient";

const END_POINT = "productcategory"

const productCategoryApi = {
    getAllProductCategory: () => axiosClient.get(END_POINT),
    createProductCategory: (params) => axiosClient.post(END_POINT, params),
    updateProductCategory: (id, params) => axiosClient.put(`${END_POINT}/${id}`, params),
    deleteProductCategory: (id, params) => axiosClient.delete(`${END_POINT}/${id}`, params),
};

export default productCategoryApi;