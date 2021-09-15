import * as actions from "./actionTypes";
import axios from "../../axios-base";

export const getAboutData = (data) => async (dispatch) => {
  dispatch({ type: actions.GET_ABOUT_DATA_START });

  const url = "/about";

  await axios
    .get(url)
    .then((res) => {
      dispatch({
        type: actions.GET_ABOUT_DATA_SUCCESS,
        payload: res.data.data[0],
      });
    })
    .catch((err) => {
      dispatch({ type: actions.GET_ABOUT_DATA_FAIL, payload: err.message });
    });
};


