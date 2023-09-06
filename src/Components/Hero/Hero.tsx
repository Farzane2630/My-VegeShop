import { ReactNode } from "react";
import { Swiper } from "swiper/react";
// @ts-ignore
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";

import "./_Hero.scss";

interface propTypes {
  notIndex?: boolean;
  children?: ReactNode
}

export default function Hero({ notIndex, children }: propTypes) {
  return (
    <Swiper
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className={`mySwiper slide-container ${notIndex ? "not-index" : ""}`}
    >
      {children}
    </Swiper>
  );
}
