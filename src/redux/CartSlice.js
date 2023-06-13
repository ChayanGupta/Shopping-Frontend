import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: []
}

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = action.payload
    },
  },
})

export const { addToCart } = CartSlice.actions
export default CartSlice.reducer