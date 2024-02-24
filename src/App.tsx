import { useEffect, useState } from "react";
import AllRoutes from "./Routes";
import store from "./Redux/Store";
import { Provider } from "react-redux";
import { productType } from "./Types/types";
import { productsContext } from "./Contexts/Contexts"

export default function App() {

  const [cartItems, setCartItems] = useState<productType[]>([])
  const [wishlistItems, setWishlistItems] = useState<productType[]>([])

  const [checkout, setCheckout] = useState<boolean>(false)

  // update cartItems
  const localStorageCartItems = (selectedItem: productType) => {
    setCartItems([...cartItems, selectedItem])
    return [...cartItems, selectedItem]
  }

  //remove Items from cart 
  const deleteCartItems = (itemId: string) => {
    const remindedItems = cartItems.filter(item => item.id !== itemId)

    //update cartItems
    setCartItems(remindedItems)
  }

  // update localstorage (Cart)
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify({ cartItems }));
  }, [cartItems])

  // update wishlistItems
  const localStorageWishlistItems = (selectedItem: productType) => {
    setWishlistItems([...wishlistItems, selectedItem])
    return [...wishlistItems, selectedItem]
  }
  //remove Items from wishlist 
  const deleteWishlistItems = (itemId: string) => {

    const remindedItems = wishlistItems.filter(item => item.id !== itemId)
    //update wishlistItems
    setWishlistItems(remindedItems)

  }
  // update localstorage (wishlist)
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify({ wishlistItems }));
  }, [wishlistItems])


  // scroll to top on page load
  useEffect(
    () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []
  );




  return (
    <Provider store={store}>
      <productsContext.Provider value={{
        cartItems: cartItems,
        setCartItems: setCartItems,
        localStorageCartItems: localStorageCartItems,
        deleteCartItems: deleteCartItems,

        wishlistItems: wishlistItems,
        setWishlistItems: setWishlistItems,
        localStorageWishlistItems: localStorageWishlistItems,
        deleteWishlistItems: deleteWishlistItems,

        checkout: checkout,
        setCheckout: setCheckout

        // productQuantity: 0,
        // setProductQuantity: () => { },
      }}>

        <AllRoutes />
      </productsContext.Provider>
    </Provider>
  );
}


// export {localStorageCartItems}
