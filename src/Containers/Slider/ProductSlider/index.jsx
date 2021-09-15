import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWhySliderData } from "../../../Store/Actions";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import Img from "../../../Components/Util/Img";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import Classes from "./slider.module.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export default function ProductSlider(props) {
  const sliderContent = useSelector((state) => state.whyData.sliderData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWhySliderData());
  }, []);

  let sliderDataContent;
  if (sliderContent) {
    sliderDataContent = (
      <>
        {sliderContent.map((swiperL, index) => {
          return (
            <SwiperSlide key={index}>
              <Img src={swiperL.img} alt="Products" className={`w-100`} />
            </SwiperSlide>
          );
        })}
      </>
    );
  }

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Swiper
      onInit={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.destroy();
        swiper.navigation.init();
        swiper.navigation.update();
      }}
      className={`${Classes.ProductSwiper} ${props.sliderClassName}  mx-auto`}
      slidesPerView={6}
      spaceBetween={20}
      speed={1200}
      navigation
      autoplay={{ delay: 10000 }}
      loop={true}
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        // when window width is >= 640px
        992: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
      }}
    >
      {sliderDataContent}

      <div ref={prevRef} className={`swiper-button-prev`}>
        <FontAwesomeIcon icon={faChevronLeft} size="2x" />
      </div>
      <div ref={nextRef} className={`swiper-button-next`}>
        <FontAwesomeIcon icon={faChevronRight} size="2x" />
      </div>
    </Swiper>
  );
}
