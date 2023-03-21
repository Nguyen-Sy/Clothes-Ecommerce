import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import orderApi from "../api/order";
import "../assets/css/PurchasedTotal.css";
import { formatCash } from "../FormatCash";
import { deleteAllItem } from "../redux/slices/cart";

function PurchasedTotal(props) {
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.userCart.value);
    const userInfor = useSelector((state) => state.userInfo.value);
    let shipFee = 0;
    let itemTotal = 0;
    const dispatch = useDispatch();

    //Giải thích hàm map: Là hợp hội 2 list: userListItem và allItem dựa trên id của sản phẩm

    for (var item of cartItems) {
        shipFee += 12000;
        itemTotal += item.price * item.quantity;
    }
    const createOrder = () => {
        const lineItem = props.cartProductList.map((item, index) => {
            return {
                variant: {
                    size: item.product.varitation.size[cartItems[index].size],

                    color: item.product.varitation.size[cartItems[index].color],
                },
                id: item.product._id,
                images: item.product.images,
                price: item.product.price,
                name: item.product.name,
                quantity: item.quantity,
            };
        });
        console.log(lineItem);
        orderApi
            .createOrder({
                user: userInfor._id,
                lineItem: lineItem,
            })
            .then((res) => {
                console.log(res);
                dispatch(deleteAllItem());
                if (window.confirm("Đặt hàng thành công")) {
                    navigate("/");
                }
            });
    };
    return (
        <div
            className="container-1056 purchase-method"
            style={{ backgroundColor: "white" }}
        >
            <div
                className="container-item container-padding"
                style={{ paddingBottom: "21px" }}
            >
                <div className="method-heading">Phương thức thanh toán</div>
                <div className="container-item" style={{ width: "38.247%" }}>
                    <div className="method-content">
                        Thanh toán khi nhận hàng
                    </div>
                    <div className="method-change">THAY ĐỔI</div>
                </div>
            </div>
            <div
                className="container-item container-padding"
                style={{
                    flexDirection: "column",
                    alignItems: "end",
                    gap: "21px 0",
                    borderTop: "1px dashed #34251F",
                    paddingTop: "21px",
                }}
            >
                <div className="container-item" style={{ width: "38.247%" }}>
                    <div className="method-content">Tổng tiền hàng: </div>
                    <div className="method-change" style={{ color: "black" }}>
                        {formatCash(itemTotal)}đ
                    </div>
                </div>
                <div className="container-item" style={{ width: "38.247%" }}>
                    <div className="method-content">Phí vận chuyển: </div>
                    <div className="method-change" style={{ color: "black" }}>
                        {formatCash(shipFee)}đ
                    </div>
                </div>
                <div className="container-item" style={{ width: "38.247%" }}>
                    <div className="method-content">Tổng thanh toán: </div>
                    <div className="method-change" style={{ color: "black" }}>
                        {formatCash(itemTotal + shipFee)}đ
                    </div>
                </div>
                <div className="button order" onClick={() => createOrder()}>
                    ĐẶT HÀNG
                </div>
            </div>
        </div>
    );
}
export default PurchasedTotal;
