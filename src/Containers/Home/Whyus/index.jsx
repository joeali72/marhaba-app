import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import StealBox from "../../../Components/Util/SteelBox";
import Classes from "./why.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import Title from "../../../Components/Util/Title";
import Text from "../../../Components/Util/Text";
import ProductSlider from "../../Slider/ProductSlider";
import { getWhyData } from "../../../Store/Actions";

import { fadeInUp, fadeInLeft, fadeInRight } from "react-animations";
import { StyleSheet, css } from "aphrodite";
const styles = StyleSheet.create({
  fadeInUp: {
    animationName: fadeInUp,
    animationDuration: "1.5s",
    animationDelay: '.2s'
  },
  fadeInLeft: {
    animationName: fadeInLeft,
    animationDuration: "1.5s",
    animationDelay: '.2s'
  },
  fadeInRight: {
    animationName: fadeInRight,
    animationDuration: "1.5s",
    animationDelay: '.2s'
  },
});

export default function WhyusContainer(props) {
  const [boxState, setBoxState] = useState([
    {
      id: "d1",
      icon: (
        <FontAwesomeIcon
          className={`whtColor mb-3`}
          icon={faShieldAlt}
          size="4x"
        />
      ),
      title: "Stainless Steel",
    },
    {
      id: "d2",
      icon: (
        <FontAwesomeIcon
          className={`whtColor mb-3`}
          icon={faShieldAlt}
          size="4x"
        />
      ),
      title: "Stainless Steel",
    },
    {
      id: "d3",
      icon: (
        <FontAwesomeIcon
          className={`whtColor mb-3`}
          icon={faShieldAlt}
          size="4x"
        />
      ),
      title: "Stainless Steel",
    },
  ]);

  const whyContent = useSelector((state) => state.whyData.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWhyData());
    console.log(whyContent)
  }, []);

  let whyData;
  if (whyContent) {
    whyData = (
      <>
        {whyContent.map((whyL) => {
          return (
            <Col md={6} key={whyL.id}>
              <Text className={`whtColor mb-4 text-center ${css(styles.fadeInUp)} w-75 mx-auto`}>{whyL.text}</Text>
            </Col>
          );
        })}
      </>
    );
  }

  return (
    <Container>
      <Row
        className={`justify-content-between`}
        style={{ marginTop: "-50px", position: "relative", zIndex: "3" }}
      >
        {boxState.map((boxL) => {
          return (
            <Col md={4} sm={4} key={boxL.id}>
              <StealBox icon={boxL.icon} title={boxL.title} />
            </Col>
          );
        })}
      </Row>

      <Title className={`whtColor mt-4 mb-5 befSmTitle`}>Why Us</Title>

      <Row>{whyData}</Row>

      <ProductSlider sliderClassName={`${css(styles.fadeInUp)}`} />
    </Container>
  );
}
