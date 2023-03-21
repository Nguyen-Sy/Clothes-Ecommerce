import { gapi } from "gapi-script";
import React from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import authApi from "../api/auth";
import { refreshTokenSetup } from "../handlers/refreshTokenSetup";
import { setUserInfo } from "../redux/slices/userInfo";

const GOOGLE_CLIENT_ID =
    "490315784567-1hacf80iq1ne1nv7eblndv573nbem4cs.apps.googleusercontent.com";

export default function LoginWithGoogle() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    React.useEffect(() => {
        const initClient = () => {
            gapi.auth2.init({
                clien_id: GOOGLE_CLIENT_ID,
                scope: "profile email https://www.googleapis.com/auth/contacts.readonly https://www.googleapis.com/auth/drive.file",
            });
        };
        gapi.load("auth2", initClient);
    });
    const onSuccess = (res) => {
        console.log("current user: ", res);
        localStorage.setItem("ggAToken", res.accessToken);
        authApi
            .googleLogin({
                token: res.tokenId,
            })
            .then((res) => {
                localStorage.setItem("token", res.data.token);
                dispatch(setUserInfo(res.data.user));
            });
        refreshTokenSetup(res);
        navigate("/");
    };

    const onFailure = (res) => {
        console.log(res);
    };

    return (
        <div>
            <GoogleLogin
                clientId={GOOGLE_CLIENT_ID}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
            />
        </div>
    );
}
