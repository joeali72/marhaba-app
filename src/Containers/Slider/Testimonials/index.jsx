import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTestiData } from "../../../Store/Actions";
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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import userImg from "../../../Assets/HomePage/Testimonials/placeholder.png";
import TestimonialsCard from "../../../Components/Util/TestimonialsCard";

import Classes from "./testimonials.module.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export default function TestimonialsSlider(props) {
  const testiData = useSelector((state) => state.testiData.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTestiData());
  }, []);

  let testiContentData;
  if (testiData) {
    testiContentData = (
      <>
        {testiData.map((testiL, index) => {
          return (
            <SwiperSlide key={index}>
              <TestimonialsCard
                src={userImg}
                name={testiL.fullname}
                user={`@${testiL.email}`}
                text={testiL.review}
                icon={faFacebook}
                iconClassName={`facebook_color`}
              />
            </SwiperSlide>
          );
        })}
      </>
    );
  }
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
        <Swiper
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className={`${Classes.TestimonialsSwiper}`}
          slidesPerView={4}
          spaceBetween={50}
          pagination={{ clickable: true }}
          speed={1200}
          navigation
          autoplay={{ delay: 10000 }}
          loop={true}
          autoHeight={true}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            576: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            // when window width is >= 480px
            768: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            // when window width is >= 640px
            992: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            // when window width is >= 640px
            1200: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {testiContentData}

          <div ref={prevRef} className={`swiper-button-prev`}>
            <FontAwesomeIcon
              icon={faChevronLeft}
              size="3x"
              className={`graycolor`}
            />
          </div>
          <div ref={nextRef} className={`swiper-button-next`}>
          <FontAwesomeIcon
              icon={faChevronRight}
              size="3x"
              className={`graycolor`}
            />
          </div>
        </Swiper>
    </>
  );
}
