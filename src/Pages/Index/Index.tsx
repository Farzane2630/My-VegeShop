import "./_Index.scss";

import Header from "../../components/Header/Header";
import OurServices from "../../components/OurServices/OurServices";
import Category from "../../components/Category/Category";
import Products from "../../components/Products/Products";
import BestPrice from "../../components/BestPrice/BestPrice";
import Testimony from "../../components/Testimony/Testimony";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import { useSelector } from "react-redux";
import { stateType } from "../../Types/types";

export default function Index() {
  const bgUrls = useSelector((state: stateType) => state.bgUrl)

  return (
    <>
      <Header />
      <Hero>
        <SwiperSlide className="slide-1" style={{ backgroundImage: `url(${bgUrls[0]})` }}>
          <h1 className="mb-2 index-title"> 100% Fresh & Organic Fruits</h1>
          <h2 className="index-sub-title"> We Deliver Organic Vegetables & Fruits </h2>
          <Button variant="contained" color="success" style={{ marginBottom: "10rem" }}>
            <Link className="link" to="about">
              View Details
            </Link>
          </Button>
        </SwiperSlide>

        <SwiperSlide className="slide-2" style={{ backgroundImage: `url(${bgUrls[2]})` }}>
          <h1 className="mb-2 index-title"> 100% Fresh & Organic Fruits</h1>
          <h2 className="index-sub-title"> We Serve Fresh Vegetables & Fruits </h2>
          <Button variant="contained" color="success">
            <Link className="link" to="about">
              View Details
            </Link>
          </Button>
        </SwiperSlide>
      </Hero>
      <OurServices about={false} />
      <Category />
      <Products />
      <BestPrice />
      <Testimony />
      <Footer about={false} />
    </>
  );
}
