import { useState, useEffect } from "react";
import Classes from "./scroll.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function ScrollToTop(props) {
  const [scrollState, setScrollState] = useState(true);
  const checkScroll = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) {
        setScrollState(false);
      } else {
        setScrollState(true);
      }
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    checkScroll();
  }, []);

  return (
    <>
      <button
        className={`${Classes.scrollTop} ${scrollState ? "d-none" : "d-flex"}`}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faChevronUp} size="lg" />
      </button>
    </>
  );
}
