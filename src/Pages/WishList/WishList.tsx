import "./_WishList.scss";

import { useContext } from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import { SwiperSlide } from "swiper/react";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { removeFromList } from "../../Redux/Reducers/Wishlist";
import BasicTable from "../../Utils/Table/Table";
import ShowAlert from "../../Utils/Alert/Alert";
import { cartContext } from "../../Contexts/Contexts";
import { TextField } from "@mui/material";
import { addToCart } from "../../Redux/Reducers/cartItems";
import { toast } from "react-toastify";

import { stateType } from "../../Types/types";

export default function WishList() {
  const bg = useSelector((state: stateType) => state.bgUrl);
  const wishlist = useSelector((state: stateType) => state.wishlist);
  const dispatch = useDispatch();

  //delete
  const deleteFromList = (productID: string) => {
    const remainsProducts = wishlist.filter(
      (product) => product.id !== productID
    );

    dispatch(removeFromList(remainsProducts));
  };

  //add to cart
  const cartItems = useSelector((state: stateType) => state.cart.cartItems);

  const addToCartHandler = (productID: string) => {
    const selectedItem = wishlist.find((product) => product.id === productID);
    if (selectedItem && cartItems.includes(selectedItem)) {
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
    } else {
      toast.success("Item has been added to your Cart", {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      // @ts-ignore
      dispatch(addToCart(selectedItem));
    }
  };

  //total price
  const context = useContext(cartContext);

  const totalPrice = wishlist.reduce((total, product) => {
    return total + product.price * context.productQuantity;
  }, 0);

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

      {wishlist.length !== 0 ? (
        <>
          <BasicTable
            products={wishlist}
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
            <TextField
              id="outlined-basic"
              label={`$${totalPrice}`}
              variant="outlined"
              disabled={true}
            />
          </div>
        </>
      ) : (
        <ShowAlert
          variant="filled"
          type="error"
          msg="You Have not select any product yet!"
          wishlist={true} cart={undefined} />
      )}

      <Footer about={false} />
    </>
  );
}
