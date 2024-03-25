import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    addToCart: (state, action) => {
      state.products.push(action.payload);
    },
  },
})
export const { addToCart } = cartSlice.actions

export default cartSlice.reducer