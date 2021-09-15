import * as actions from "./actionTypes";
import axios from "../../axios-base";

export const getWhyData = (data) => async (dispatch) => {
  dispatch({ type: actions.GET_WHY_DATA_START });

  const url = "/whyus";

  await axios
    .get(url)
    .then((res) => {
      dispatch({
        type: actions.GET_WHY_DATA_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: actions.GET_WHY_DATA_FAIL, payload: err.message });
    });
};

export const getWhySliderData = (data) => async (dispatch) => {
  dispatch({ type: actions.GET_WHY_SLIDER_DATA_START });

  const url = "/slider";

  await axios
    .get(url)
    .then((res) => {
      dispatch({
        type: actions.GET_WHY_SLIDER_DATA_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      dispatch({ type: actions.GET_WHY_SLIDER_DATA_FAIL, payload: err.message });
    });
};
