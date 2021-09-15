import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postReviewData } from "../../../../../Store/Actions";
import { Rating, RatingView } from "react-simple-star-rating";
import { Col, Form, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

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
  review: yup.string().required("Message is Required").min(10, "Too Short!"),
  rating: yup.number().required().min(1),
  save: yup.boolean(),
});

export default function RatingForm(props) {
  const [rating, setRating] = useState(0);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const handleRating = (rate) => {
    setRating(rate);
    // Some logic
  };

  const onSubmit = (data) => {
    dispatch(postReviewData(data));
  };

  useEffect(() => {
    setTimeout(() => setValue("rating", rating));
  }, [setValue, rating]);

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="rating mb-2">
          <label className="d-block mb-2">
            Your rating <sup style={{ color: "red" }}>*</sup>
          </label>
          <Rating
            onClick={handleRating}
            ratingValue={rating} /* Rating Props */
            // {...register("rating")}
          />
          <Form.Control.Feedback
            type="invalid"
            className={errors.rating ? "d-block" : "d-none"}
          >
            {errors.rating?.message}
          </Form.Control.Feedback>
        </div>

        <Form.Group className="mb-3" controlId="ratingIn">
          <Form.Control
            type="hidden"
            {...register("rating")}
            defaultValue={rating}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="review">
          <Form.Label>
            Your review <sup style={{ color: "red" }}>*</sup>
          </Form.Label>
          <Form.Control as="textarea" rows={3} {...register("review")} />
          <Form.Control.Feedback
            type="invalid"
            className={errors.review ? "d-block" : "d-none"}
          >
            {errors.review?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                Name <sup style={{ color: "red" }}>*</sup>
              </Form.Label>
              <Form.Control type="text" {...register("fullname")} />
            </Form.Group>
            <Form.Control.Feedback
              type="invalid"
              className={errors.fullname ? "d-block" : "d-none"}
            >
              {errors.fullname?.message}
            </Form.Control.Feedback>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                Email <sup style={{ color: "red" }}>*</sup>
              </Form.Label>
              <Form.Control type="email" {...register("email")} />
            </Form.Group>
            <Form.Control.Feedback
              type="invalid"
              className={errors.email ? "d-block" : "d-none"}
            >
              {errors.email?.message}
            </Form.Control.Feedback>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Save my name, email, and website in this browser for the next time I comment."
            {...register("save")}
          />
          <Form.Control.Feedback
            type="invalid"
            className={errors.save ? "d-block" : "d-none"}
          >
            {errors.save?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <div className="text-end">
          <Button type="submit" className="btn_blue">Submit</Button>
        </div>
      </Form>
    </>
  );
}
