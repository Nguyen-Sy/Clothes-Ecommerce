import React from "react";
import FacebookLogin from "react-facebook-login";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import authApi from "../api/auth";
import { setUserInfo } from "../redux/slices/userInfo";

export default function LoginWithFacebook() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const resFb = (respone) => {
        localStorage.setItem("token", respone.accessToken);
        authApi
            .facebookLogin()
            .then((res) => {
                localStorage.setItem("token", res.data.token);
                dispatch(setUserInfo(res.data.user));
                navigate("/");
            })
            .catch((err) => console.log(err));
    };

    return (
        <FacebookLogin
            appId="1144603973071849"
            autoLoad={false}
            field="name, email, picture"
            callback={resFb}
        />
    );
}
