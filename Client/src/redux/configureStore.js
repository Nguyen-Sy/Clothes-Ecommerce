import { configureStore } from "@reduxjs/toolkit"

import cartItemReducer from "./slices/cart"
import itemFilterReducer from "./slices/itemFilter"
import itemListReducer from "./slices/itemList"
import productCategoryReducer from "./slices/productCategory"
import productListReducer from "./slices/productList"
import userInfoReducer from "./slices/userInfo"

export default configureStore({
    reducer: {
        userCart: cartItemReducer,
        itemFilter: itemFilterReducer,
        itemList: itemListReducer,
        userInfo: userInfoReducer,
        productCategory: productCategoryReducer,
        productList: productListReducer
    }
})