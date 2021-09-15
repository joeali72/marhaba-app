import {
  Col,
  Container,
  Form,
  Row,
  Table,
  Button,
  Alert,
} from "react-bootstrap";
import { useState, useEffect, useCallback } from "react";
import Classes from "./checkout.module.scss";
import { useForm } from "react-hook-form";
import Text from "../../../Components/Util/Text";

import { Typeahead } from "react-bootstrap-typeahead"; // ES2015
import "react-bootstrap-typeahead/css/Typeahead.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

import { useSelector, useDispatch } from "react-redux";
import { postCheckoutData } from "../../../Store/Actions";

import axios from "../../../axios-base.js";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CoponForm from "../../../Components/Util/CoponForm";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("Name is Required")
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .matches(/^[A-Za-z- ]+$/i),
  lastName: yup
    .string()
    .required("Name is Required")
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .matches(/^[A-Za-z- ]+$/i),
  companyName: yup.string(),
  country: yup.string().required("Country is Required"),
  state: yup.string().required("State is Required"),
  street: yup.string().required("Street is Required").min(8, "Too short"),
  unit: yup.string().required("Street is Required").min(8, "Too short"),
  town: yup.string().required("City is Required"),
  zip: yup.string().required("post code is Required"),
  phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
  email: yup.string().required("Email is Required").email("Invalid email"),
  notes: yup.string().required("Message is Required").min(10, "Too Short!"),
});

