import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const getShuffledArr = (arr) => {
    const newArr = arr.slice();
    for (let i = newArr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr;
};

export default function OtherProduct_6(props) {
    const productList = useSelector((state) => state.productList.value);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(getShuffledArr(productList).slice(0, 6));
    }, [props.product]);

    return (
        <div class="other-product">
            <div class="title-other-product">
                <p>Có thể bạn cũng thích</p>
            </div>

            <div class="other-product-row_cart">
                {products != []
                    ? products.map((item, index) => {
                          return (
                              <div class="other-product-box-item-6" key={index}>
                                  <Link to={`/product/${item._id}`}>
                                      <div class="other-product-item">
                                          <img
                                              class="other-product-picture-product"
                                              src={`https://drive.google.com/uc?export=view&id=${item.images[0]}`}
                                              alt=""
                                          />

                                          <div class="other-product-in4-product">
                                              <p class="other-product-in4-header font-12">
                                                  {item.name}
                                              </p>
                                              <div class="other-product-in4-product-price">
                                                  <p class="other-product-price-item">
                                                      {item.price}
                                                  </p>
                                              </div>
                                          </div>
                                      </div>
                                  </Link>
                              </div>
                          );
                      })
                    : ""}
            </div>
        </div>
    );
}
