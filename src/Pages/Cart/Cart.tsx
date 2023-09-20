import "./_Cart.scss";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import { SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import BasicTable from "../../Utils/Table/Table";
import TextField from "@mui/material/TextField";
import ShowAlert from "../../Utils/Alert/Alert";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { productType, stateType } from "../../Types/types";
import { useContext, useEffect, useState } from "react";
import { productsContext } from "../../Contexts/Contexts";

export default function Cart() {

  const bg = useSelector((state: stateType) => state.bgUrl);
  const context = useContext(productsContext)
  const [cartItems, setCartItems] = useState<productType[]>([])

  useEffect(() => {
    setCartItems(context.cartItems)
  }, [context.cartItems])

  const deleteFromList = (productID: string) => {
    context.deleteCartItems(productID)

    setCartItems(context.cartItems)
  }

  const totalPrice = cartItems.reduce((acc, product) => acc + product.price, 0);

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
      {cartItems && cartItems.length > 0 ? (
        <>
          <BasicTable products={cartItems} deleteFromList={deleteFromList} />
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
              label={`$${totalPrice}`}
              variant="outlined"
              disabled={true}
            />
            <Button
              variant="contained"
              color="success"
              className="lets-pay-btn"
              onClick={() => context.setCheckout(true)}
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
          cart={true} wishlist={false} />
      )}

      <Footer about={false} />
    </>
  );
}
