import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import dataReducer, {
  fetchCategories,
  fetchProducts,
} from "./Reducers/products";
import backgroundReducer, { fetchBackgroundUrl } from "./Reducers/background";
import categoryReducer, { fetchCategory } from "./Reducers/categories";
import usersReducer, { fetchUsersInfo } from "./Reducers/users";
import { reducer as inputValueReducer } from "./Reducers/InputValue";
import bestPriceReducer, { fetchProductData } from "./Reducers/bestPrice";
import servicesReducer, { fetchServicesData } from "./Reducers/Services";
import wishlistReducer from "./Reducers/Wishlist";
import cartReducer, {
  updateTotalPrice,
  addToCart,
  fetchCartItems,
  removeFromCart,
} from "./Reducers/cartItems";
import countUpReducer, { fetchCountUpData } from "./Reducers/countUp";
import aboutReducer, { fetchAboutData } from "./Reducers/about";
import contactReducer, { fetchContactInfo } from "./Reducers/contact";

const rootReducer = combineReducers({
  products: dataReducer,
  bgUrl: backgroundReducer,
  categories: categoryReducer,
  bestPrice: bestPriceReducer,
  usersInfo: usersReducer,
  inputValue: inputValueReducer,
  services: servicesReducer,
  wishlist: wishlistReducer,
  cart: cartReducer,
  countUp: countUpReducer,
  about: aboutReducer,
  contact: contactReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
});


store.dispatch(fetchProducts());
store.dispatch(fetchCategories());
store.dispatch(fetchCategory());
store.dispatch(fetchBackgroundUrl());
store.dispatch(fetchUsersInfo());
store.dispatch(fetchServicesData());
store.dispatch(fetchCountUpData());
store.dispatch(fetchAboutData());
store.dispatch(fetchProductData());
store.dispatch(fetchContactInfo());
// store.dispatch(addToCart());
store.dispatch(fetchCartItems());
store.dispatch(updateTotalPrice());
store.dispatch(removeFromCart());

export default store;
