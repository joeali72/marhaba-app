import * as actions from "./actionTypes";
import axios from "../../axios-base";

export const postCheckoutData = (data) => async (dispatch) => {
    dispatch({ type: actions.POST_CHECKOUT_DATA_START });
  
    const url = "/checkout";
  
    await axios
      .post(url, data)
      .then((res) => {
          console.log(res.data)
        dispatch({
          type: actions.POST_CHECKOUT_DATA_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({ type: actions.POST_CHECKOUT_DATA_FAIL, payload: err.message });
      });
  };