export default function CheckoutContainer(props) {
  const [selected, setSelected] = useState();
  const [selected2, setSelected2] = useState();
  const [state, setState] = useState([]);
  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState([]);
  const [showCoupon, setShowCoupon] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const numData = useSelector((state) => state.addCart.numCart);
  const dispatch = useDispatch();

  const getCountries = useCallback(() => {
    axios
      .get("/countries")
      .then((res) => {
        res.data.data.map((item) => {
          setCountryName((countryName) => [...countryName, item.name]);
          return countryName;
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const getState = (state) => {
    axios
      .get("/countries")
      .then((res) => {
        res.data.data.map((item) => {
          if (selected === item.name) {
            item.state.map((it) => {
              setState((state) => [...state, it.name]);
              // console.log(state);
              return state;
            });
          }
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setCountryName([]);
      getCountries();
    }, 1000);
    setTimeout(() => {
      setValue("country", selected);
      setValue("state", selected2);
    });
    let intervalTime = setInterval(() => {
      setState([]);
      getState(state);
    }, 1000);
    // watch('country' )
    return () => {
      clearTimeout(timeOut);
      clearInterval(intervalTime);
    };
  }, [getState, setValue, selected, selected2]);

  const onSubmit = (data) => {
    console.log(data);
    dispatch(postCheckoutData(data));
  };

  let selectCountry;
  if (countryName) {
    selectCountry = (
      <>
        <div className="form-group mb-3">
          <Form.Label className={`${Classes.CheckoutBilling_label}`}>
            Country / Region <sup style={{ color: "red" }}>*</sup>
          </Form.Label>
          <Typeahead
            onChange={(selected) => {
              setSelected(selected[0]);
            }}
            placeholder="Select Your Country"
            id="country"
            options={countryName}
            className={`${Classes.selectBox}`}
          />
          <Form.Control
            className={`fg ${Classes.Form_input}`}
            type="hidden"
            defaultValue={selected}
            {...register("country")}
          />
          <Form.Control.Feedback
            type="invalid"
            className={errors.country ? "d-block" : "d-none"}
          >
            {errors.country?.message}
          </Form.Control.Feedback>
        </div>
      </>
    );
  }

  let statyCounty;
  if (state) {
    statyCounty = (
      <>
        <div className="form-group mb-3">
          <Form.Label className={`${Classes.CheckoutBilling_label}`}>
            State / County <sup style={{ color: "red" }}>*</sup>
          </Form.Label>
          <Typeahead
            onChange={(selected2) => {
              setSelected2(selected2[0].toString());
            }}
            placeholder="Select an option"
            id="state"
            options={state}
            className={`${Classes.selectBox}`}
          />
          <Form.Control
            className={`fg ${Classes.Form_input}`}
            type="hidden"
            defaultValue={selected2}
            {...register("state")}
          />
          <Form.Control.Feedback
            type="invalid"
            className={errors.state ? "d-block" : "d-none"}
          >
            {errors.state?.message}
          </Form.Control.Feedback>
        </div>
      </>
    );
  }

  return (
    <Container>
      <div className={`${Classes.haveCoupon}`}>
        <Text className="mb-0 graycolor">
          <FontAwesomeIcon icon={faInfo} className="me-2" />
          <span>HAVE A COUPON? </span>
          <a
            href="#coupon"
            className="mb-0 mainColor"
            onClick={(e) => {
              e.preventDefault();
              setShowCoupon(!showCoupon);
            }}
          >
            CLICK HERE TO ENTER YOUR CODE
          </a>
        </Text>
      </div>

      <Alert show={showCoupon} variant="white">
        <Row className={`justify-content-center mb-5 `}>
          <Col lg={8} md={9}>
            <div className={`${Classes.couponForm} `}>
              <CoponForm
                fromClassName={`justify-content-center`}
                groupClassName={`w-75`}
              />
            </div>
          </Col>
        </Row>
      </Alert>

      <Form
        className={`${Classes.CheckoutForm}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Row>
          <Col lg={6}>
            <div className={`${Classes.CheckoutBilling}`}>
              <h5 className={`${Classes.CheckoutBilling_title} mb-4`}>
                BILLING DETAILS
              </h5>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="firstName">
                    <Form.Label className={`${Classes.CheckoutBilling_label}`}>
                      First name <sup style={{ color: "red" }}>*</sup>
                    </Form.Label>
                    <Form.Control
                      className={`fg ${Classes.Form_input}`}
                      type="text"
                      {...register("firstName")}
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      className={errors.firstName ? "d-block" : "d-none"}
                    >
                      {errors.firstName?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label className={`${Classes.CheckoutBilling_label}`}>
                      Last name <sup style={{ color: "red" }}>*</sup>
                    </Form.Label>
                    <Form.Control
                      className={`fg ${Classes.Form_input}`}
                      type="text"
                      {...register("lastName")}
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      className={errors.lastName ? "d-block" : "d-none"}
                    >
                      {errors.lastName?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="companyName">
                <Form.Label className={`${Classes.CheckoutBilling_label}`}>
                  Company name (optional)
                </Form.Label>
                <Form.Control
                  className={`fg ${Classes.Form_input}`}
                  type="text"
                  {...register("companyName")}
                />
                <Form.Control.Feedback
                  type="invalid"
                  className={errors.companyName ? "d-block" : "d-none"}
                >
                  {errors.companyName?.message}
                </Form.Control.Feedback>
              </Form.Group>

              {selectCountry}

              <Form.Group className="mb-3" controlId="street">
                <Form.Label className={`${Classes.CheckoutBilling_label}`}>
                  Street address <sup style={{ color: "red" }}>*</sup>
                </Form.Label>
                <Form.Control
                  className={`fg ${Classes.Form_input}`}
                  type="text"
                  {...register("street")}
                  placeholder="House Number and street name"
                />
                <Form.Control.Feedback
                  type="invalid"
                  className={errors.street ? "d-block" : "d-none"}
                >
                  {errors.street?.message}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="unit">
                <Form.Control
                  className={`fg ${Classes.Form_input}`}
                  type="text"
                  {...register("unit")}
                  placeholder="Apartmen, suite, unit, etc. (optional)"
                />
                <Form.Control.Feedback
                  type="invalid"
                  className={errors.unit ? "d-block" : "d-none"}
                >
                  {errors.unit?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="town">
                <Form.Label className={`${Classes.CheckoutBilling_label}`}>
                  Twon / City <sup style={{ color: "red" }}>*</sup>
                </Form.Label>
                <Form.Control
                  className={`fg ${Classes.Form_input}`}
                  type="text"
                  {...register("town")}
                />
                <Form.Control.Feedback
                  type="invalid"
                  className={errors.town ? "d-block" : "d-none"}
                >
                  {errors.town?.message}
                </Form.Control.Feedback>
              </Form.Group>

              {statyCounty}

              <Form.Group className="mb-3" controlId="zip">
                <Form.Label className={`${Classes.CheckoutBilling_label}`}>
                  Postcode / ZIP <sup style={{ color: "red" }}>*</sup>
                </Form.Label>
                <Form.Control
                  className={`fg ${Classes.Form_input}`}
                  type="text"
                  {...register("zip")}
                />
                <Form.Control.Feedback
                  type="invalid"
                  className={errors.zip ? "d-block" : "d-none"}
                >
                  {errors.zip?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="phone">
                <Form.Label className={`${Classes.CheckoutBilling_label}`}>
                  Phone <sup style={{ color: "red" }}>*</sup>
                </Form.Label>
                <Form.Control
                  className={`fg ${Classes.Form_input}`}
                  type="tel"
                  {...register("phone")}
                />
                <Form.Control.Feedback
                  type="invalid"
                  className={errors.phone ? "d-block" : "d-none"}
                >
                  {errors.phone?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label className={`${Classes.CheckoutBilling_label}`}>
                  Email address <sup style={{ color: "red" }}>*</sup>
                </Form.Label>
                <Form.Control
                  className={`fg ${Classes.Form_input}`}
                  type="email"
                  {...register("email")}
                />
                <Form.Control.Feedback
                  type="invalid"
                  className={errors.email ? "d-block" : "d-none"}
                >
                  {errors.email?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <h5 className={`${Classes.CheckoutBilling_title} mb-4`}>
                ADDITIONAL INFORMATION
              </h5>

              <Form.Group className="mb-3" controlId="notes">
                <Form.Label className={`${Classes.CheckoutBilling_label}`}>
                  Order notes (optional)
                </Form.Label>
                <Form.Control
                  className={`fg ${Classes.Form_input}`}
                  as="textarea"
                  rows={4}
                  placeholder="Notes about your order e.g.special notes for delivary."
                  {...register("notes")}
                />
                <Form.Control.Feedback
                  type="invalid"
                  className={errors.notes ? "d-block" : "d-none"}
                >
                  {errors.notes?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
          </Col>

          <Col lg={6}>
            <div className={`${Classes.Order}`}>
              <h5 className={`${Classes.CheckoutBilling_title} mb-4`}>
                YOUR ORDER
              </h5>

              <Table
                striped
                bordered
                hover
                responsive="lg"
                className={`${Classes.TotalTable} mb-4`}
              >
                <thead>
                  <tr>
                    <th colSpan="1" align="left" className="text-uppercase">
                      Product
                    </th>
                    <th colSpan="1" align="right" className="text-uppercase">
                      Subtotal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="1" className=" bgColor2 offBgColor">
                      EBC Hair Cutting Kit × {numData}
                    </td>
                    <td colSpan="1" className="secColor offBgColor">
                      ${(numData * 68.0).toFixed(2)}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" className="bgColor2 grayBgColor">
                      Subtotal
                    </td>
                    <td colSpan="1" className="secColor">
                      ${(numData * 68.0).toFixed(2)}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" className="fw-bold bgColor2 grayBgColor">
                      Total
                    </td>
                    <td colSpan="1" className="secColor fw-bold">
                      ${(numData * 68.0).toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </Table>

              <Text className={`${Classes.InfoMessage}`}>
                <FontAwesomeIcon icon={faInfo} className={`me-2`} />
                <span>
                  SORRY, IT SEEMS THAT THERE ARE NO AVAILABLE PAYMENT METHODS
                  FOR YOUR STATE. PLEASE CONTACT US IF YOU REQUIRE ASSISTANCE OR
                  WISH TO MAKE ALTERNATE ARRANGEMENTS.
                </span>
              </Text>

              <Text className={`}`}>
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our privacy policy.
              </Text>

              <Button
                type="submit"
                className={`btn_blue w-100 text-uppercase py-3`}
              >
                Place Order
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
