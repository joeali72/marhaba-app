import * as actions from "./actionTypes";
import axios from "../../axios-base";

export const getContactData = (data) => async (dispatch) => {
  dispatch({ type: actions.GET_CONTACT_DATA_START });

  const url = "/contact";

  await axios
    .get(url)
    .then((res) => {
      dispatch({
        type: actions.GET_CONTACT_DATA_SUCCESS,
        payload: res.data.data[0][0],
      });
    })
    .catch((err) => {
      dispatch({ type: actions.GET_CONTACT_DATA_FAIL, payload: err.message });
    });
};

export const getsocialContactData = (data) => async (dispatch) => {
  dispatch({ type: actions.GET_SOCIAL_CONTACT_DATA_START });

  const url = "/contact";

  await axios
    .get(url)
    .then((res) => {
      dispatch({
        type: actions.GET_SOCIAL_CONTACT_DATA_SUCCESS,
        payload: res.data.data[0][1],
      });
    })
    .catch((err) => {
      dispatch({ type: actions.GET_SOCIAL_CONTACT_DATA_FAIL, payload: err.message });
    });
};

export const postContactData = (data) => async (dispatch) => {
    dispatch({ type: actions.POST_CONTACT_DATA_START });
  
    const url = "/contactus";
  
    await axios
      .post(url, data)
      .then((res) => {
          console.log(res.data)
        dispatch({
          type: actions.POST_CONTACT_DATA_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({ type: actions.POST_CONTACT_DATA_FAIL, payload: err.message });
      });
  };


