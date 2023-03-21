import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/css/CartIcon.css";

function CartIcon(props) {
    const numberItemInCart = useSelector((state) => state.userCart.value);
    return (
        <div>
            <Link to="/purchase" style={{ position: "relative" }}>
                <FontAwesomeIcon
                    className="button-cart"
                    icon={faCartShopping}
                    style={props.style}
                />
                {function () {
                    if (numberItemInCart.length !== 0)
                        return (
                            <div className="number-item-cart">
                                {numberItemInCart.length}
                            </div>
                        );
                }.call(this)}
            </Link>
        </div>
    );
}
export default CartIcon;
