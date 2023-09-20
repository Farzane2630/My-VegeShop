import { useContext, useState } from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "./_ProductInfo.scss";
import Footer from "../../components/Footer/Footer";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import BasicRating from "../../Utils/Rating/Rating";
import { productType, stateType } from "../../Types/types";
import { productsContext } from "../../Contexts/Contexts";

export default function ProductInfo() {
  const [inputValue, setInputValue] = useState<number>(0);

  const bg = useSelector((state: stateType) => state.bgUrl);

  const products = useSelector((state: stateType) => state.products.products);
  const { productID } = useParams();
  const mainProduct = products.find((product: productType) => product.id === productID);

  const Context = useContext(productsContext)

  const addToCartHandler = (productId: string) => {
    Context.localStorageCartItems(productId)
  }

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
            onClick={addToCartHandler(mainProduct.id)}>
            Add to Cart
          </button>
        </Grid>
      </Grid>
      <Footer about={false} />
    </>
  );
}
