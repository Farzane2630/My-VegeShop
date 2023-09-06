import "./_Cart.scss";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import { SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import BasicTable from "../../Utils/Table/Table";
// import { removeFromCart } from "../../Redux/Reducers/cartItems";
import TextField from "@mui/material/TextField";
import ShowAlert from "../../Utils/Alert/Alert";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { stateType } from "../../Types/types";
// import { useEffect } from "react";

export default function Cart() {
  const dispatch = useDispatch();

  const bg = useSelector((state:stateType ) => state.bgUrl);
  const cartItems = useSelector((state:stateType ) => state.cart.cartItems);
  // const cartTotalAmount = useSelector((state:stateType ) => state.cart.cartTotalAmount);

  const deleteFromList = (productID:string) => {
    // @ts-ignore
    dispatch(removeFromCart(productID));
  }


//   const handleRemoveFromCart = (product: {
//     id: string,
//     title: string,
//     price: number,
//     rate: number,
//     sold: number,
//     cover: string,
//     inStock: number,
//     category: string,
//     discount: number
//  }) => {
//   // @ts-ignore
//     dispatch(removeFromCart(product));

//   };

  //cart total price

  // useEffect(() => {
  //   dispatch(getTotals ());
  // }, [cartItems, dispatch]);

  return (
    <>
      <Header />
      <Hero notIndex={true}>
        <SwiperSlide
          className="slide-1"
          style={{ backgroundImage: `url(${bg[1]})` }}
        >
          <p className="product-page"> Home CART </p>
          <h1 className="product-title">MY CART</h1>
        </SwiperSlide>
      </Hero>
      {cartItems.length > 0 ? (
        <>
          <BasicTable products={cartItems} deleteFromList={deleteFromList} wishlist={undefined} addToCartHandler={undefined} />
          <Grid
            item
            xs={12}
            md={6}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              padding: "0 15rem",
              columnGap: "5%",
            }}
          >
            <TextField
              id="outlined-basic"
              // label={`$${totalPrice}`}
              variant="outlined"
              disabled={true}
            />
            <Button
              variant="contained"
              color="success"
              className="lets-pay-btn"
            >
              <Link to="/checkout" className="link">
                continue and pay
              </Link>
            </Button>
          </Grid>
        </>
      ) : (
        <ShowAlert
            variant="filled"
            type="error"
            msg="Cart is Empty!"
            cart={true} wishlist={undefined}        />
      )}

      <Footer about={false} />
    </>
  );
}
