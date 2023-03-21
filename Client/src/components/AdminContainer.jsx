import React, { useEffect, useState } from "react";
import orderApi from "../api/order";
import AdminCategoryItem from "./AdminCategoryItem";
import AdminOrderItem from "./AdminOrderItem";
import AdminPayment from "./AdminPayment";
import AdminProductItem from "./AdminProductItem";

export default function AdminContainer(props) {
    const [order, setOrder] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const resOrder = await orderApi.getAllOrder();
            setOrder(resOrder.data);
        };
        fetchData();
    }, []);

    return (
        <div style={{ width: "100%" }}>
            {props.category == 1 ? <AdminProductItem /> : ""}
            {props.category == 2 ? <AdminCategoryItem /> : ""}
            <div
                className="container-item"
                style={{ width: "100%", margin: "20px 0", flexDirection: "column" }}
            >
                {props.category == 0
                    ? order.map((item, index) => (
                          <AdminOrderItem
                              item={item}
                              key={index}
                              index={index}
                          />
                      ))
                    : ""}
            </div>

            {props.category == 3 ? (
                <>
                    <div
                        className="container-item"
                        style={{ width: "100%", margin: "20px 0" }}
                    >
                        <div style={{ width: "25%", textAlign: "center" }}>
                            Order Id
                        </div>
                        <div style={{ width: "25%", textAlign: "center" }}>
                            User
                        </div>
                        <div style={{ width: "25%", textAlign: "center" }}>
                            Provider
                        </div>
                        <div style={{ width: "25%", textAlign: "center" }}>
                            Status
                        </div>
                    </div>
                    <AdminPayment />
                </>
            ) : (
                ""
            )}
        </div>
    );
}
