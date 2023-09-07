export type stateType = {
   products: {
      products: {
         id: string,
         title: string,
         price: number,
         rate: number,
         sold: number,
         cover: string,
         inStock: number,
         category: string,
         discount: number
      }[];
      categories: {
         title: string
         id: string
      }[],
      selectedCategory: string,
   }

   ;
   bgUrl: string;
   categories: { cover: string, title: string }[];
   bestPrice: {
      bgUrl: string
      productTitle: string
      price: number
      discount: number
   };
   usersInfo: [];
   inputValue: [];
   services: [];
   wishlist: productType[];
   cart: {
      cartItems: productType[]
      cartTotalAmount: number
   };
   countUp: [];
   about: { url: string };
   contact: {
      address: string
      phone: string
      email: string
      website: string
   };
}

export type productType = {
   id: string,
   title: string,
   price: number,
   rate: number,
   sold: number,
   cover: string,
   inStock: number,
   category: string,
   discount: number
   quantity?: number
}