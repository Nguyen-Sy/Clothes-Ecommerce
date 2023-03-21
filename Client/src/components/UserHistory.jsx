import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import orderApi from "../api/order";
import "../assets/css/Buyer.css";
import "../assets/css/UserHistory.css";
import HistoryItem from "../components/HistoryItem";

function UserHistory() {
    const [tab, setTab] = useState("all");
    const userInfor = useSelector((state) => state.userInfo.value);
    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        const fecthData = async () => {
            const res = await orderApi.getOrderByUserId(userInfor._id);
            console.log(res.data);
            setOrderList(res.data);
        };
        fecthData();
    }, []);

    //Giải thích hàm map: Hội 2 list: allItem và userListItem dựa trên id của sản phẩm

    return (
        <div
            className="container-item"
            style={{ flexDirection: "column", width: "74.528%" }}
        >
            <div className="history-menu">
                <span
                    className={
                        tab === "all"
                            ? "history-menu-link history-checked"
                            : "history-menu-link"
                    }
                    onClick={() => setTab("all")}
                    style={{ width: "18%" }}
                >
                    Tất cả
                </span>
                <span
                    className={
                        tab === "in_cart"
                            ? "history-menu-link history-checked"
                            : "history-menu-link"
                    }
                    onClick={() => setTab("in_cart")}
                    style={{ width: "28%" }}
                >
                    Trong giỏ hàng
                </span>
                <span
                    className={
                        tab === "on_shipping"
                            ? "history-menu-link history-checked"
                            : "history-menu-link"
                    }
                    onClick={() => setTab("on_shipping")}
                    style={{ width: "18%" }}
                >
                    Đang giao
                </span>
                <span
                    className={
                        tab === "shipped"
                            ? "history-menu-link history-checked"
                            : "history-menu-link"
                    }
                    onClick={() => setTab("shipped")}
                    style={{ width: "18%" }}
                >
                    Đã giao
                </span>
                <span
                    className={
                        tab === "cancelled"
                            ? "history-menu-link history-checked"
                            : "history-menu-link"
                    }
                    onClick={() => setTab("cancelled")}
                    style={{ width: "18%" }}
                >
                    Đã hủy
                </span>
            </div>

            <div
                className="container-item"
                style={{
                    flexDirection: "column",
                    width: "100%",
                    gap: "16px 0",
                }}
            >
                {orderList.length !== []
                    ? orderList.map((order) => {
                          return order.lineItem.map((item) => {
                              return (
                                  <HistoryItem
                                      item={item}
                                      shopName={"LOGO"}
                                      status={order.state}
                                      productName={item.name}
                                      photoURL={item.images[0]}
                                      total={
                                          parseInt(item.price) *
                                          parseInt(item.quantity)
                                      }
                                      productCategory={`size: ${item.variant.size}, color: ${item.variant.color}`}
                                      quantity={item.quantity}
                                      productPrice={item.price}
                                  />
                              );
                          });
                      })
                    : ""}
            </div>
        </div>
    );
}
export default UserHistory;
