import { useEffect, useState } from "react";
import AllRoutes from "./Routes";
import store from "./Redux/Store";
import { Provider } from "react-redux";
import { productType } from "./Types/types";
import {cartContext} from "./Contexts/Contexts"

export default function App() {

  const [cartItems, setCartItems] = useState<productType[]>([])
  const [wishlistItems, setWishlistItems] = useState<productType[]>([])

  useEffect(
    () => {
      // scroll to top on page load
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []
  );

  
  return (
    <Provider store={store}>
      <cartContext.Provider value={{
        productQuantity: 0,
        setProductQuantity: ()=>{},
        cartItems: cartItems,
        wishlistItems: wishlistItems
      }}>

      <AllRoutes />
      </cartContext.Provider>
    </Provider>
  );
}
