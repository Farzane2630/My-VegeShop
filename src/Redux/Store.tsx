import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import dataReducer, {
  // fetchCategories,
  // fetchProducts,
} from "./Reducers/products";
import backgroundReducer, {
  //  fetchBackgroundUrl
}
  from "./Reducers/background";
import categoryReducer, {
  // fetchCategory
} from "./Reducers/categories";
import usersReducer, {
  // fetchUsersInfo
} from "./Reducers/users";
import bestPriceReducer, {
  // fetchProductData 
} from "./Reducers/bestPrice";
import servicesReducer, {
  //  fetchServicesData 
} from "./Reducers/Services";
import wishlistReducer from "./Reducers/Wishlist";
import countUpReducer, {
  // fetchCountUpData
} from "./Reducers/countUp";
import aboutReducer, {
  // fetchAboutData
} from "./Reducers/about";
import contactReducer, {
  // fetchContactInfo
} from "./Reducers/contact";

const rootReducer = combineReducers({
  products: dataReducer,
  bgUrl: backgroundReducer,
  categories: categoryReducer,
  bestPrice: bestPriceReducer,
  usersInfo: usersReducer,
  services: servicesReducer,
  wishlist: wishlistReducer,
  countUp: countUpReducer,
  about: aboutReducer,
  contact: contactReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
});


// store.dispatch(fetchProducts());
// store.dispatch(fetchCategories());
// store.dispatch(fetchCategory());
// store.dispatch(fetchBackgroundUrl());
// store.dispatch(fetchUsersInfo());
// store.dispatch(fetchServicesData());
// store.dispatch(fetchCountUpData());
// store.dispatch(fetchAboutData());
// store.dispatch(fetchProductData());
// store.dispatch(fetchContactInfo());

export default store;
