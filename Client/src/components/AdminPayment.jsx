import React from "react";

export default function AdminPayment() {
    return (
        <div
            className="container-item"
            style={{
                width: "100%",
                margin: "20px 0",
                paddingTop: "20px",
                borderTop: "1px dashed",
            }}
        >
            <div style={{ width: "25%", textAlign: "center" }}>Order Id</div>
            <div style={{ width: "25%", textAlign: "center" }}>User</div>
            <div style={{ width: "25%", textAlign: "center" }}>Provider</div>
            <div style={{ width: "25%", textAlign: "center" }}>Status</div>
        </div>
    );
}
