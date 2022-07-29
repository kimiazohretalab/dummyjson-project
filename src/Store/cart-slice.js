import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    totalQuantity: 0,
    totalSum: 0
  },
  reducers: {
    addToCart:(state, action)=> {
      const product  = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === product.id);
    

      if (!existingItem) {
         state.cartItems.push({
          ...product,
          quantity: 1,
          totalPrice: product.price * 1,
        });
      } else {
          existingItem.quantity++;
          existingItem.totalPrice = existingItem.quantity * product.price;
        }
        state.totalSum = state.cartItems.reduce((k, z) => {
          return k + z.totalPrice;
        }, 0);
      state.totalQuantity = state.cartItems.reduce((s, q) => {
        return s + q.quantity;
      }, 0)
    },
    removeItemFromCart(state, action) {
      const cartItem = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === cartItem.id);

      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== cartItem.id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - cartItem.price;
      }

      state.totalSum = state.cartItems.reduce((s, q) => {
        return s + q.totalPrice;
      }, 0);

      state.totalQuantity = state.cartItems.reduce((s, q) => {
        return s + q.quantity;
      }, 0);
    },
    deleteWholeProductFromCart(state, action) {
      const itemToDelete = action.payload.itemToDelete;

      state.cartItems = state.cartItems.filter((item) => item.id !== itemToDelete.id);

      state.totalSum = state.cartItems.reduce((s, q) => {
        return s + q.totalPrice;
      }, 0);

      state.totalQuantity = state.cartItems.reduce((s, q) => {
        return s + q.quantity;
      }, 0);
    },
  },
});

export const {addToCart,removeItemFromCart,deleteWholeProductFromCart} = cartSlice.actions;

export default cartSlice.reducer;
