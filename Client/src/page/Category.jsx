import CateHeader from "../components/CateHeader";
import CateItem from "../components/CateItem";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Logo from "../components/LogoHeader";

import "../assets/css/Category.css";

export default function Content() {
    return (
        <>
            <Header />
            <Logo location="Category" />
            <div className="category-page_content">
                <div className="category-page_container">
                    <div className="category-page_category__main">
                        <CateHeader />
                        <CateItem />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
