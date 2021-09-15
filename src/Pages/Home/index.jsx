import { useEffect } from "react";
import HomeSections from "../../Components/Sections/Home";

export default function HomePage(props) {
  const blackHeader = () => {
    let header = document.getElementById("pageHeader");
    header.classList.remove("scrolled");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  };

  useEffect(() => {
    blackHeader();
  }, []);
  return (
    <main>
      <HomeSections />
    </main>
  );
}
