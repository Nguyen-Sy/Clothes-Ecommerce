import { createSlice } from "@reduxjs/toolkit"

export const itemFilterSlice = createSlice({
    name: "itemFilter",
    initialState: {
        value: []
    },
    reducers: {
        setItemFilter: (state, action) => {
            const newFilter = [...action.payload]
            state.value = newFilter
        },
        addItemFilter: (state, action) => {
            const newFilter = [...state.value, action.payload]
            state.value = newFilter
        },
        removeItemFilter: (state, action) => {
            const newFilter = [...state.value].filter((item) => !action.payload.include(item))
            state.value = newFilter
        }
    }
})

export const { setItemFilter, addItemFilter, removeItemFilter } = itemFilterSlice.actions
export default itemFilterSlice.reducer