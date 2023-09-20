import { createContext, Dispatch, SetStateAction } from "react";
import { productType } from "../Types/types"


type productsContextType = {
   productQuantity: number;
   setProductQuantity: Dispatch<SetStateAction<number>>;
   localStorageCartItems: Function;
   localStorageWishlistItems: Function;
   deleteWishlistItems: Function;
   deleteCartItems: Function;
   cartItems: productType[]
   wishlistItems: productType[]
};

export const productsContext = createContext<productsContextType>({
   productQuantity: 0,
   setProductQuantity: () => { },
   localStorageCartItems: () => { },
   localStorageWishlistItems: () => { },
   deleteWishlistItems: () => { },
   deleteCartItems: () => { },
   cartItems: [],
   wishlistItems: []
})


