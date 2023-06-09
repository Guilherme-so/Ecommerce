import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import addressSlice from "./features/address/addressSlice";
import favoritesReducer from "./features/favorites/favoritesSlice";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistCartConfig = {
  key: "cart",
  storage,
};

const persistAddressConfig = {
  key: "address",
  storage,
};
const persistFavConfig = {
  key: "fav",
  storage,
};

const persistedCartReducer = persistReducer(persistCartConfig, cartReducer);
const persistedAddressReducer = persistReducer(
  persistAddressConfig,
  addressSlice
);
const persistedFavReducer = persistReducer(persistFavConfig, favoritesReducer);

export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    address: persistedAddressReducer,
    favorites: persistedFavReducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
