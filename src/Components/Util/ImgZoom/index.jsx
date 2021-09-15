import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsImgsData } from "../../../Store/Actions";
import Zoom from "react-img-zoom";
import ProductImg from "../../../Assets/HomePage/slider/slide_1.jpeg";
import Img from "../Img";

import img1 from "../../../Assets/HomePage/gallery/1.jpeg";

import Classes from "./imgZoom.module.scss";

import ReactImageMagnify from "react-image-magnify";

import ContentZoom from "react-content-zoom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Thumbs,
} from "swiper";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, Thumbs]);

export default function ImgZoom(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [zoomWidth, setZoomWidth] = useState(0);
  const [zoomSrc, setZoomSrc] = useState(ProductImg);
  const [productImgs, setProductImgs] = useState([
    {
      id: "i_1",
      img: ProductImg,
      active: true,
    },
    {
      id: "i_2",
      img: img1,
      active: false,
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(0);

  const imgHandleClick = useCallback((imgL, index) => {
    // e.preventDefault();
    setActiveIndex(index);
    setZoomSrc(imgL.img);
    setTimeout(() => {
      setActiveIndex(index);
      setZoomSrc(imgL.img);
    });
  }, []);

  const imgsData = useSelector((state) => state.productsData.imgsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsImgsData());
    console.log(imgsData)
    console.log(imgsData)
    console.log(imgsData)


  }, [zoomSrc, imgHandleClick]);

  let imgsContentZoom;
  if (imgsData) {
    imgsContentZoom = (
      <>
        {imgsData.map((imgL) => {
          return (
            <SwiperSlide>
              <ContentZoom
                zoomPercent={300}
                largeImageUrl={imgL}
                imageUrl={imgL}
                contentHeight={500}
                contentWidth={500}
              />
            </SwiperSlide>
          );
        })}
      </>
    );
  }

  let imgsContentSlider;
  if (imgsData) {
    imgsContentSlider = (
      <>
        {imgsData.map((imgL) => {
          return (
            <SwiperSlide>
              <Img src={imgL} />
            </SwiperSlide>
          );
        })}
      </>
    );
  }

  return (
    <div
      className={`${Classes.ImgZoom} text-center text-lg-left`}
      id={`zoom_img_div`}
    >
      <span className={`${Classes.ImgZoom_sale}`}>sale!</span>

      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper2 mb-3"
      >
        {imgsContentZoom}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={15}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        className="mySwiper mb-5 swiperPer"
      >
        {imgsContentSlider}
      </Swiper>

      {/* <div className={`${Classes.ImgZoom_imgs}`}>
        <ul className={`list-unstyled ${Classes.ImgZoom_imgs_list}`}>
          {productImgs.map((imgL, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  imgHandleClick(imgL, index);
                }}
                className={`${Classes.ImgZoom_imgs_list_item} img_zoom ${
                  activeIndex === index ? "active" : "unactive"
                }`}
              >
                <Img alt="Product Imgs" src={imgL.img} />
              </li>
            );
          })}
        </ul>
      </div> */}
    </div>
  );
}
