import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  coupon: yup
    .string()
    .required("coupon Code is Required")
    .min(4, "Too Short!")
    .max(50, "Too Long!")
    .matches(/^[A-Za-z- -1]+$/i),
});

export default function CoponForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className={`d-flex align-items-center ${props.fromClassName}`}
      >
        <Form.Group className={`mb-0 ${props.groupClassName}`} controlId="fallName">
          <Form.Control
            type="text"
            placeholder="Coupon Code"
            {...register("coupon")}
          />
          <Form.Control.Feedback
            type="invalid"
            className={errors.coupon ? "d-block" : "d-none"}
          >
            {errors.coupon?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" className={`btn_blue ms-3`}>
          Apply Coupon
        </Button>
      </Form>
    </>
  );
}
