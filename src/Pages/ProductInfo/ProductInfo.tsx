import { useState } from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "./_ProductInfo.scss";
import Footer from "../../components/Footer/Footer";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import BasicRating from "../../Utils/Rating/Rating";
import { addToCart } from "../../Redux/Reducers/cartItems";
import { toast } from "react-toastify";
import { productType, stateType } from "../../Types/types";

export default function ProductInfo() {
  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<number>(0);

  const bg = useSelector((state: stateType) => state.bgUrl);

  const products = useSelector((state: stateType) => state.products.products);
  const { productID } = useParams();
  const mainProduct = products.find((product: productType) => product.id === productID);

  const cartItems = useSelector((state: stateType) => state.cart.cartItems);
  const addToCartHandler = (id: string) => {
    if (!isSelected && inputValue > 0) {

      if (mainProduct && cartItems.includes(mainProduct)) {
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
        dispatch(addToCart(mainProduct));
        setIsSelected(true);
      }
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

      <Grid container className="product-info-container">
        <Grid className="img-section" item xs={12} lg={6}>
          <img
            src={mainProduct ? mainProduct.cover : ""}
            alt={mainProduct ? mainProduct.title : ""}
            className="product-img"
          />
        </Grid>
        <Grid className="txt-section" item xs={12} lg={6}>
          <h2 className="product-title">{mainProduct ? mainProduct.title : ""}</h2>
          <div className="statistical-info">
            <div className="rating">
              <BasicRating
                type="read-only"
                rate={Math.round(mainProduct ? mainProduct.rate : 0)}
              />
            </div>
            <div className="sold-count">
              {mainProduct ? mainProduct.sold : ""} <span className="sold">Sold</span>{" "}
            </div>
          </div>
          <h3 className="price">$ {mainProduct ? mainProduct.price : ""}</h3>
          <p className="more-info">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth. Text should turn
            around and return to its own, safe country. But nothing the copy
            said could convince her and so it didn’t take long until.
          </p>
          <div>
            <button
              className="minus"
              onClick={(event) => {
                event.preventDefault()
                setInputValue((prev) => {
                  // @ts-ignore
                  if (event.target.value === 0) {
                    return 0;
                  } else {
                    return prev - 1;
                  }
                })
              }
              }
            >
              -
            </button>
            <input
              type="text"
              className="product-count"
              value={inputValue}
            />
            <button
              className="plus"
              onClick={() => setInputValue((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <button
            className="add-to-cart"
            onClick={event => {
              event.preventDefault()
              addToCartHandler
            }}>
            Add to Cart
          </button>
        </Grid>
      </Grid>
      <Footer about={false} />
    </>
  );
}
