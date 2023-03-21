import { createSlice } from "@reduxjs/toolkit"

export const productCategorySlice = createSlice({
    name: "productCategoryList",
    initialState: {
        value: []
    },
    reducers: {
        setProductCategoryList: (state, action) => {
            state.value = action.payload
        },
    }
})

export const { setProductCategoryList } = productCategorySlice.actions
export default productCategorySlice.reducer