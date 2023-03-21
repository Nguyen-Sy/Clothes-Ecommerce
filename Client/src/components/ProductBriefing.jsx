import { useState } from "react";
import { useDispatch } from "react-redux";
import { formatCash } from "../FormatCash";
import { addItem } from "../redux/slices/cart";

export default function ProductBriefing(props) {
    const product = props.product;
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const addItemToCart = () => {
        dispatch(
            addItem({
                product: product._id,
                color: props.color,
                size: props.size,
                price: product.price,
                quantity: quantity,
            })
        );
        window.alert("Thêm vào giỏ hàng thành công");
    };
    return (
        <div className="product-briefing">
            <div className="briefing__left">
                <div className="picture-for-product">
                    <div className="main-picture">
                        <img
                            src={
                                product.images
                                    ? `https://drive.google.com/uc?export=view&id=${product.images[0]}`
                                    : ""
                            }
                            alt=""
                        />
                    </div>
                </div>
            </div>

            <div className="briefing__right">
                <div className="header__briefing">
                    <p>{product.name}</p>
                </div>

                <div className="product-page_price">
                    <div className="price__product">
                        <span>{formatCash(parseInt(product.price))}</span>
                    </div>
                </div>

                <div className="in4-for-shipping">
                    <div className="product__categorize">
                        <div className="color-and-size">
                            <div className="container">
                                <div className="header__color-and-size">
                                    <span>Màu</span>
                                </div>

                                <div className="list__color-and-size">
                                    {product.varitation
                                        ? product.varitation.color.map(
                                              (item, index) => {
                                                  return (
                                                      <span
                                                          key={index}
                                                          className={`item__color-and-size ${
                                                              props.color ===
                                                              index
                                                                  ? "active"
                                                                  : ""
                                                          }`}
                                                          onClick={() =>
                                                              props.setColor(
                                                                  index
                                                              )
                                                          }
                                                      >
                                                          {item}
                                                      </span>
                                                  );
                                              }
                                          )
                                        : ""}
                                </div>
                            </div>
                            <div className="container">
                                <div className="header__color-and-size">
                                    <span>Size</span>
                                </div>

                                <div className="list__color-and-size">
                                    {product.varitation
                                        ? product.varitation.size.map(
                                              (item, index) => {
                                                  return (
                                                      <span
                                                          key={index}
                                                          className={`item__color-and-size ${
                                                              props.size ===
                                                              index
                                                                  ? "active"
                                                                  : ""
                                                          }`}
                                                          onClick={() =>
                                                              props.setSize(
                                                                  index
                                                              )
                                                          }
                                                      >
                                                          {item}
                                                      </span>
                                                  );
                                              }
                                          )
                                        : ""}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="amount">
                        <span className="header__amount">Số lượng</span>

                        <div className="amount__product">
                            <span
                                style={{ marginRight: "10px" }}
                                className="quantity_button"
                                onClick={() => setQuantity(quantity + 1)}
                            >
                                +
                            </span>
                            <span>{quantity}</span>
                            <span
                                style={{ marginLeft: "10px" }}
                                className="quantity_button"
                                onClick={() =>
                                    quantity > 1
                                        ? setQuantity(quantity - 1)
                                        : setQuantity(1)
                                }
                            >
                                -
                            </span>
                        </div>

                        <div className="product__ready">
                            <span>Có {product.stock} sản phẩm trong kho</span>
                        </div>
                    </div>
                </div>
                <div className="product-page_handle">
                    <div className="add-too-cart">
                        <ion-icon
                            className="icon__add-too-cart"
                            name="cart"
                        ></ion-icon>
                        <span onClick={() => addItemToCart()}>
                            Thêm Vào Giỏ Hàng
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
