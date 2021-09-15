import * as actions from "./actionTypes";
import axios from "../../axios-base";

export const getBannerData = (data) => async (dispatch) => {
  dispatch({ type: actions.GET_BANNER_DATA_START });

  const url = "/main";

  await axios
    .get(url)
    .then((res) => {
      dispatch({
        type: actions.GET_BANNER_DATA_SUCCESS,
        payload: res.data.data[0],
      });
    })
    .catch((err) => {
      dispatch({ type: actions.GET_BANNER_DATA_FAIL, payload: err.message });
    });
};
