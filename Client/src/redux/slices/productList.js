import { createSlice } from "@reduxjs/toolkit"

export const productListSlice = createSlice({
    name: "productList",
    initialState: {
        value: []
    },
    reducers: {
        setProductList: (state, action) => {
            state.value = action.payload
        },
        addItem: (state, action) => {
            const newList = [...state.value, ...action.payload]
            state.value = newList
        }
    }
})

export const { setProductList, addItem } = productListSlice.actions
export default productListSlice.reducer