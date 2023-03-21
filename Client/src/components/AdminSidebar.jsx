import {
    faCalendar,
    faMoneyBill,
    faShirt,
    faSwatchbook,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

const menu = [
    {
        name: "Đơn hàng",
        icon: <FontAwesomeIcon icon={faCalendar} className="category-icon" />,
    },
    {
        name: "Sản phẩm",
        icon: <FontAwesomeIcon icon={faShirt} className="category-icon" />,
    },
    {
        name: "Loại sản phẩm",
        icon: <FontAwesomeIcon icon={faSwatchbook} className="category-icon" />,
    },
    {
        name: "Thanh toán",
        icon: <FontAwesomeIcon icon={faMoneyBill} className="category-icon" />,
    },
];

export default function AdminSidebar(props) {
    return (
        <div
            className="container-item"
            style={{
                gap: "0 5px",
                display: "flex",
                flexDirection: "column",
                width: "50%"
            }}
        >
            {menu.map((item, index) => {
                return (
                    <div
                        onClick={() => {
                            props.setCategory(index);
                        }}
                        key={index}
                        className="container-item"
                        style={{
                            gap: "0 5px",
                            padding: "16px 30px",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            color: props.category == index ? "red" : "black",
                            cursor: "pointer",
                            backgroundColor: "white",
                        }}
                    >
                        <div>{item.icon}</div>
                        <div style={{ paddingLeft: "10px" }}>{item.name}</div>
                    </div>
                );
            })}
        </div>
    );
}
