import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/css/LandingPageHeader.css";
import Logout from "../components/Logout";
import CartIcon from "./CartIcon";

function LandingPageHeader(props) {
    const userInfor = useSelector((state) => state.userInfo.value);
    console.log(userInfor);

    return (
        <div className="landing-page-header">
            {/* Header */}
            <div className="container-1139">
                <div className="header-logo">LOGO</div>
                <ul className="menu">
                    <li className="menu-item">
                        {userInfor.login == "63835f52d799a422fc8abc4b" ? (
                            <Link to="/admin" className="menu-link">
                                ADMIN
                            </Link>
                        ) : (
                            ""
                        )}
                    </li>
                </ul>
                <div className="header-auth">
                    <CartIcon
                        style={{
                            width: "25px",
                            height: "25px",
                            color: "var(--text-color)",
                        }}
                    />
                    {function () {
                        if (userInfor.name === "")
                            return (
                                <Link
                                    to="/login"
                                    className="button button-login"
                                >
                                    LOGIN
                                </Link>
                            );
                        return (
                            <Link to="/history">
                                <img
                                    src={userInfor.photoURL}
                                    alt="category-avatar"
                                />
                            </Link>
                        );
                    }.call(this)}
                    <Logout />
                </div>
            </div>
        </div>
    );
}

export default LandingPageHeader;
