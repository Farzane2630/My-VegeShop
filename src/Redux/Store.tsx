import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import dataReducer, {
  fetchCategories,
  fetchProducts,
} from "./Reducers/products";
import backgroundReducer, { fetchBackgroundUrl } from "./Reducers/background";
import categoryReducer, { fetchCategory } from "./Reducers/categories";
import usersReducer, { fetchUsersInfo } from "./Reducers/users";
import bestPriceReducer, { fetchProductData } from "./Reducers/bestPrice";
import servicesReducer, { fetchServicesData } from "./Reducers/Services";
import countUpReducer, { fetchCountUpData } from "./Reducers/countUp";
import aboutReducer, { fetchAboutData } from "./Reducers/about";
import contactReducer, { fetchContactInfo } from "./Reducers/contact";


const rootReducer = combineReducers({
  products: dataReducer,
  bgUrl: backgroundReducer,
  categories: categoryReducer,
  bestPrice: bestPriceReducer,
  usersInfo: usersReducer,
  services: servicesReducer,
  countUp: countUpReducer,
  about: aboutReducer,
  contact: contactReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
});
// @ts-ignore
store.dispatch(fetchProducts());
// @ts-ignore
store.dispatch(fetchCategories());
// @ts-ignore
store.dispatch(fetchCategory());
// @ts-ignore
store.dispatch(fetchBackgroundUrl());
// @ts-ignore
store.dispatch(fetchUsersInfo());
// @ts-ignore
store.dispatch(fetchServicesData());
// @ts-ignore
store.dispatch(fetchCountUpData());
// @ts-ignore
store.dispatch(fetchAboutData());
// @ts-ignore
store.dispatch(fetchProductData());
// @ts-ignore
store.dispatch(fetchContactInfo());


export default store;
