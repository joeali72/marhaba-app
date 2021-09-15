import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAboutData } from "../../../Store/Actions";
import { Container } from "react-bootstrap";
import Title from "../../../Components/Util/Title";
import Text from "../../../Components/Util/Text";
import SubTitle from "../../../Components/Util/subTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

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

export default function AboutContainer(props) {
  const [aboutState, setAboutState] = useState({
    title: "ABOUT US",
  });

  const aboutContent = useSelector((state) => state.aboutData.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAboutData());
  }, []);

  let aboutData;
  if (aboutContent) {
    aboutData = <>
      <Title className={`befMdTitle mb-4 ${css(styles.fadeInUp)}`}>{aboutState.title}</Title>
      <Text className={`text-center mb-4 w-75 mx-auto ${css(styles.fadeInUp)}`}>{aboutContent.body}</Text>
      <SubTitle className={`blkColor2 mb-3 ${css(styles.fadeInUp)}`}>{aboutContent.title}</SubTitle>
      <div className="text-center">
        <FontAwesomeIcon
          icon={faQuoteLeft}
          size="4x"
          className="graycolor mb-4"
        />
      </div>
      <Text className={`text-center mb-4 ${css(styles.fadeInUp)}`}>{aboutContent.message}</Text>
      <Text className={`text-center fw-bold mb-0 ${css(styles.fadeInUp)} graycolor`}>{aboutContent.name}</Text>
    </>;
  }

  return (
    <Container>
      {aboutData}
    </Container>
  );
}
