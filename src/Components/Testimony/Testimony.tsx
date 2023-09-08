import "./_Testimony.scss";

// @ts-ignore
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonyItem from "../TestimonyItem/TestimonyItem";
import { useSelector } from "react-redux";
import { stateType } from "../../Types/types";

export default function Testimony() {
  const usersInfo = useSelector((state: stateType) => state.usersInfo);

  return (
    <>
      <div className="landing-section-title">Testimony</div>
      <div className="landing-section-subtitle">Our satisfied customer</div>
      <div className="landing-section-details">
        says Far far away, behind the word mountains, far from the countries
        Vokalia and Consonantia, there live the blind texts. Separated they live
        in
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper testimony-slide"
      >
        {usersInfo.map((user: { userID: string, userImgUrl: string, userName: string, userCommentText: string }) => (
          <SwiperSlide style={{paddingBottom: "45px"}} key={user.userID}>
            <TestimonyItem
              src={`${user.userImgUrl}`}
              name={user.userName}
              msg={user.userCommentText}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
