import FieldDetail from "../components/CartFieldDetail";
import FieldHeader from "../components/CartFieldHeader";
import GridPrice from "../components/CartGridPrice";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Logo from "../components/LogoHeader";
import RecommendSix from "../components/OtherProduct_6";

import "../assets/css/Cart.css";

export default function Cart() {
    return (
        <div>
            <Header />

            <Logo location="Giỏ hàng" />
            <div className="page-cart_content">
                <div className="page-cart_container">
                    <div className="page-cart_info-product">
                        <FieldHeader />
                        <FieldDetail />
                    </div>

                    <GridPrice />

                    <RecommendSix />
                </div>
            </div>
            <Footer />
        </div>
    );
}
