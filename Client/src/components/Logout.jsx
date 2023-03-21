import React from "react";
import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router";

const clientId =
    "490315784567-1hacf80iq1ne1nv7eblndv573nbem4cs.apps.googleusercontent.com";

export default function Logout() {
    const navigate = useNavigate();
    const onSuccess = () => {
        console.log("log out");
        navigate("/login");
    };

    const onClick = () => {
        navigate("/login");
        // window.FB.logout("/login");
    };

    return (
        // <button
        //     onClick={(e) => {
        //         e.preventDefault();
        //         onClick();
        //     }}
        // >
        //     Logout
        // </button>
        <GoogleLogout
            clientId={clientId}
            buttonText={"logout"}
            onLogoutSuccess={onSuccess}
        />
    );
}
