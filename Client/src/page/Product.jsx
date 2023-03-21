import productApi from "../api/product";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Logo from "../components/LogoHeader";
import RecommandSix from "../components/OtherProduct_6";
import Briefing from "../components/ProductBriefing";
import Detail from "../components/ProductDetail";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../assets/css/Product.css";

export default function ProductContent() {
    const [product, setProduct] = useState({});
    const [color, setColor] = useState(0);
    const [size, setSize] = useState(0);
    const { productId } = useParams();
    useEffect(() => {
        console.log(productId);
        const fetchData = async () => {
            const res = await productApi.getProductById(productId);

            setProduct(res.data);
        };
        fetchData();
    }, [productId]);
    return (
        <div>
            <Header />
            <Logo location="Sản phẩm" />

            {product !== {} ? (
                <div className="product-page_content">
                    <div className="product-page_container">
                        <Briefing
                            product={product}
                            size={size}
                            setSize={setSize}
                            color={color}
                            setColor={setColor}
                        />

                        <div className="product-page_product-content">
                            <Detail product={product} />
                            <RecommandSix product={product} />
                        </div>
                    </div>
                </div>
            ) : (
                "Loading"
            )}

            <Footer />
        </div>
    );
}
