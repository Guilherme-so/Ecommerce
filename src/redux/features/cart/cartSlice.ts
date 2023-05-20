import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
  value: string[];
}

const initialState: CartState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      state.value = [...state.value, actions.payload];
    },
    removeOneToCart: (state, actions) => {
      const index = state.value.indexOf(actions.payload);
      if (index !== -1) {
        state.value = state.value.filter((id, idx) => idx !== index);
      }
    },
    removeALlEgualProduct: (state, actions) => {
      state.value = state.value.filter((id) => id !== actions.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeOneToCart,removeALlEgualProduct} = cartSlice.actions;

export default cartSlice.reducer;
