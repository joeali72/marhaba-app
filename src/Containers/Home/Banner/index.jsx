import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../../../Components/Util/Button";
import Classes from "./banner.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Img from "../../../Components/Util/Img";
import bannerImg from "../../../Assets/HomePage/banner.jpeg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import axios from "../../../axios-base";
import { useDispatch, useSelector } from "react-redux";
import { getBannerData } from "../../../Store/Actions";

import { fadeInUp, fadeInLeft, fadeInRight } from "react-animations";
import { StyleSheet, css } from "aphrodite";
const styles = StyleSheet.create({
  fadeInUp: {
    animationName: fadeInUp,
    animationDuration: "1.5s",
  },
  fadeInLeft: {
    animationName: fadeInLeft,
    animationDuration: "1.5s",
  },
  fadeInRight: {
    animationName: fadeInRight,
    animationDuration: "1.5s",
  },
});

export default function BannerContainer(props) {
  const bannerContent = useSelector((state) => state.bannerData.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBannerData());
  }, []);

  let bannerData;
  if (bannerContent) {
    bannerData = (
      <>
        <Col md={6}>
          <div className={Classes.banner_content_text}>
            <h1
              className={`${Classes.banner_content_text_title} ${css(
                styles.fadeInLeft
              )}`}
              style={styles.fadeIn}
            >
              {/* The Best Haircut Kit is Here! */}
              {bannerContent.title}
            </h1>
            <Button
              className={`btn_black mb-4 ${css(styles.fadeInUp)}`}
              to={`/product-details/5`}
            >
              {" "}
              {/*${bannerContent.productId}*/}
              <span>Read more</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </Button>

            <div className={`stars ${css(styles.fadeInUp)}`}>
              <span
                className={`stars_star ${bannerContent.avg >= 1 && "checked"}`}
              >
                <FontAwesomeIcon icon={faStar} size="lg" />
              </span>
              <span
                className={`stars_star ${bannerContent.avg >= 2 && "checked"}`}
              >
                <FontAwesomeIcon icon={faStar} size="lg" />
              </span>
              <span
                className={`stars_star ${bannerContent.avg >= 3 && "checked"}`}
              >
                <FontAwesomeIcon icon={faStar} size="lg" />
              </span>
              <span
                className={`stars_star ${bannerContent.avg >= 4 && "checked"}`}
              >
                <FontAwesomeIcon icon={faStar} size="lg" />
              </span>
              <span
                className={`stars_star ${bannerContent.avg >= 5 && "checked"}`}
              >
                <FontAwesomeIcon icon={faStar} size="lg" />
              </span>
            </div>
            <p className={`${css(styles.fadeInUp)}`}>
              {bannerContent.reviews}+ Five Star Reviews
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div className={`${Classes.bannerImg}`}>
            <Img
              alt="Banner Product"
              src={bannerContent.img}
              className={`img_border  ${css(
                styles.fadeInRight
              )}`}
            />
          </div>
        </Col>
      </>
    );
  }

  return (
    <div className={`${Classes.banner_content}`}>
      <Container className="h-100">
        <Row className={`align-items-center h-100`}>{bannerData}</Row>
      </Container>
    </div>
  );
}
