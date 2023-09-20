import { useEffect, useState } from "react";
import AllRoutes from "./Routes";
import store from "./Redux/Store";
import { Provider } from "react-redux";
import { productType } from "./Types/types";
import { productsContext } from "./Contexts/Contexts"

export default function App() {

  const [cartItems, setCartItems] = useState<productType[]>([])
  const [wishlistItems, setWishlistItems] = useState<productType[]>([])

  const localStorageCartItems = (selectedItem: productType) => {
    setCartItems([...cartItems, selectedItem])
    return [...cartItems, selectedItem]
  }
  const deleteCartItems = (itemId: string) => {
    const remindedItems = cartItems.filter(item => item.id !== itemId)

    setCartItems(remindedItems)
  }
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify({ cartItems }));
  }, [cartItems])


  const localStorageWishlistItems = (selectedItem: productType) => {
    setWishlistItems([...wishlistItems, selectedItem])
    return [...wishlistItems, selectedItem]
  }

  const deleteWishlistItems = (itemId: string) => {

    const remindedItems = wishlistItems.filter(item => item.id !== itemId)

    setWishlistItems(remindedItems)

  }

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify({ wishlistItems }));
  }, [wishlistItems])


  useEffect(
    () => {
      // scroll to top on page load
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []
  );


  return (
    <Provider store={store}>
      <productsContext.Provider value={{
        productQuantity: 0,
        setProductQuantity: () => { },
        localStorageCartItems: localStorageCartItems,
        localStorageWishlistItems: localStorageWishlistItems,
        deleteWishlistItems: deleteWishlistItems,
        deleteCartItems: deleteCartItems,
        cartItems: cartItems,
        wishlistItems: wishlistItems,
      }}>

        <AllRoutes />
      </productsContext.Provider>
    </Provider>
  );
}


// export {localStorageCartItems}
