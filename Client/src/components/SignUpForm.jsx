import { useState } from "react";
import "../assets/css/LoginForm.css";

function SignUpForm({ onSignUpChange }) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setpasswordAgain] = useState("");

    const checkSignUp = () => {};

    return (
        <form className="container-1139-item fillup">
            <h2 className="heading-login">ĐĂNG KÝ</h2>
            <input
                className="login-input"
                type="text"
                id="tb_loginName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Email:"
            />
            <input
                className="login-input"
                type="password"
                id="tb_password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mật khẩu: "
            />
            <input
                className="login-input"
                type="password"
                id="tb_passwordAgain"
                value={passwordAgain}
                onChange={(e) => setpasswordAgain(e.target.value)}
                placeholder="Nhập lại mật khẩu: "
            />
            <button
                className="button bt_login"
                id="bt_login"
                onClick={checkSignUp}
            >
                ĐĂNG KÝ
            </button>
            <div className="container-1139 signup">
                <p className="signup-content">Đã có tài khoản?</p>
                <p
                    className="signup-content --heavy"
                    style={{ cursor: "pointer" }}
                >
                    Đăng nhập
                </p>
            </div>
        </form>
    );
}
export default SignUpForm;
