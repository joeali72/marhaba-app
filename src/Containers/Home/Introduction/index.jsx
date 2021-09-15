import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIntroData } from "../../../Store/Actions/";
import { Container } from "react-bootstrap";
import Title from "../../../Components/Util/Title";
import Img from "../../../Components/Util/Img";
import introImg from "../../../Assets/HomePage/Kit.png";
import Subtitle from "../../../Components/Util/subTitle";
import Text from "../../../Components/Util/Text";
import Button from "../../../Components/Util/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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

export default function IntroductionContainer(props) {
  const [introState, setIntrostate] = useState({
    title: "INTRODUCTION",
    img: introImg,
    subTitle: "EBC Hair Cutting Kit",
    text: "And you know where you were then. Girls were girls and men were men. Mister we could use a man like Herbert Hoover again. So get a witch’s shawl on a broomstick you can crawl on. Were gonna pay a call on the Addams Family.",
  });

  const introContent = useSelector((state) => state.introData.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIntroData());
  }, []);

  let introData;
  if (introContent) {
    introData = (
      <>
        <Title className={`${css(styles.fadeInUp)}`}>{introState.title}</Title>
        <Img
          alt="Intro Img"
          src={introContent.img}
          className={`img_border mb-5 ${css(styles.fadeInUp)}`}
        />
        <Subtitle className={`mb-3 ${css(styles.fadeInUp)}`}>{introState.subTitle}</Subtitle>
        <Text className={`mx-auto w-85 fs-5 mb-4 fw-bold ${css(styles.fadeInUp)}`}>{introContent.body}</Text>
      </>
    );
  }

  return (
    <Container>
      <div className="text-center">
        {introData}
        <Button className={`btn_black ${css(styles.fadeInUp)}`} to="/product-details/5">
          <span>Read more</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </div>
    </Container>
  );
}
