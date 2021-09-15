
import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { Table, Button } from "react-bootstrap";
import Classes from "./cartTable.module.scss";
import img1 from "../../../Assets/HomePage/slider/slide_1.jpeg";
import Img from "../Img";
import AddCartForm from "../AddCartForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import CoponForm from "../CoponForm";

export default function CartTable(props) {
  const [cartState, setCartState] = useState([
    {
      id: "_1",
      img: img1,
      product: "EBC Hair Cutting Kit",
      price: "$68.00",
      quantity: "",
      subtotal: "",
    },
  ]);
  const [disbleState, setDisableState] = useState(true);

  const numData = useSelector((state) => state.addCart.numCart);

  const hanleClick = (cartL) => {
    const cartId = cartL.id;
    setCartState(cartState.filter((item) => item.id !== cartId));
    localStorage.setItem("numCart", 0);
  };

  const disableHandle = useCallback(() => {
    if (numData > 0) {
      let inputValue = document.getElementById("cutNumber").value;
      if (inputValue !== numData) {
        setDisableState(false);
      } else {
        setDisableState(true);
      }
    }
  }, [numData]);

  const updateHandleClick = () => {
    let inputValue = document.getElementById("cutNumber").value;
    localStorage.setItem('numCart', inputValue);
  }

  useEffect(() => {
    let getNumCart = setInterval(() => {
      disableHandle();
    }, 100);
    return () => clearInterval(getNumCart);
  }, [disableHandle]);

  // let tableContent;
  // if (numData && numData > 0) {
  //   tableContent = (
  //     <>
  //       {cartState.map((cartL) => {
  //         return (
  //           <tr key={cartL.id}>
  //             <td>
  //               <Button
  //                 className={`${Classes.CloseButton}`}
  //                 onClick={() => hanleClick(cartL)}
  //               >
  //                 <FontAwesomeIcon icon={faTimes} size="lg" />
  //               </Button>
  //             </td>
  //             <td>
  //               <Img src={cartL.img} alt="product Img" width="80" height="80" />
  //             </td>
  //             <td>{cartL.product}</td>
  //             <td className="secColor">{cartL.price}</td>
  //             <td>
  //               <AddCartForm
  //                 formClassName={`justify-content-center`}
  //                 buttonClassName={`d-none`}
  //                 groupClassName={`w-50`}
  //               />
  //             </td>
  //             <td className="secColor">${numData * 68.0}</td>
  //           </tr>
  //         );
  //       })}
  //     </>
  //   );
  // }

  return (
    <div className="w-100">
      <Table
        striped
        bordered
        hover
        size="sm"
        responsive='lg'
        className={`${Classes.CartTable}`}
      >
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>PRODUCT</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          {cartState.map((cartL) => {
            if (numData > 0) {
              return (
                <tr key={cartL.id}>
                  <td>
                    <Button
                      className={`${Classes.CloseButton}`}
                      onClick={() => hanleClick(cartL)}
                    >
                      <FontAwesomeIcon icon={faTimes} size="lg" />
                    </Button>
                  </td>
                  <td>
                    <Img
                      src={cartL.img}
                      alt="product Img"
                      width="80"
                      height="80"
                    />
                  </td>
                  <td>{cartL.product}</td>
                  <td className="secColor">{cartL.price}</td>
                  <td>
                    <AddCartForm
                      formClassName={`justify-content-center`}
                      buttonClassName={`d-none`}
                      groupClassName={`w-50`}
                    />
                  </td>
                  <td className="secColor">${(numData * 68.0).toFixed(2)}</td>
                </tr>
              );
            } else {
              return false;
            }
          })}
        </tbody>
      </Table>
      <div className={`${Classes.coponUpdate}`}>
        <div className={`${Classes.coponUpdate_copon}`}>
          <CoponForm />
        </div>

        <div className={`${Classes.coponUpdate_update}`}>
          <Button type='submit' className={`btn_blue`} disabled={disbleState} onClick={updateHandleClick}>
            Update Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
