import { Route, Routes } from "react-router-dom";

import Admin from "../page/Admin";
import Buyer from "../page/Buyer.jsx";
import Cart from "../page/Cart";
import Category from "../page/Category";
import HistoryPage from "../page/HistoryPage";
import LandingPage from "../page/LandingPage";
import LoginPage from "../page/LoginPage";
import Product from "../page/Product";
import PurchasedPage from "../page/PurchasedPage";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/purchase" element={<PurchasedPage />} />
            <Route path="/buyer" element={<Buyer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/category" element={<Category />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/admin" element={<Admin />} />
        </Routes>
    );
}
