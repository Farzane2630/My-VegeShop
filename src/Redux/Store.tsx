import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import dataReducer from "./Reducers/products";
import backgroundReducer from "./Reducers/background";
import categoryReducer from "./Reducers/categories";
import usersReducer from "./Reducers/users";
import bestPriceReducer from "./Reducers/bestPrice";
import servicesReducer from "./Reducers/Services";
import countUpReducer from "./Reducers/countUp";
import aboutReducer from "./Reducers/about";
import contactReducer from "./Reducers/contact";

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

export default store;
