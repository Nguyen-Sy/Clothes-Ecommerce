import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import authApi from "../api/auth";
import "../assets/css/LoginForm.css";
import { isAuthenticated } from "../handlers/authHandler";
import { setUserInfo } from "../redux/slices/userInfo";
import LoginWithFacebook from "./LoginWithFacebook";
import LoginWithGoogle from "./LoginWithGoogle";

function LoginForm({ onSignUpChange }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [onSubmit, setOnSubmit] = useState(false);

    useEffect(() => {
        const checkToken = async () => {
            const res = await isAuthenticated();
            if (res) return navigate("/");
        };
        checkToken();
    }, [navigate]);

    const loginSubmit = async () => {
        if (onSubmit) return;

        const checkErr = {
            username: username.trim().length === 0,
            password: password.trim().length === 0,
        };

        if (checkErr.username || checkErr.password) return;

        setOnSubmit(true);
        authApi
            .localLogin({
                email: username,
                password,
            })
            .then((res) => {
                localStorage.setItem("token", res.data.token);
                dispatch(setUserInfo(res.data.user));
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleChange = useCallback(
        (event) => {
            onSignUpChange(true);
        },
        [onSignUpChange]
    );
    return (
        <form className="container-1139-item fillup">
            <h2 className="heading-login">ĐĂNG NHẬP</h2>
            <input
                className="login-input"
                id="tb_loginName"
                name="username"
                placeholder="Email:"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                className="login-input"
                id="tb_password"
                name="password"
                placeholder="Mật khẩu: "
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                className="button bt_login"
                id="bt_login"
                onClick={(e) => {
                    e.preventDefault();
                    loginSubmit();
                }}
            >
                ĐĂNG NHẬP
            </button>
            <a href="top" className="forget-content">
                Quên mật khẩu?
            </a>
            <div className="container-item or">
                <div className="horizontal-line"></div>
                <p className="or-content">HOẶC</p>
                <div className="horizontal-line"></div>
            </div>
            <div className="container-1139 login-logo-container" style={{}}>
                <LoginWithFacebook />
                <LoginWithGoogle />
            </div>
            <div className="container-1139 signup">
                <p className="signup-content">Bạn chưa có tài khoản?</p>
                <p
                    className="signup-content --heavy"
                    style={{ cursor: "pointer" }}
                    onClick={handleChange}
                >
                    Đăng ký
                </p>
            </div>
        </form>
    );
}
export default LoginForm;
