import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData } from "../../../Store/Actions";
import { Col, Container, Row } from "react-bootstrap";
import ReactFancyBox from "react-fancybox";
import "react-fancybox/lib/fancybox.css";
import galleryImg1 from "../../../Assets/HomePage/gallery/1.jpeg";
import Img from "../../../Components/Util/Img";
import Fancybox from "../../../Components/Util/FancyBox";
import Classes from "./gallery.module.scss";

import { fadeInUp, fadeInLeft, fadeInRight } from "react-animations";
import { StyleSheet, css } from "aphrodite";
const styles = StyleSheet.create({
  fadeInUp: {
    animationName: fadeInUp,
    animationDuration: "1.5s",
    animationDelay: ".2s",
  },
  fadeInLeft: {
    animationName: fadeInLeft,
    animationDuration: "1.5s",
    animationDelay: ".2s",
  },
  fadeInRight: {
    animationName: fadeInRight,
    animationDuration: "1.5s",
    animationDelay: ".2s",
  },
});

export default function GalleryContainer(props) {
  const [galleryState, setGalleryState] = useState([
    { id: "g_1", smImg: galleryImg1, lgImg: galleryImg1 },
    { id: "g_2", smImg: galleryImg1, lgImg: galleryImg1 },
    { id: "g_3", smImg: galleryImg1, lgImg: galleryImg1 },
    { id: "g_4", smImg: galleryImg1, lgImg: galleryImg1 },
    { id: "g_5", smImg: galleryImg1, lgImg: galleryImg1 },
    { id: "g_6", smImg: galleryImg1, lgImg: galleryImg1 },
    { id: "g_7", smImg: galleryImg1, lgImg: galleryImg1 },
    { id: "g_8", smImg: galleryImg1, lgImg: galleryImg1 },
  ]);

  const productsData = useSelector((state) => state.productsData.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsData());
  }, []);

  let productsContentData;
  if (productsData) {
    productsContentData = (
      <>
        {productsData.map((galleryL, index) => {
          return (
            <Col md={3} sm={4} xs={6} key={index} className={`mb-4`}>
              <div
                className={`${Classes.Gallry_img} h-100 ${css(
                  styles.fadeInUp
                )} `}
              >
                <Fancybox options={{ infinite: false }}>
                  <button
                    data-fancybox="gallery"
                    data-src={galleryL.img_2}
                    className={`${Classes.Gallry_img_button}`}
                  >
                    <Img
                      src={galleryL.img_1}
                      className={`h-100 object-cover`}
                      alt="Gallery"
                    />
                  </button>
                </Fancybox>
              </div>
            </Col>
          );
        })}
      </>
    );
  }

  return (
    <Container>
      <div className=" mx-auto">
        <Row>{productsContentData}</Row>
      </div>
    </Container>
  );
}
