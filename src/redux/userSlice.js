//um slice é uma coleção de logicas de reducers e actions para uma determinada feature
import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'user',
    initialState: {
        name: '',
        isLogegd: false,
    },
    reducers: {
        changeUser(state, { payload }) {
            return { ...state, isLogegd: true, user: payload }
        },
        logout(state) {
            return { ...state, isLogegd: false, user: '' }
        }    
    }
})

export const { changeUser, logout } = slice.actions;

export const selectUser = state => state.user;

export default slice.reducer;