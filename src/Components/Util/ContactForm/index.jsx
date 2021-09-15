import { useDispatch } from "react-redux";
import { postContactData } from "../../../Store/Actions";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import Classes from "./contactForm.module.scss";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  fullname: yup
    .string()
    .required("Name is Required")
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .matches(/^[A-Za-z- ]+$/i),
  email: yup.string().required("Email is Required").email("Invalid email"),
  message: yup.string().required("Message is Required").min(10, "Too Short!"),
});

export default function ContactForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(postContactData(data));
  };

  return (
    <Form className={`${Classes.Form}`} onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="fallName">
        <Form.Control
          className={`fg ${Classes.Form_input}`}
          type="text"
          placeholder="Your Name"
          {...register("fullname")}
        />
        <Form.Control.Feedback
          type="invalid"
          className={errors.fullname ? "d-block" : "d-none"}
        >
          {errors.fullname?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Control
          className={`fg ${Classes.Form_input}`}
          type="email"
          placeholder="Email"
          {...register("email")}
        />
        <Form.Control.Feedback
          type="invalid"
          className={errors.email ? "d-block" : "d-none"}
        >
          {errors.email?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="message">
        <Form.Control
          className={`fg ${Classes.Form_input}`}
          as="textarea"
          rows={4}
          placeholder="Type Ypur Message Here"
          {...register("message")}
        />
        <Form.Control.Feedback
          type="invalid"
          className={errors.message ? "d-block" : "d-none"}
        >
          {errors.message?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Button
        className={`mainBgColor w-100 d-block text-center fs-5 ${Classes.Form_button}`}
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
}
