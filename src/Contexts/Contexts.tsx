import { createContext, Dispatch, SetStateAction } from "react";
import { productType } from "../Types/types"


type productsContextType = {
   cartItems: productType[]  // array to store cartItems
   setCartItems: Dispatch<SetStateAction<productType[]>>
   localStorageCartItems: Function; //function to update cart
   deleteCartItems: Function;  // handle deleting items from cart

   wishlistItems: productType[]  // array to store wishlistItems
   setWishlistItems: Dispatch<SetStateAction<productType[]>>
   localStorageWishlistItems: Function; //function to update wishlist
   deleteWishlistItems: Function;  // handle deleting items from wishlist

   checkout: boolean
   setCheckout: Dispatch<SetStateAction<boolean>>
};

export const productsContext = createContext<productsContextType>({
   cartItems: [],
   setCartItems: () => { },
   localStorageCartItems: () => { },
   deleteCartItems: () => { },

   wishlistItems: [],
   setWishlistItems: () => { },
   localStorageWishlistItems: () => { },
   deleteWishlistItems: () => { },

   checkout: false,
   setCheckout: () => { },
})


