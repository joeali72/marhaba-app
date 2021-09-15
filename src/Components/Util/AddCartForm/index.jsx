import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAddCart } from "../../../Store/Actions";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

import Classes from "./add.module.scss";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const schema = yup.object().shape({
  numCart: yup
    .number()
    .min(0, "Minmum Should be big than 0")
    .max(100, "Minmum Should be small than 100")
    .moreThan(0)
    .positive(),
});

export default function AddCartForm(props) {
  const [cartValue, setCartValue] = useState();
  const {
    register,
    handleSubmit,
    unregister,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(schema),
  });
  let cartNum = useSelector((state) => state.addCart.numCart);
  const dispatch = useDispatch();
  const [numValue, setNumValue] = useState(0);

  // let location = useLocation();

  const addClick = () => {
    setNumValue(numValue + 1);
    unregister("numCart");
    register("numCart");
  };
  const minusClick = () => {
    if (numValue === 0) {
      setNumValue(numValue);
    } else {
      setNumValue(numValue - 1);
      unregister("numCart");
      register("numCart");
    }
  };
  const handleChange = (e) => {
    let t = Number(e.currentTarget.value);
    setNumValue(t);
    unregister("numCart");
    register("numCart");
  };

  const onSubmit = (data) => {
    unregister("numCart");
    register("numCart");
    dispatch(postAddCart(data));
    // window.location.reload();
  };

  useEffect(() => {
    let cct = setTimeout(() => {
      setNumValue(Number(cartNum));
    });
    return () => clearTimeout(cct)
  }, [cartNum]);

  return (
    <>
      <Form
        className={`${Classes.AddForm} ${props.formClassName}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Form.Group
          className={`${Classes.AddForm_group} ${props.groupClassName}`}
          controlId="cutNumber"
        >
          <span
            className={`${Classes.AddForm_group_button}`}
            onClick={minusClick}
          >
            -
          </span>
          <Form.Control
            value={numValue}
            {...register("numCart")}
            className={`${Classes.AddForm_group_input}`}
            onChange={handleChange}
          />
          <span
            className={`${Classes.AddForm_group_button}`}
            onClick={addClick}
          >
            +
          </span>
          <Form.Control.Feedback
            type="invalid"
            className={errors.numCart ? "d-block" : "d-none"}
          >
            {errors.numCart?.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          className={`${Classes.AddForm_submit} ${props.buttonClassName}`}
          type="submit"
        >
          Add To Cart
        </Button>
      </Form>
    </>
  );
}
