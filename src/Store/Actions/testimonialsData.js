import * as actions from "./actionTypes";
import axios from "../../axios-base";

export const getTestiData = (data) => async (dispatch) => {
  dispatch({ type: actions.GET_TESTIMONIALS_DATA_START });

  const url = "/testimonial";

  await axios
    .get(url)
    .then((res) => {
      dispatch({
        type: actions.GET_TESTIMONIALS_DATA_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      dispatch({ type: actions.GET_TESTIMONIALS_DATA_FAIL, payload: err.message });
    });
};


