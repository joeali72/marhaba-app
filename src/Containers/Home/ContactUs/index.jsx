import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContactData, getsocialContactData } from "../../../Store/Actions/";
import { Col, Container, Row } from "react-bootstrap";
import ContactBox from "../../../Components/Util/ContactBox";
import Title from "../../../Components/Util/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhoneAlt,
  faEnvelope,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Classes from "./contact.module.scss";
import SocialIcons from "../../../Components/Util/SocialIcon";
import ContactForm from "../../../Components/Util/ContactForm";

import { useGoogleMaps } from "react-hook-google-maps";

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

library.add(faFacebookF, faLinkedinIn, faTwitter);

export default function ContactUsContainer(props) {
  const [contactInfo, setContactInfo] = useState([
    {
      id: "c_1",
      icon: <FontAwesomeIcon icon={faPhoneAlt} size="lg" />,
      subTitle: "Call Us",
      link: "+1 458 692 111",
      href: "tel:+1 458 692 111",
    },
    {
      id: "c_2",
      icon: <FontAwesomeIcon icon={faBuilding} size="lg" />,
      subTitle: "Visit Us",
      link: "115 Sant Jos St. 406 California, USA.",
      href: "115 Sant Jos St. 406 California, USA.",
    },
    {
      id: "c_3",
      icon: <FontAwesomeIcon icon={faEnvelope} size="lg" />,
      subTitle: "Email",
      link: "info@marhabaas.us",
      href: "mailto:info@marhabaas.us",
    },
  ]);

  const [socialState, setSocialState] = useState([
    {
      id: "s_1",
      icon: <FontAwesomeIcon icon={faFacebookF} size="sm" />,
      link: "www.facebook.com",
      class: "fbBg",
    },
    {
      id: "s_2",
      icon: <FontAwesomeIcon icon={faTwitter} size="sm" />,
      link: "www.facebook.com",
      class: "twBg",
    },
    {
      id: "s_3",
      icon: <FontAwesomeIcon icon={faLinkedinIn} size="sm" />,
      link: "www.facebook.com",
      class: "inBg",
    },
  ]);

  const contactData = useSelector((state) => state.contactData.data);
  const socailContactData = useSelector(
    (state) => state.contactData.socialData
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactData());
    dispatch(getsocialContactData());
    console.log(contactData);
    console.log(contactData);
    console.log(contactData);
    console.log(socailContactData);
    console.log(socailContactData);
  }, []);

  let contactContentData;
  if (contactData) {
    contactContentData = (
      <>
        {contactData.map((contactL, index) => {
          return (
            <ContactBox
              contactBoxClassName={`${css(styles.fadeInLeft)}`}
              key={index}
              icon={
                contactL.icon === "mobile" ? (
                  <FontAwesomeIcon icon={faPhoneAlt} size="lg" />
                ) : "" || contactL.icon === "email" ? (
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                ) : "" || contactL.icon === "address" ? (
                  <FontAwesomeIcon icon={faBuilding} size="lg" />
                ) : (
                  ""
                )
              }
              subtitle={contactL.title}
              href={contactL.href}
              link={contactL.link}
            />
          );
        })}
      </>
    );
  }

  let socialContentData;
  if (socailContactData) {
    socialContentData = (
      <>
        {socailContactData.map((socialL, index) => {
          return (
            <li key={index} className={`${css(styles.fadeInUp)}`}>
              <a
                href={`${socialL.link}`}
                // target="_blank"
                className={`${socialL.class}`}
              >
                {socialL.icon === "facebook" ? (
                  <FontAwesomeIcon icon={faFacebookF} size="sm" />
                ) : "" || socialL.icon === "twitter" ? (
                  <FontAwesomeIcon icon={faTwitter} size="sm" />
                ) : "" || socialL.icon === "linkedIn" ? (
                  <FontAwesomeIcon icon={faLinkedinIn} size="sm" />
                ) : (
                  ""
                )}
              </a>
            </li>
          );
        })}
      </>
    );
  }

  const uluru = { lat: 51.52295389239026, lng: -0.1236738729807082 };

  const { ref, map, google } = useGoogleMaps(
    // Use your own API key, you can get one from Google (https://console.cloud.google.com/google/maps-apis/overview)
    "AIzaSyB2oKnoBeDDRxl3hqwuoyx7k8lKrjPRf0w",
    // NOTE: even if you change options later
    {
      zoom: 10,
      center: uluru,
    }
  );
  if (map) {
    // execute when map object is ready
    new google.maps.Marker({ position: uluru, map });
  }

  return (
    <Container>
      <Title className={`whtColor mb-4`}>CONTACT US</Title>

      <Row>
        <Col lg={4}>
          {contactContentData}

          <SocialIcons>{socialContentData}</SocialIcons>
        </Col>

        <Col lg={8}>
          <ContactForm />
        </Col>
      </Row>

      <div
        ref={ref}
        style={{ width: "100%", height: 180, marginTop: "20px" }}
      />
    </Container>
  );
}
