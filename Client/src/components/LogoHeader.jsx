import { Link } from "react-router-dom";
import "../assets/css/LogoHeader.css";
export default function LogoHeader(props) {
    return (
        <div className="logo_header-section-header">
            <div className="logo_header-content-header">
                <div className="logo_header-box-header-logo">
                    <div className="logo_header-content-header-logo">
                        <ion-icon
                            className="logo_header-icon-header-logo"
                            name="basket"
                        ></ion-icon>
                        <Link to="/">LOGO</Link>
                    </div>

                    <div className="logo_header-content-header-name">
                        <span>{props.location}</span>
                    </div>
                </div>

                <div className="logo_header-box-header-search">
                    <input className="logo_header-text-search" type="text" />
                    <div className="logo_header-icon-header-search">
                        <ion-icon name="search"></ion-icon>
                    </div>
                </div>
            </div>
        </div>
    );
}
