import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import productApi from "../api/product";
import AdminContainer from "../components/AdminContainer";
import AdminSidebar from "../components/AdminSidebar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Logo from "../components/Logo";
import { setProductList } from "../redux/slices/productList";
export default function Admin(props) {
    const dispatch = useDispatch();
    const [category, setCategory] = useState(0);
    useEffect(() => {
        productApi
            .getAllProduct()
            .then((res) => {
                dispatch(setProductList(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    });
    return (
        <div style={{ backgroundColor: "#F3F3F3", width: "100%" }}>
            <Header />
            <Logo location={"Admin"}></Logo>
            <section
                className="container-1056"
                style={{
                    paddingTop: "32px",
                    alignItems: "start",
                }}
            >
                <AdminSidebar setCategory={setCategory} category={category} />
                <div
                    className="container-1056 "
                    style={{
                        margin: "0 0",
                        gap: "32px 0",
                        border: "1px black",
                        backgroundColor: "white",
                        marginBottom: "20px",
                        width: "100%",
                    }}
                >
                    <AdminContainer category={category} />
                </div>
            </section>
            <Footer />
        </div>
    );
}
