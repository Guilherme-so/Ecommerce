import { createSlice } from "@reduxjs/toolkit";

export interface FavoritesState {
  value: string[];
}

const initialState: FavoritesState = {
  value: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, actions) => {
      if (!state.value.includes(actions.payload)) {
        state.value.push(actions.payload);
      }
    },
    removeToFavorites: (state, actions) => {
      if (state.value.includes(actions.payload)) {
        state.value = state.value.filter((i) => i !== actions.payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToFavorites, removeToFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
