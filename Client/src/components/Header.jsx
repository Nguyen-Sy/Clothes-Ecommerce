import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/css/Header.css";
import CartIcon from "./CartIcon";

function Header() {
    const userInfor = useSelector((state) => state.userInfo.value);
    const numberItemInCart = useSelector(
        (state) => state.userCart.value
    ).lenght;

    return (
        <header>
            <div className="container-1056 header">
                <div className="container-item" style={{ gap: "0 5px" }}>
                    <FontAwesomeIcon icon={faBell} className="header-icon" />
                    <a href="top" className="notify">
                        Thông báo
                    </a>
                </div>
                <div className="container-item" style={{ gap: "0 5px" }}>
                    <FontAwesomeIcon
                        icon={faCircleQuestion}
                        className="header-icon"
                    />
                    <a href="top" className="notify">
                        Hỗ trợ
                    </a>
                </div>
                {/* <Link to='/purchase'><FontAwesomeIcon icon={faBagShopping} className="header-icon" /></Link> */}
                <CartIcon
                    style={{ width: "20px", height: "20px", color: "white" }}
                >
                    {numberItemInCart}
                </CartIcon>
                <Link to="/history">
                    <div className="container-item" style={{ gap: "0 5px" }}>
                        <img
                            src={
                                userInfor.photoURL
                                    ? `https://drive.google.com/uc?export=view&id=${userInfor.photoURL[0]}`
                                    : ""
                            }
                            alt="avatar"
                        />
                        <div className="notify">{userInfor.name}</div>
                    </div>
                </Link>
            </div>
        </header>
    );
}
export default Header;
