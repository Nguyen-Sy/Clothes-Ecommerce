import Avatar from "../components/ProfileAva";
import In4 from "../components/ProfileIn4";
import ProfileHeader from "../components/BuyerProfileHeader";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Logo from "../components/LogoHeader";

import "../assets/css/Buyer.css";

export default function Buyer() {
    return (
        <>
            <Header />
            <Logo location="Thông tin cá nhân" />
            <div id="buyer_content">
                <div className="buyer_container">
                    <ProfileHeader />
                    <div className="buyer_profile-content">
                        <In4 />
                        <Avatar />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
