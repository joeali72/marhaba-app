import * as actions from "./actionTypes";
import axios from "../../axios-base";

export const postReviewData = (data) => async (dispatch) => {
  const saveData = (data) => {
    if (data.save === true) {
      localStorage.setItem("token", data.fullname + "@" + 19091996 + "JDea");
      localStorage.setItem("name", data.fullname);
      localStorage.setItem("email", data.email);
    }
  };

  dispatch({ type: actions.POST_REVIEW_DATA_START });

  const url = "/review";

  await axios
    .post(url, data)
    .then((res) => {
      dispatch({
        type: actions.POST_REVIEW_DATA_SUCCESS,
        payload: res.data,
      });
    })
    .then((dt) => {
      saveData(data);
    })
    .catch((err) => {
      dispatch({ type: actions.POST_REVIEW_DATA_FAIL, payload: err.message });
    });
};
