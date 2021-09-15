import { useEffect } from "react";
import Cart from "../../Components/Sections/Cart";

export default function CartPage(props) {
  const blackHeader = () => {
    let header = document.getElementById("pageHeader");
    header.classList.add("scrolled");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        header.classList.add("scrolled");
      } else {
        header.classList.add("scrolled");
      }
    });
  };

  useEffect(() => {
    blackHeader();
  }, []);

  return (
    <main className="p_main">
      <Cart />
    </main>
  );
}
