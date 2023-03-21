import { createSlice } from "@reduxjs/toolkit"

export const orderSlice = createSlice({
    name: "orderList",
    initialState: {
        value: []
    },
    reducers: {
        setOrderSlice: (state, action) => {
            state.value = action.payload
        },
    }
})

export const { setOrderSlice } = orderSlice.actions
export default orderSlice.reducer