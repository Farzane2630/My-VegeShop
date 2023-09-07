import { createContext, ReactNode, Dispatch, SetStateAction } from "react";
import { productType } from "../Types/types"


type CartContextType = {
   productQuantity: number;
   setProductQuantity: Dispatch<SetStateAction<number>>;
   cartItems: productType[]; 
   wishlistItems: productType[];
};

export const cartContext = createContext<CartContextType>({
   productQuantity: 1,
   setProductQuantity: ()=>{},
   cartItems: [],
   wishlistItems: [],
})


