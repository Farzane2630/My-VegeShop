import "./_Checkout.scss";

import { useContext, useState } from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import { SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { Button, Grid } from "@mui/material";
import InputAdornments from "../../components/InfoTable/InfoTable";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import Checkbox from "@mui/material/Checkbox";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import { Link } from "react-router-dom";
import { cartContext } from "../../Contexts/Contexts";
import swal from "sweetalert";
import { productType, stateType } from "../../Types/types";

export default function Checkout() {
  const bg = useSelector((state: stateType) => state.bgUrl);

  // payment
  const context = useContext(cartContext);
  const purchasedItems = useSelector((state: stateType) => state.cart);

  // @ts-ignore
  const subTotal: number = purchasedItems.reduce((total: number, product: productType) => {
    return total + product.price * context.productQuantity;
  }, 0)

  // @ts-ignore
  const totalDiscount: number = purchasedItems.reduce((total: number, product: productType) => {
    if (product.discount !== 0) {
      return total + product.discount * context.productQuantity;
    }
    return 0
  }, 0);

  console.log(totalDiscount);

  const total =
    Number(totalDiscount) !== 0
      ? (subTotal * (100 - totalDiscount)) / 100 + 4.99
      : subTotal + 4.99;

  const [isCheckedOut, setIsCheckedOut] = useState(false);
  const purchaseHandler = () => {
    if (purchasedItems.length > 0) {
      swal({
        title: "Purchased!",
        icon: "success",
        // @ts-ignore
        buttons: "confirm",
      });
      setIsCheckedOut(true);
    }
  };

  return (
    <>
      <Header />
      <Hero notIndex={true}>
        <SwiperSlide
          className="slide-1"
          style={{ backgroundImage: `url(${bg[1]})` }}
        >
          <p className="product-page"> Home Products </p>
          <h1 className="product-title">Product info</h1>
        </SwiperSlide>
      </Hero>
      <div className="checkout-container">
        <h2 className="billing-header">Billing Details</h2>

        <Grid container className="checkout-grid-container">
          <Grid item xs={12} lg={6} className="info-table">
            <InputAdornments />
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="new Account"
                  control={<Radio />}
                  label="Create an Account?"
                />
                <FormControlLabel
                  value="different Address"
                  control={<Radio />}
                  label="Ship to different address"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid className="payment" item lg={6} xs={12}>
            <div className="cart-total">
              <h3 className="head">Cart total</h3>

              <div className="sub-total">
                <span>Subtotal</span>
                <span>
                  {purchasedItems.length > 0 ? ` $ ${subTotal}` : `$ 00.0`}
                </span>
              </div>
              <div className="delivery">
                <span>Delivery</span>
                <span>{purchasedItems.length > 0 ? ` $ 4.99` : `$ 00.0`}</span>
              </div>
              <div className="discount">
                <span>Discount</span>
                <span>
                  {purchasedItems.length > 0 ? ` % ${totalDiscount}` : `%0`}
                </span>
              </div>
              <hr />
              <div className="total">
                <span>TOTAL</span>
                <span className="total-price">
                  {purchasedItems.length > 0 ? ` $ ${total}` : `$ 00.0`}
                </span>
              </div>
            </div>
            <div className="payment-method">
              <FormControl>
                <FormLabel
                  id="demo-radio-buttons-group-label"
                  className="form-control-label"
                >
                  <h3>Payment Method</h3>
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    className="radio-btns"
                    value="female"
                    control={<Radio />}
                    label="Direct Bank Transfer"
                  />
                  <FormControlLabel
                    className="radio-btns"
                    value="male"
                    control={<Radio />}
                    label="Check Payment"
                  />
                  <FormControlLabel
                    className="radio-btns"
                    value="other"
                    control={<Radio />}
                    label="Paypal"
                  />
                </RadioGroup>
              </FormControl>
              <FormControlLabel
                className="checkbox-btns"
                value="end"
                aria-required
                control={<Checkbox />}
                label="I have read and accept the terms and conditions.*"
              />

              <Button
                variant="contained"
                color="success"
                className="order-btn"
                onClick={purchaseHandler}
                disabled={isCheckedOut === false ? false : true}
              >
                <Link to="" className="link">
                  Place an order
                </Link>
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
      <Footer about={false} />
    </>
  );
}
