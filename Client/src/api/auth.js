import axiosClient from "./axiosClient";

const authApi = {
    localLogin: (params) => axiosClient.post("login", params),
    facebookLogin: () => axiosClient.get("auth/facebook"),
    googleLogin: (params) => axiosClient.post("auth/google", params),
};

export default authApi;