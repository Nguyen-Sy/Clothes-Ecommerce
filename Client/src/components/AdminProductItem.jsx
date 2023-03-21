import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productApi from "../api/product";
import productCategoryApi from "../api/productCategory";
import productVaritationApi from "../api/productVaritation";
import { setProductList } from "../redux/slices/productList";

export default function AdminProductItem(props) {
    const dispatch = useDispatch();
    const newProductList = useSelector((state) => state.productList.value);
    const newProductCategoryList = useSelector(
        (state) => state.productCategory.value
    );

    const [isEdit, setIsEdit] = useState(false);
    const [isAdd, setIsAdd] = useState(false);
    const [productList, setProductList] = useState(newProductList);
    const [productCategoryList, setProductCategoryList] = useState(
        newProductCategoryList
    );
    const [editProduct, setEditProduct] = useState({});
    const [productIndex, setProductIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            if (productList === []) {
                const productListRes = await productApi.getAllProduct();
                setProductList(productListRes.data);
                dispatch(setProductList(productListRes.data));
            }
            if (productCategoryList === []) {
                const productCategoryListRes =
                    await productCategoryApi.getAllProductCategory();
                setProductCategoryList(productCategoryListRes.data);
                dispatch(setProductCategoryList(productCategoryListRes.data));
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div
                className="container-item"
                style={{
                    width: "100%",
                    margin: "20px 0",
                    position: "relative",
                }}
            >
                <div style={{ width: "20%", textAlign: "center" }}>Image</div>
                <div style={{ width: "20%", textAlign: "center" }}>Name</div>
                <div style={{ width: "20%", textAlign: "center" }}>
                    Category
                </div>
                <div style={{ width: "20%", textAlign: "center" }}>Stock</div>
                <div style={{ width: "20%", textAlign: "center" }}>Price</div>
            </div>

            {productList !== []
                ? productList.map((product, index) => {
                      return (
                          <>
                              <div
                                  key={index}
                                  className="container-item"
                                  style={{
                                      padding: "20px 0",
                                      borderTop: "1px  dashed black",
                                      marginTop: "10px",
                                      width: "100%",
                                      justifyContent: "space-between",
                                  }}
                                  onClick={() => {
                                      setIsEdit(true);
                                      setEditProduct(product);
                                      setProductIndex(index);
                                      console.log(index);
                                  }}
                              >
                                  <img
                                      src={
                                          product.images
                                              ? `https://drive.google.com/uc?export=view&id=${product.images[0]}`
                                              : "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
                                      }
                                      style={{
                                          width: "20%",
                                      }}
                                  />
                                  <div
                                      style={{
                                          paddingRight: "15px",
                                          border: "none",
                                          width: "20%",
                                          fontSize: "16px",
                                          textAlign: "center",
                                      }}
                                  >
                                      {product.name}
                                  </div>
                                  <div
                                      style={{
                                          paddingRight: "15px",
                                          border: "none",
                                          width: "20%",
                                          textAlign: "center",
                                          fontSize: "16px",
                                      }}
                                  >
                                      {product.category.name}
                                  </div>

                                  <div
                                      style={{
                                          paddingRight: "15px",
                                          border: "none",
                                          width: "20%",
                                          textAlign: "center",
                                          fontSize: "16px",
                                      }}
                                  >
                                      {product.stock}
                                  </div>
                                  <div
                                      style={{
                                          paddingRight: "15px",
                                          border: "none",
                                          width: "20%",
                                          textAlign: "center",
                                          fontSize: "16px",
                                      }}
                                  >
                                      {product.price}
                                  </div>
                              </div>
                              {isEdit && index == productIndex ? (
                                  <ProductForm
                                      setProductList={setProductList}
                                      product={editProduct}
                                      setIsEdit={setIsEdit}
                                      productCategoryList={productCategoryList}
                                      index={productIndex}
                                  />
                              ) : (
                                  ""
                              )}
                          </>
                      );
                  })
                : ""}
            <div
                onClick={() => {
                    setIsAdd(true);
                }}
                style={{
                    width: "100%",
                    textAlign: "center",
                    border: "1px solid #619284",
                    padding: "10px",
                }}
            >
                Add Product
                {isAdd ? (
                    <ProductForm
                        product={{
                            name: "",
                            stock: 0,
                            desc: "",
                            images: [],
                            category: {
                                _id: "634cacb51c9b00b350344977",
                                name: "pant1",
                                desc: "notthing",
                            },
                            varitation: {
                                size: [""],
                                color: [""],
                            },
                            price: 0,
                        }}
                        setProductList={setProductList}
                        setIsEdit={setIsAdd}
                        productCategoryList={productCategoryList}
                    />
                ) : (
                    ""
                )}
            </div>
        </>
    );
}

function ProductForm(props) {
    const isAdd = Number.isInteger(props.index);
    const { product } = props;
    const [stock, setStock] = useState(product.stock);
    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState(product.price);
    const [category, setCategory] = useState(product.category);
    const [images, setImages] = useState(product.images);
    const [size, setSize] = useState(product.varitation.size.join(" ,"));
    const [color, setColor] = useState(product.varitation.color.join(" ,"));
    const [isLoading, setIsLoading] = useState(false);
    const productList = useSelector((state) => state.productList.value);
    const productCategoryList = props.productCategoryList;

    const dispatch = useDispatch();
    const handleChangeInput = (e) => {
        const files = e.target.files[0];
        const accessToken = localStorage.getItem("ggAToken");
        setIsLoading(true);
        productApi
            .uploadImage({
                files,
                token: accessToken,
            })
            .then((res) => {
                console.log(res.data);
                setImages(res.data);
                setIsLoading(false);
            });
    };
    const update = () => {
        console.log(size.split(",").map((i) => i.trim()));
        console.log(color.split(",").map((i) => i.trim()));
        const updateProduct = {
            ...product,
            name,
            price,
            category,
            stock,
            images,
            varitation: {
                ...product.varitation,
                size: size.split(",").map((i) => i.trim()),
                color: color.split(",").map((i) => i.trim()),
            },
        };
        console.log(updateProduct);
        if (isAdd) {
            const newProductList = [...productList];
            newProductList[props.index] = updateProduct;

            productVaritationApi
                .updateProductVaritation(updateProduct.varitation._id, {
                    color: updateProduct.varitation.color,
                    size: updateProduct.varitation.size,
                })
                .then(() => {
                    productApi
                        .updateProduct(updateProduct._id, updateProduct)
                        .then((res) => {
                            console.log(res.data);
                            props.setIsEdit(false);
                            dispatch(setProductList(newProductList));
                            props.setProductList(newProductList);
                        })
                        .catch((err) => console.log(err));
                })
                .catch((err) => console.log(err));
        } else {
            productVaritationApi
                .createProductVaritation({
                    color: updateProduct.varitation.color,
                    size: updateProduct.varitation.size,
                })
                .then((varitation) => {
                    updateProduct.varitation = varitation.data;
                    console.log(updateProduct);
                    productApi
                        .createProduct(updateProduct)
                        .then(() => {
                            productApi
                                .getAllProduct()
                                .then((res) => {
                                    props.setIsEdit(false);
                                    dispatch(setProductList(res.data));
                                    props.setProductList(res.data);
                                })
                                .catch((err) => console.log(err));
                        })
                        .catch((err) => console.log(err));
                });
        }
    };
    const handleDelete = () => {
        if (window.confirm("Are you sure to delete this product")) {
            productVaritationApi
                .deleteProductVaritation(product.varitation._id)
                .then(() =>
                    productApi
                        .deleteProduct(product._id)
                        .then(() => {
                            const newProductList = [...productList].filter(
                                (item) => item._id != product._id
                            );
                            dispatch(setProductList(newProductList));
                            props.setProductList(newProductList);
                            props.setIsEdit(false);
                        })
                        .catch((err) => console.log(err))
                )
                .catch((err) => console.log(err));
        }
    };
    return (
        <>
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                    width: "100vw",
                    height: "100vh",
                    zIndex: 10,
                    transform: "translateY(-50%)",
                    display: !isAdd ? "none" : "block",
                }}
                onClick={() => props.setIsEdit(false)}
            ></div>
            <div
                style={{
                    backgroundColor: "white",
                    zIndex: 11,
                    borderRadius: "5px",
                    boxShadow: "0, 0, 10px, #030303",
                    position: "absolute",
                    transform: "translate(-30%, -50%)",
                }}
            >
                <div
                    className="container-item"
                    style={{ flexDirection: "column", margin: "30px" }}
                >
                    <div
                        className="container-item"
                        style={{
                            justifyContent: "flex-start",
                            alignItems: "center",
                        }}
                    >
                        <div>Tên sản phẩm:</div>
                        <input
                            style={{
                                // border: "none",
                                flex: 1,
                                padding: "10px",
                                fontSize: "16px",
                                cursor: "pointer",
                                marginLeft: "10px",
                            }}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div
                        className="container-item"
                        style={{
                            justifyContent: "flex-start",
                            alignItems: "center",
                            marginTop: "20px",
                        }}
                    >
                        <div>Loại sản phẩm:</div>
                        <select
                            style={{
                                flex: 1,
                                padding: "10px",
                                fontSize: "16px",
                                cursor: "pointer",
                                marginLeft: "10px",
                            }}
                            value={category._id}
                            onChange={(e) => {
                                productCategoryList.forEach((element) => {
                                    if (element._id === e.target.value) {
                                        setCategory({
                                            ...category,
                                            _id: element._id,
                                            name: element.name,
                                        });
                                    }
                                });
                            }}
                        >
                            {productCategoryList !== []
                                ? productCategoryList.map((item, index) => {
                                      return (
                                          <option key={index} value={item._id}>
                                              {item.name}
                                          </option>
                                      );
                                  })
                                : ""}
                        </select>
                    </div>
                    <div
                        className="container-item"
                        style={{ marginTop: "20px" }}
                    >
                        <div
                            className="container-item"
                            style={{
                                justifyContent: "flex-start",
                                alignItems: "center",
                            }}
                        >
                            <div>Giá bán lẻ:</div>
                            <input
                                style={{
                                    // border: "none",
                                    padding: "10px",
                                    fontSize: "16px",
                                    width: "40%",
                                    cursor: "pointer",
                                    marginLeft: "10px",
                                }}
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        <div
                            className="container-item"
                            style={{
                                justifyContent: "flex-start",
                                alignItems: "center",
                            }}
                        >
                            <div>Tồn kho:</div>
                            <input
                                style={{
                                    // border: "none",
                                    padding: "10px",
                                    fontSize: "16px",
                                    flex: 1,
                                    width: "30%",
                                    marginLeft: "10px",
                                    cursor: "pointer",
                                }}
                                value={stock}
                                onChange={(e) => setStock(e.target.value)}
                            />
                        </div>
                    </div>
                    <div
                        className="container-item"
                        style={{ marginTop: "20px" }}
                    >
                        <div
                            className="container-item"
                            style={{
                                justifyContent: "flex-start",
                                alignItems: "center",
                            }}
                        >
                            <div>Size:</div>
                            <input
                                style={{
                                    // border: "none",
                                    padding: "10px",
                                    fontSize: "16px",
                                    width: "50%",
                                    cursor: "pointer",
                                    marginLeft: "10px",
                                }}
                                type="text"
                                value={size}
                                onChange={(e) => {
                                    setSize(e.target.value);
                                }}
                            />
                        </div>
                        <div
                            className="container-item"
                            style={{
                                justifyContent: "flex-start",
                                alignItems: "center",
                            }}
                        >
                            <div>Màu:</div>
                            <input
                                style={{
                                    // border: "none",
                                    padding: "10px",
                                    fontSize: "16px",
                                    width: "40%",
                                    cursor: "pointer",
                                    marginLeft: "10px",
                                    flex: 1,
                                }}
                                type="text"
                                value={color}
                                onChange={(e) => {
                                    setColor(e.target.value);
                                    console.log(color);
                                }}
                            />
                        </div>
                    </div>
                    <div
                        className="container-item"
                        style={{ marginTop: "20px" }}
                    >
                        <input
                            type="file"
                            onChange={(e) => {
                                handleChangeInput(e);
                            }}
                        />
                    </div>

                    <div
                        className="container-item"
                        style={{ justifyContent: "end" }}
                    >
                        <button
                            style={{
                                padding: "20px",
                                border: "1px solid",
                                marginLeft: "30px",
                                borderRadius: "5px",
                                boxShadow: "0 1px 10px",
                                backgroundColor: "whitep",
                            }}
                            onClick={(e) => {
                                e.preventDefault();
                                update();
                            }}
                            disabled={isLoading}
                        >
                            {!isAdd ? "Thêm mới" : "Cập nhật"}
                        </button>
                        <div
                            style={{
                                padding: "20px",
                                border: "1px solid",
                                marginLeft: "30px",
                                boxShadow: "0 1px 10px",
                                borderRadius: "5px",
                            }}
                            onClick={() => handleDelete()}
                        >
                            Delete
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
