import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNumCart } from "../../../Store/Actions";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import Img from "../../Util/Img";
import brandLogoImg from "../../../Assets/global/brand_logo.png";
import ProductImg from "../../../Assets/global/product_img.jpeg";
import Button from "../../Util/Button";

import Classes from "./header.module.scss";

export default function Header(props) {
  const [bodyScroll, setBodyScroll] = useState("");

  function logit() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        setBodyScroll("scrolled");
      } else {
        setBodyScroll("");
      }
    });
  }

  const numData = useSelector((state) => state.addCart.numCart);
  const dispatch = useDispatch();

  useEffect(() => {
    logit();
    // dispatch(getNumCart());
    let getCartNumber = setInterval(() => {
      dispatch(getNumCart());
    }, 1);
    return () => clearInterval(getCartNumber)
  }, []);

  let cart;
  if (numData) {
    cart = (
      <>
        <li className={`navbar-item ${Classes.navbar_list_dropdown}`}>
          <Link
            to="/"
            className={`${Classes.navbar_list_dropdown_link}`}
            onClick={(e) => e.preventDefault()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Outline"
              viewBox="0 0 512 512"
              width="20"
              height="20"
            >
              <path d="M17.664,492.884A8,8,0,0,0,24,496H488a8,8,0,0,0,7.737-10.036C456.483,336.8,456,201.35,456,200a8,8,0,0,0-8-8H424v-8c0-92.636-75.364-168-168-168S88,91.364,88,184v8H64a8,8,0,0,0-8,8c0,1.351-.483,136.8-39.737,285.965A8,8,0,0,0,17.664,492.884ZM336,168H176a8,8,0,0,0-8,8v16H136v-8a120,120,0,0,1,240,0v8H344V176A8,8,0,0,0,336,168Zm-8,16v72a56.064,56.064,0,0,1-56,56H240a56.064,56.064,0,0,1-56-56V184Zm64,48h16v20.686l-8,8-8-8ZM256,32c83.813,0,152,68.187,152,152v32H392V184c0-74.991-61.009-136-136-136S120,109.009,120,184v32H104V184C104,100.187,172.187,32,256,32ZM104,232h16v20.686l-8,8-8-8ZM71.872,208H88v48a8,8,0,0,0,2.343,5.657l16,16a8,8,0,0,0,11.314,0l16-16A8,8,0,0,0,136,256V208h32v48a72.081,72.081,0,0,0,72,72h32a72.081,72.081,0,0,0,72-72V208h32v48a8,8,0,0,0,2.343,5.657l16,16a8,8,0,0,0,11.314,0l16-16A8,8,0,0,0,424,256V208h16.128c.727,30.7,5.559,145.51,37.546,272H34.326C66.313,353.51,71.145,238.7,71.872,208Z" />
              <path d="M224,264h64a8,8,0,0,0,8-8V224a8,8,0,0,0-8-8H224a8,8,0,0,0-8,8v32A8,8,0,0,0,224,264Zm8-32h48v16H232Z" />
            </svg>

            <span className={`${Classes.navbar_list_dropdown_link_span}`}>
              {numData}
            </span>
          </Link>

          <div className={`${Classes.navbar_list_dropdown_menu}`}>
            <div className={`${Classes.navbar_list_dropdown_menu_header}`}>
              <div
                className={`${Classes.navbar_list_dropdown_menu_header_img}`}
              >
                <Img alt="Product" src={ProductImg} />
              </div>

              <div
                className={`${Classes.navbar_list_dropdown_menu_header_content}`}
              >
                <h5 className="smTitle mb-1">PRODUCT NAME</h5>
                <p
                  className={`${Classes.navbar_list_dropdown_menu_header_content_text}`}
                >
                  {numData} x <span className="secColor">$68.00</span>
                </p>
              </div>
            </div>

            <div className={`${Classes.navbar_list_dropdown_menu_total}`}>
              <p className={`${Classes.navbar_list_dropdown_menu_total_title}`}>
                Subtotal
              </p>

              <span
                className={`${Classes.navbar_list_dropdown_menu_total_money} secColor`}
              >
               ${(numData * 68.00).toFixed(2)}
              </span>
            </div>

            <div className={`${Classes.navbar_list_dropdown_menu_footer}`}>
              <Button className="btn_gray" to="/cart">
                View Cart
              </Button>
              <Button className="btn_blue" to="/checkout">
                checkout
              </Button>
            </div>
          </div>
        </li>
      </>
    );
  }

  return (
    <header id={`pageHeader`} className={`${Classes.Header} ${bodyScroll}`}>
      <Navbar expand="lg" className={`p-0 ${Classes.Header_navbar}`}>
        <Container>
          <Link to="/" className="navbar-brand py-0 my-0">
            <Img alt="Marhaba As" src={brandLogoImg} width="170" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`ms-auto ${Classes.navbar_list}`} as="ul">
              <li className={`navbar-item ${Classes.navbar_list_item}`}>
                <NavLink
                  to="/"
                  className={`navbar-link ${Classes.navbar_list_item_link}`}
                >
                  Home
                </NavLink>
              </li>
              <li className={`navbar-item ${Classes.navbar_list_item}`}>
                <HashLink
                  to="/#aboutSection"
                  className={`navbar-link ${Classes.navbar_list_item_link}`}
                >
                  About
                </HashLink>
              </li>
              <li className={`navbar-item ${Classes.navbar_list_item}`}>
              <HashLink
                  to="/#contactSection"
                  className={`navbar-link ${Classes.navbar_list_item_link}`}
                >
                  Contact
                </HashLink>
              </li>
              {/* {cart} */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
