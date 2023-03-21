import { useEffect } from "react";
import { useDispatch } from "react-redux";
import productApi from "../api/product";
import productCategoryApi from "../api/productCategory";
import AboutUs from "../components/AboutUs";
import BestSeller from "../components/BestSeller";
import Discount from "../components/Discount";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LandingPageHeader from "../components/LandingPageHeader";
import NewCollection from "../components/NewCollection";
import OurProduct from "../components/OurProduct";
import Review from "../components/Review";
import { setProductCategoryList } from "../redux/slices/productCategory";
import { setProductList } from "../redux/slices/productList";

function LandingPage(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        productApi
            .getAllProduct()
            .then((res) => {
                dispatch(setProductList(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
        productCategoryApi
            .getAllProductCategory()
            .then((res) => dispatch(setProductCategoryList(res.data)))
            .catch((err) => console.log(err));
    });

    return (
        <div className="LandingPage" style={{ backgroundColor: "white" }}>
            <LandingPageHeader />
            <Hero />
            <NewCollection />
            <AboutUs />
            <BestSeller />
            <OurProduct />
            <Discount />
            <Review />
            <Footer />
        </div>
    );
}

export default LandingPage;
