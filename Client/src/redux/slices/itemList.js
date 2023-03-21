import { createSlice } from "@reduxjs/toolkit"

export const itemListSlice = createSlice({
    name: "itemList",
    initialState: {
        value: [
            { id: 1, productName: 'Pastel Long Sleeve', sellQuantity: 5, rating: 4.5, price: 140000, discount: .015, urlImg: require('../../assets/img/sweater.jpg'), launchedDate: '2000-01-01', shopName: 'Tên shop' },
            { id: 2, productName: 'Pastel Long Sleeve', sellQuantity: 6, rating: 4.5, price: 140000, discount: .015, urlImg: require('../../assets/img/sweater.jpg'), launchedDate: '2000-01-01', shopName: 'Tên shop' },
            { id: 3, productName: 'Pastel Long Sleeve', sellQuantity: 7, rating: 4.5, price: 140000, discount: .015, urlImg: require('../../assets/img/sweater.jpg'), launchedDate: '2000-01-01', shopName: 'Tên shop' },
            { id: 4, productName: 'Pastel Long Sleeve', sellQuantity: 8, rating: 4.5, price: 140000, discount: .015, urlImg: require('../../assets/img/sweater.jpg'), launchedDate: '2020-01-01', shopName: 'Tên shop' },
            { id: 5, productName: 'Pastel Long Sleeve', sellQuantity: 12, rating: 4.5, price: 140000, discount: .02, urlImg: require('../../assets/img/sweater.jpg'), launchedDate: '2000-01-01', shopName: 'Tên shop' },
            { id: 6, productName: 'Pastel Long Sleeve', sellQuantity: 3, rating: 4.5, price: 140000, discount: .015, urlImg: require('../../assets/img/sweater.jpg'), launchedDate: '2000-01-01', shopName: 'Tên shop' },
            { id: 7, productName: 'Pastel Long Sleeve', sellQuantity: 45, rating: 4.5, price: 140000, discount: 0, urlImg: require('../../assets/img/sweater.jpg'), launchedDate: '2021-01-01', shopName: 'Tên shop' },
            { id: 8, productName: 'Pastel Long Sleeve', sellQuantity: 21, rating: 4.5, price: 140000, discount: 0, urlImg: require('../../assets/img/sweater.jpg'), launchedDate: '2000-01-01', shopName: 'Tên shop' },
            { id: 9, productName: 'Pastel Long Sleeve', sellQuantity: 12, rating: 4.5, price: 140000, discount: .015, urlImg: require('../../assets/img/sweater.jpg'), launchedDate: '2022-01-01', shopName: 'Tên shop' },
            { id: 10, productName: 'Pastel Long Sleeve', sellQuantity: 18, rating: 4.5, price: 140000, discount: 0, urlImg: require('../../assets/img/sweater.jpg'), launchedDate: '2000-01-01', shopName: 'Tên shop' },
            { id: 11, productName: 'Pastel Long Sleeve', sellQuantity: 1, rating: 4.5, price: 140000, discount: .015, urlImg: require('../../assets/img/sweater.jpg'), launchedDate: '2000-01-01', shopName: 'Tên shop' },
            { id: 12, productName: 'Pastel Long Sleeve', sellQuantity: 14, rating: 4.5, price: 140000, discount: .015, urlImg: require('../../assets/img/sweater.jpg'), launchedDate: '2000-01-01', shopName: 'Tên shop' },
        ]
    },
    reducers: {
        setItemList: (state, action) => {
            state.value = action.payload
        },
        addItem: (state, action) => {
            const newList = [...state.value, ...action.payload]
            state.value = newList
        }
    }
})

export const { setItemList, addItem } = itemListSlice.actions
export default itemListSlice.reducer