import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
    totalPrice: 0,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      state.totalQuantity++;
      state.changed = true;
      state.totalPrice += newItem.price;

      if (!existingItem) {
        // If the item is not already in the cart, add it
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          img: newItem.image.thumbnail,
        });
      } else {
        // If the item is already in the cart, increase the quantity
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      state.totalQuantity--;
      state.changed = true;

      if (existingItem.quantity === 1) {
        // If the item quantity is 1, remove it from the cart
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        // Otherwise, decrease the quantity
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    removeItemFinal(state, action) {
      const id = action.payload;

      state.totalQuantity = state.totalQuantity - 1;

      state.totalPrice =
        state.totalPrice -
        state.items.find((item) => item.id === id).totalPrice;
      state.items = state.items.filter((item) => item.id !== id);
      if (state.totalQuantity === 0) {
        state.changed = false;
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      state.changed = false;
    },
  },
});
export const cartActions = cartSlice.actions;

export default cartSlice;
