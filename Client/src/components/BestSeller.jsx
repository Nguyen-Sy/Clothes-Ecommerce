import Carousel from "react-grid-carousel";
import { useSelector } from "react-redux";
import "../assets/css/BestSeller.css";
import BestSellerItem from "./BestSelllerItem";

function BestSeller() {
    const productList = useSelector((state) => state.productList.value);
    const bestSellerList = productList.slice(0, 6);

    return (
        <section className="bestseller">
            <div className="container-1139 bestseller-container">
                <div className="container-1139 bestseller-content-container">
                    <h2 className="bestseller-heading">Best Seller Product</h2>
                    <p className="bestseller-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed ullamcorper congue eros
                    </p>
                    <button className="button seemore-button">SEE MORE</button>
                </div>

                <Carousel
                    cols={2}
                    loop
                    showDots={true}
                    hideArrow={true}
                    containerStyle={{ maxWidth: "70.952%" }}
                    gap={14.7}
                >
                    {bestSellerList !== []
                        ? bestSellerList.map((item, index) => (
                              <Carousel.Item key={index}>
                                  <BestSellerItem
                                      key={index}
                                      productName={item.name}
                                      Price={500000}
                                      discountPrice={item.price}
                                      ratingNumber={5}
                                      urlImg={`https://drive.google.com/uc?export=view&id=${item.images[0]}`}
                                  />
                              </Carousel.Item>
                          ))
                        : ""}
                </Carousel>
            </div>
        </section>
    );
}
export default BestSeller;
