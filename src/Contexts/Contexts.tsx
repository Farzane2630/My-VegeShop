import { createContext, ReactNode, Dispatch, SetStateAction } from "react";
import { productType } from "../Types/types"


type CartContextType = {
   productQuantity: number;
   setProductQuantity: Dispatch<SetStateAction<number>>;
   localStorageCartItems: Function;
   cartItems: productType[],
   localStorageWishlistItems: Dispatch<SetStateAction<productType>>;
};

export const cartContext = createContext<CartContextType>({
   productQuantity: 0,
   setProductQuantity: () => { },
   localStorageCartItems: () => { },
   cartItems: [],
   localStorageWishlistItems: () => { },
})


