import { useCallback, useEffect, useState } from "react";
import AllRoutes from "./Routes";
import store from "./Redux/Store";
import { Provider } from "react-redux";
import { productType } from "./Types/types";
import { cartContext } from "./Contexts/Contexts"

export default function App() {

  const [cartItems, setCartItems] = useState<productType[]>([])

  const localStorageCartItems = (selectedItem: productType) => {
    setCartItems([...cartItems, selectedItem])
    return [...cartItems, selectedItem]
  }

  useEffect(() => {

    localStorage.setItem("cart", JSON.stringify({ cartItems }));

  }, [cartItems])


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
        setProductQuantity: () => { },
        localStorageCartItems: localStorageCartItems,
        cartItems: cartItems
      }}>

        <AllRoutes />
      </cartContext.Provider>
    </Provider>
  );
}


// export {localStorageCartItems}
