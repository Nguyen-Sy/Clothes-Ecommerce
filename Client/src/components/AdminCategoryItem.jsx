import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productCategoryApi from "../api/productCategory";
import { setProductCategoryList } from "../redux/slices/productCategory";

export default function AdminCategoryItem(props) {
    const dispatch = useDispatch();
    const newProductCategories = useSelector(
        (state) => state.productCategory.value
    );
    const [isAdd, setIsAdd] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [productCategories, setProductCategories] =
        useState(newProductCategories);
    const [indexProductCategory, setIndexProductCategory] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (newProductCategories === []) {
                const resProductCategory =
                    await productCategoryApi.getAllProductCategory();
                dispatch(setProductCategories(resProductCategory.data));
                setProductCategories(resProductCategory.data);
            }
        };
        fetchData();
    });

    return (
        <>
            <div
                className="container-item"
                style={{ width: "100%", margin: "20px 0" }}
            >
                <div style={{ width: "50%", textAlign: "center" }}>Name</div>
                <div style={{ width: "50%", textAlign: "center" }}>
                    Description
                </div>
            </div>
            {productCategories !== []
                ? productCategories.map((productCategory, index) => {
                      return (
                          <>
                              <div
                                  key={index}
                                  onClick={() => {
                                      setIndexProductCategory(index);
                                      setIsEdit(!isEdit);
                                  }}
                                  className="container-1056"
                                  style={{
                                      padding: "20px 0",
                                      borderTop: "1px dashed",
                                      cursor: "pointer",
                                  }}
                              >
                                  <div
                                      style={{
                                          width: "50%",
                                          textAlign: "center",
                                      }}
                                  >
                                      {productCategory.name}
                                  </div>
                                  <div
                                      style={{
                                          width: "50%",
                                          textAlign: "center",
                                      }}
                                  >
                                      {productCategory.desc}
                                  </div>
                              </div>
                              {isEdit && index === indexProductCategory ? (
                                  <CategoryForm
                                      productCategory={productCategory}
                                      index={index}
                                      setIsEdit={setIsEdit}
                                      setProductCategories={
                                          setProductCategories
                                      }
                                      productCategories={productCategories}
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
                Add product category
                {isAdd ? (
                    <CategoryForm
                        productCategory={{
                            name: "",
                            desc: "",
                        }}
                        setIsEdit={setIsAdd}
                        setProductCategories={setProductCategories}
                        productCategories={productCategories}
                    />
                ) : (
                    ""
                )}
            </div>
        </>
    );
}

function CategoryForm(props) {
    const [categoryName, setCategoryName] = useState(
        props.productCategory.name
    );
    const [categoryDesc, setCategoryDesc] = useState(
        props.productCategory.desc
    );
    const dispatch = useDispatch();

    const update = () => {
        const isAdd = !Number.isInteger(props.index);

        const newCategory = {
            name: categoryName,
            desc: categoryDesc,
        };
        if (!isAdd) {
            productCategoryApi
                .updateProductCategory(props.productCategory._id, newCategory)
                .then((res) => {
                    const newProductCategories = [...props.productCategories];
                    newProductCategories[props.index] = res.data;
                    dispatch(setProductCategoryList(newProductCategories));
                    props.setProductCategories(newProductCategories);
                    props.setIsEdit(false);
                })
                .catch((err) => console.log(err));
        } else {
            productCategoryApi
                .createProductCategory(newCategory)
                .then((res) => {
                    const newProductCategories = [...props.productCategories];
                    newProductCategories.push(res.data);
                    dispatch(setProductCategoryList(newProductCategories));
                    props.setProductCategories(newProductCategories);
                    props.setIsEdit(false);
                });
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
                    height: "100%",
                    zIndex: 10,
                    transform: "translateY(-50%)",
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
                            marginTop: "20px",
                            minWidth: "500px",
                        }}
                    >
                        <div>Product Name:</div>
                        <input
                            style={{
                                // border: "none",
                                flex: 1,
                                padding: "10px",
                                fontSize: "16px",
                                cursor: "pointer",
                                marginLeft: "10px",
                            }}
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                        />
                    </div>
                    <div
                        className="container-item"
                        style={{
                            justifyContent: "flex-start",
                            alignItems: "center",
                            minWidth: "500px",
                            marginTop: "20px",
                        }}
                    >
                        <div>Product Description:</div>
                        <input
                            style={{
                                // border: "none",
                                flex: 1,
                                padding: "10px",
                                fontSize: "16px",
                                cursor: "pointer",
                                marginLeft: "10px",
                            }}
                            value={categoryDesc}
                            onChange={(e) => setCategoryDesc(e.target.value)}
                        />
                    </div>
                    <div
                        className="container-item"
                        style={{ justifyContent: "end", marginTop: "20px" }}
                    >
                        <button
                            style={{
                                padding: "15px 20px",
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
                        >
                            Update
                        </button>
                        <div
                            style={{
                                padding: "15px 20px",
                                border: "1px solid",
                                marginLeft: "30px",
                                boxShadow: "0 1px 10px",
                                borderRadius: "5px",
                            }}
                        >
                            Delete
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
