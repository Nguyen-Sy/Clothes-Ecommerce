import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Address from "../components/Address";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeadingCategory from "../components/HeadingCategory";
import Logo from "../components/Logo";
import PurchasedItem from "../components/PurchasedItem";
import PurchasedTotal from "../components/PurchasedTotal";

function PurchasedPage(props) {
    const userInfor = useSelector((state) => state.userInfo.value);
    const cartItems = useSelector((state) => state.userCart.value);
    const productList = useSelector((state) => state.productList.value);

    const [cartProductList, setCartProductList] = useState([]);

    useEffect(() => {
        const productIdList = cartItems
            ? cartItems.map((item) => {
                  return item.product;
              })
            : [];
        const arr = [];
        productIdList.map((item) => {
            productList.map((product) => {
                if (product._id == item) arr.push(product);
            });
        });
        console.log(arr);
        const newCartProductList = cartItems.map((item, index) => {
            return { ...item, product: arr[index] };
        });
        setCartProductList(newCartProductList);
        console.log(newCartProductList);
    }, [cartItems]);
    //Hàm phía sau renderList: hội 2 list: userListItem và allItem dựa trên id của sản phẩm

    return (
        <div style={{ backgroundColor: "var(--gray-color)" }}>
            <Header
                urlImg={
                    userInfor.photoURL
                        ? `https://drive.google.com/uc?export=view&id=${userInfor.photoURL[0]}`
                        : ""
                }
                userName={userInfor.name}
            ></Header>
            <Logo location="Thanh toán" />
            <Address
                userName={userInfor.name}
                userNumber={userInfor.phone}
                userAddress={userInfor.address}
            />
            <HeadingCategory />
            <section>
                {cartProductList === []
                    ? ""
                    : cartProductList.map((item, index) => {
                          return (
                              <PurchasedItem
                                  cartProductList={cartProductList}
                                  product={item}
                                  key={index}
                                  index={index}
                                  quantity={item.quantity}
                              />
                          );
                      })}
            </section>
            <PurchasedTotal cartProductList={cartProductList} />
            <Footer />
        </div>
    );
}
export default PurchasedPage;
