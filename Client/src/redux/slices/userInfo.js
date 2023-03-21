import { createSlice } from "@reduxjs/toolkit"

export const userInfoSlice = createSlice({
    name: "userInfo",
    initialState: {
        value: {
            name: "testing user",
            photoURL: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2018%2F05%2F12170411%2Fcat-kitten-138468381.jpg&q=60",
            phone: "testing user'phone number"
        }
    },
    reducers: {
        setUserInfo: (state, action) => { state.value = action.payload }
    }
})

export const { setUserInfo } = userInfoSlice.actions
export default userInfoSlice.reducer
