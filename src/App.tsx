import { useCallback, useEffect, useState } from "react";
import AllRoutes from "./Routes";
import store from "./Redux/Store";
import { Provider } from "react-redux";
import { productType } from "./Types/types";
import { cartContext } from "./Contexts/Contexts"

export default function App() {

  const [cartItems, setCartItems] = useState<productType[]>([])
  const [wishlistItems, setWishlistItems] = useState<productType[]>([])
  // const [localStorageCartItems, setLocalStorageCartItems] = useState([])
  // const [localStorageWishlistItems, setLocalStorageWishlistItems] = useState([])



  const localStorageCartItems = (selectedItem: productType) => {

    setCartItems([...cartItems, selectedItem])

    localStorage.setItem("cart", JSON.stringify({ cartItems }));

    return [...cartItems, selectedItem]

  }

  const localStorageWishlistItems = useCallback((selectedItem: productType) => {

    setWishlistItems([...wishlistItems, selectedItem])

    localStorage.setItem("wishlist", JSON.stringify({ wishlistItems }));

  }, [])

  useEffect(() => {

    const getcartItems = localStorage.getItem('cart')
    let localStorageCartItems;

    try {
      localStorageCartItems = JSON.parse(getcartItems || '');
      
    } catch (error) {
      
      console.error('Error parsing JSON:', error);
    }
    // setCartItems(localStorageCartItems)
    
    // const getWishlistItems = localStorage.getItem('wishlist') ?? ''
    // const wishlistItems = JSON.parse(getWishlistItems)
    // setWishlistItems(wishlistItems)

  }, [cartItems, wishlistItems])


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
        cartItems: cartItems,
        localStorageWishlistItems: () => { },
      }}>

        <AllRoutes />
      </cartContext.Provider>
    </Provider>
  );
}


// export {localStorageCartItems}
