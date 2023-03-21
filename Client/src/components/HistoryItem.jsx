import {
    faCartPlus,
    faTruck,
    faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../assets/css/HistoryItem.css";
import { formatCash } from "../FormatCash";
import { addItem } from "../redux/slices/cart";

function HistoryItem(props) {
    const userInfo = useSelector((state) => state.userInfo.value);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = () => {
        console.log(props.item);
        dispatch(
            addItem({
                user: userInfo._id,
                lineItem: [].push(props.item),
            })
        );
        navigate("/purchase");
    };
    return (
        <div
            className="container-item"
            style={{
                flexDirection: "column",
                width: "100%",
                backgroundColor: "white",
            }}
        >
            <div
                className="container-item width"
                style={{ padding: "16px 0", borderBottom: "1px solid black" }}
            >
                <div className="container-item" style={{ gap: "0 11px" }}>
                    <div className="mall">Mall</div>
                    <div className="shopname">{props.shopName}</div>
                </div>
                {function () {
                    switch (props.status) {
                        case "shipped":
                            return (
                                <div
                                    className="container-item status"
                                    style={{ gap: "0 21px" }}
                                >
                                    <FontAwesomeIcon
                                        icon={faTruck}
                                        style={{
                                            fontSize: "20px",
                                            color: "#3EA835",
                                        }}
                                    />
                                    <div className="status-desc">
                                        Giao hàng thành công
                                    </div>
                                </div>
                            );
                        case "cancelled":
                            return (
                                <div className="status-desc not-success">
                                    ĐÃ HỦY
                                </div>
                            );
                        case "on_shipping":
                            return (
                                <div
                                    className="container-item status"
                                    style={{ gap: "0 21px" }}
                                >
                                    <FontAwesomeIcon
                                        icon={faTruckFast}
                                        style={{
                                            fontSize: "20px",
                                            color: "#3EA835",
                                        }}
                                    />
                                    <div className="status-desc">Đang giao</div>
                                </div>
                            );
                        case "in_cart":
                            return (
                                <div
                                    className="container-item status"
                                    style={{ gap: "0 21px" }}
                                >
                                    <FontAwesomeIcon
                                        icon={faCartPlus}
                                        style={{
                                            fontSize: "20px",
                                            color: "#3EA835",
                                        }}
                                    />
                                    <div className="status-desc">
                                        Trong giỏ hàng
                                    </div>
                                </div>
                            );
                        default:
                            return <div></div>;
                    }
                }.call(this)}
            </div>
            <div className="container-item width" style={{ padding: "16px 0" }}>
                <div className="container-item" style={{ gap: "0 11px" }}>
                    <img
                        src={`https://drive.google.com/uc?export=view&id=${props.photoURL}`}
                        alt="item-img"
                    />
                    <div
                        className="container-item"
                        style={{ flexDirection: "column", alignItems: "start" }}
                    >
                        <div>{props.productName}</div>
                        <div style={{ color: "grey" }}>
                            Phân loại hàng: {props.productCategory}
                        </div>
                        <div>Số lượng: {props.quantity}</div>
                    </div>
                </div>
                <div className="item-price-history">{props.productPrice}</div>
            </div>
            <div className="horizontal-line"></div>
            <div className="container-item width total">
                <div className="total-content">Tổng số tiền:</div>
                <div className="total-amount">{formatCash(props.total)}đ</div>
            </div>
            <div className="container-item width item-button">
                <div className="button again" onClick={() => handleClick()}>
                    Mua lại
                </div>
                {/* <div className="button viewshop">Xem shop</div> */}
            </div>
        </div>
    );
}
export default HistoryItem;
