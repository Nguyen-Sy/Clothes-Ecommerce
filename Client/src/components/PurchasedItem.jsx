import { faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../assets/css/CartItem.css";
import { formatCash } from "../FormatCash";
import { removeItem, updateItem } from "../redux/slices/cart";

function PurchasedItem(props) {
    const product = props.product.product;
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(parseInt(props.quantity));
    useEffect(() => console.log(product));

    function changeQuantity(value) {
        if (quantity + value == 0) {
            dispatch(removeItem(props.product));
            setQuantity(0);
        } else {
            dispatch(
                updateItem({
                    ...props.product,
                    product: product._id,
                    quantity: quantity + value,
                })
            );
            setQuantity(quantity + value);
        }
    }

    return (
        <div className="container-1056 cart-item">
            <div
                className="container-item container-padding"
                style={{
                    position: "relative",
                    paddingTop: "58px",
                    paddingBottom: "40px",
                }}
            >
                <div
                    className="container-item"
                    style={{
                        gap: "0px 11px",
                        width: "37.401%",
                        justifyContent: "flex-start",
                    }}
                >
                    <img
                        src={props.urlImg}
                        style={{ width: "48px", height: "48px" }}
                        alt=""
                    />
                    <div className="name">{product ? product.name : ""}</div>
                </div>
                <div className="option">
                    Loại: {product ? product.category.name : ""}
                </div>
                <div
                    className="id-item"
                    style={{ width: "14.802%", color: "black" }}
                >
                    {formatCash(product ? props.product.price : 0)}đ
                </div>
                <div className="container-item quatity">
                    <div
                        className="quatity-item"
                        style={{
                            width: "25%",
                            borderRight: "1px solid rgba(0,0,0,.09)",
                            cursor: "pointer",
                        }}
                        onClick={() => changeQuantity(-1)}
                    >
                        -
                    </div>
                    <div
                        className="quatity-item"
                        style={{
                            width: "50%",
                            borderRight: "1px solid rgba(0,0,0,.09)",
                        }}
                    >
                        {quantity}
                    </div>
                    <div
                        className="quatity-item"
                        style={{ width: "25%", cursor: "pointer" }}
                        onClick={() => changeQuantity(1)}
                    >
                        +
                    </div>
                </div>
                <div
                    className="id-item"
                    style={{
                        width: "11.977%",
                        textAlign: "end",
                        color: "black",
                    }}
                >
                    {formatCash(quantity * props.product.price)}đ
                </div>
                <div className="container-item shop">
                    <div className="mall">Mall</div>
                    <div className="shopname">{props.shopName}</div>
                </div>
            </div>
            <div className="container-item container-padding voucher">
                <div
                    className="container-item"
                    style={{ paddingTop: "13.31px", paddingBottom: "13.31px" }}
                >
                    <FontAwesomeIcon
                        icon={faTag}
                        style={{ width: "19.17px", height: "21.26px" }}
                    />
                    <div className="shopvoucher">Voucher của Shop</div>
                </div>
                <div className="choosevoucher">Chọn Voucher</div>
            </div>
            <div className="container-item container-padding shipment">
                <div
                    className="container-item"
                    style={{
                        width: "59.182%",
                        paddingTop: "10px",
                        paddingBottom: "36.6px",
                        borderLeft: "1px dashed #34251F",
                        justifyContent: "space-between",
                    }}
                >
                    <div className="shipment-company">Đơn vị vận chuyển:</div>
                    <div
                        className="container-item"
                        style={{ position: "relative", width: "24.815%" }}
                    >
                        <div className="shipment-desc">Nhanh</div>
                        <div className="shipment-time">Thời gian nhận hàng</div>
                    </div>
                    <div className="shipment-change">THAY ĐỔI</div>
                    <div className="shipment-price">12.000đ</div>
                </div>
            </div>
            <div className="container-item container-padding item-price-cart">
                <div className="itemprice-heading">Tổng số tiền:</div>
                {/* Tong so tien = So luong * Don gia + gia ship (12) */}
                <div className="itemprice-amount">
                    {formatCash(quantity * props.product.price + 12000)}đ
                </div>
            </div>
        </div>
    );
}
export default PurchasedItem;
