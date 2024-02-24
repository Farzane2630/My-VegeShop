import "./_WishList.scss";

import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import { SwiperSlide } from "swiper/react";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import BasicTable from "../../Utils/Table/Table";
import ShowAlert from "../../Utils/Alert/Alert";
import { productsContext } from "../../Contexts/Contexts";
import { TextField } from "@mui/material";

import { productType, stateType } from "../../Types/types";
import { toast } from "react-toastify";

export default function WishList() {

  const bg = useSelector((state: stateType) => state.bgUrl);
  const context = useContext(productsContext)
  const [wishlistItems, setWishlistItems] = useState<productType[]>([])
  const products = useSelector((state: stateType) => state.products.products);


  // update wishlist items in DOM
  useEffect(() => {
    setWishlistItems(context.wishlistItems)
  }, [context.wishlistItems])

  const totalPrice = wishlistItems.reduce((acc, product) => acc + product.price, 0);

  const deleteFromList = (productID: string) => {
    // to filter wishlist
    context.deleteWishlistItems(productID)

    //to update wishlist items in DOM after filter
    setWishlistItems(context.wishlistItems)
  }

  const cart = useContext(productsContext)

  const [cartItems, setCartItems] = useState<productType[]>([])

  useEffect(() => {
    setCartItems(cart.cartItems)
  }, [cart.cartItems])

  const addToCartHandler = (productID: string) => {

    const selectedProduct = products && products.find(product => product.id === productID)

    if (selectedProduct && !cartItems.includes(selectedProduct)) {
      toast.success("Item added to cart", {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      cart.localStorageCartItems(selectedProduct)
      setCartItems(cart.cartItems)
    } else {
      toast.error("You have added this Item before!", {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    deleteFromList(productID)
  }



  return (
    <>
      <Header />

      <Hero notIndex={true}>
        <SwiperSlide
          className="slide-1"
          style={{ backgroundImage: `url(${bg[1]})` }}
        >
          <p className="product-page"> Home WISHLIST </p>
          <h1 className="product-title">MY WISHLIST</h1>
        </SwiperSlide>
      </Hero>

      {wishlistItems.length !== 0 ? (
        <>
          <BasicTable
            products={wishlistItems}
            deleteFromList={deleteFromList}
            wishlist={true}
            addToCartHandler={addToCartHandler}
          ></BasicTable>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              padding: "0 15rem",
            }}
          >
            {/* <TextField
              id="outlined-basic"
              label={`$${totalPrice}`}
              variant="outlined"
              disabled={true}
            /> */}
          </div>
        </>
      ) : (
        <ShowAlert
          variant="filled"
          type="error"
          msg="You Have not select any product yet!"
          wishlist={true} cart={false} />
      )}

      <Footer about={false} />
    </>
  );
}
