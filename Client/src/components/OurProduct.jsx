import { useState } from "react";
import Carousel from "react-grid-carousel";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/css/OurProduct.css";
import OurProductItem from "./OurProductItem";
function OurProduct() {
    const dispatch = useDispatch();
    const [tab, setTab] = useState("hot");
    const products = useSelector((state) => state.productList.value);

    return (
        <section>
            <div className="container-1139 ourproduct-container">
                <h2 className="ourpoduct-heading">Our Product</h2>
                <div className="container-1139 category-container">
                    <span
                        className={
                            tab === "hot"
                                ? "ourproduct-category-item selecteditem"
                                : "ourproduct-category-item"
                        }
                        onClick={() => setTab("hot")}
                    >
                        HOT
                    </span>
                    <span
                        className={
                            tab === "sale"
                                ? "ourproduct-category-item selecteditem"
                                : "ourproduct-category-item"
                        }
                        onClick={() => setTab("sale")}
                    >
                        ON SALE
                    </span>
                    <span
                        className={
                            tab === "new"
                                ? "ourproduct-category-item selecteditem"
                                : "ourproduct-category-item"
                        }
                        onClick={() => setTab("new")}
                    >
                        NEW ARRIVAL
                    </span>
                </div>
                <Carousel
                    rows={2}
                    cols={4}
                    loop
                    containerStyle={{ maxWidth: "1142px" }}
                >
                    {products == []
                        ? ""
                        : products.map((item, index) => {
                              return (
                                  <Carousel.Item key={index}>
                                      <Link to={`/product/${item._id}`}>
                                          <OurProductItem
                                              urlImg={`https://drive.google.com/uc?export=view&id=${item.images[0]}`}
                                              productName={item.name}
                                              price={500000}
                                              discountPrice={Number(item.price)}
                                              ratingNumber={4.5}
                                          />
                                      </Link>
                                  </Carousel.Item>
                              );
                          })}
                </Carousel>
                <div className="decorate-background decorate-3"></div>
            </div>
        </section>
    );
}

export default OurProduct;
