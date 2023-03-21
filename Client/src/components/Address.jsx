import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/css/Address.css";

function Address(props) {
    return (
        <section style={{ marginTop: "26px", marginBottom: "26px" }}>
            <div className="container-1056 container-padding location">
                <div className="username-number">
                    {props.userName}: {props.userNumber}
                </div>
                <div className="address">{props.userAddress}</div>
                <a href="./top">
                    <div className="change">Thay Đổi</div>
                </a>
                <div className="container-item address-heading">
                    <FontAwesomeIcon
                        icon={faLocationDot}
                        style={{
                            color: "var(--heavyblue-color)",
                            fontSize: "25px",
                        }}
                    />
                    <div className="adrress-heading-content">
                        Địa Chỉ Nhận Hàng
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Address;
