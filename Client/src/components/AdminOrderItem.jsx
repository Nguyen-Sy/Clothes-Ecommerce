import React, { useState } from "react";

export default function AdminOrderItem(props) {
    const order = props.item;
    const products = order.lineItem;
    const [isEdit, setIsEdit] = useState(false);
    return (
        <div
            className="container-item"
            style={{
                width: "100%",
                margin: "20px 0",
                flexDirection: "column",
                cursor: "default",
            }}
        >
            <div
                className="container-item"
                style={{
                    justifyContent: "space-around",
                }}
            >
                <div>Tên người mua: {order.user.name}</div>
                <div
                    onClick={() => {
                        setIsEdit(true);
                        console.log("editing");
                    }}
                    style={{ cursor: "pointer" }}
                >
                    Trạng thái: {order.state}
                </div>
            </div>
            {products !== []
                ? products.map((item, index) => {
                      return (
                          <Product key={index} product={item} index={index} />
                      );
                  })
                : ""}
        </div>
    );
}

function Product(props) {
    const index = props.index;
    const product = props.product;
    return (
        <div
            className="container-item"
            style={{
                padding: "20px 0",
                borderTop: "1px  dashed black",
                marginTop: "10px",
                width: "750px",
                width: "100%",
                justifyContent: "space-between",
            }}
        >
            <img
                src={
                    product.images
                        ? `https://drive.google.com/uc?export=view&id=${product.images[0]}`
                        : ""
                }
                style={{
                    width: "20%",
                }}
            />
            <div
                style={{
                    paddingRight: "15px",
                    border: "none",
                    width: "20%",
                    fontSize: "16px",
                    textAlign: "center",
                }}
            >
                {product.name}
            </div>

            <div
                style={{
                    paddingRight: "15px",
                    border: "none",
                    width: "20%",
                    textAlign: "center",
                    fontSize: "16px",
                }}
            >
                Quantity: {product.quantity}
            </div>
            <div
                style={{
                    paddingRight: "15px",
                    border: "none",
                    width: "20%",
                    textAlign: "center",
                    fontSize: "16px",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                size: {product.variant.size}
                color: {product.variant.color}
            </div>
            <div
                style={{
                    paddingRight: "15px",
                    border: "none",
                    width: "20%",
                    textAlign: "center",
                    fontSize: "16px",
                }}
            >
                Total: {product.price * product.quantity} vnđ
            </div>
        </div>
    );
}
