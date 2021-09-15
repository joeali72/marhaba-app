import { useEffect } from "react";

import ProductDetailsSection from "../../Components/Sections/ProductDetails";

export default function ProductDetailsPage(props) {
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
      <ProductDetailsSection />
    </main>
  );
}
