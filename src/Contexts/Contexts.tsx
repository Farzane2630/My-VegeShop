import { createContext, Dispatch, SetStateAction } from "react";
import { productType } from "../Types/types"


type productsContextType = {
   cartItems: productType[]  // array to store cartItems
   localStorageCartItems: Function; //function to update cart
   deleteCartItems: Function;  // handle deleting items from cart

   wishlistItems: productType[]  // array to store wishlistItems
   localStorageWishlistItems: Function; //function to update wishlist
   deleteWishlistItems: Function;  // handle deleting items from wishlist

   // productQuantity: number;
   // setProductQuantity: Dispatch<SetStateAction<number>>;
};

export const productsContext = createContext<productsContextType>({
   cartItems: [],
   localStorageCartItems: () => { },
   deleteWishlistItems: () => { },
   
   wishlistItems: [],
   localStorageWishlistItems: () => { },
   deleteCartItems: () => { },

   // productQuantity: 0,
   // setProductQuantity: () => { },
})


