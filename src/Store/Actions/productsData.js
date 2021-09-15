import * as actions from "./actionTypes";
import axios from "../../axios-base";

export const getProductsData = (data) => async (dispatch) => {
  dispatch({ type: actions.GET_PRODUCTS_DATA_START });

  const url = "/products";

  await axios
    .get(url)
    .then((res) => {
      dispatch({
        type: actions.GET_PRODUCTS_DATA_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      dispatch({ type: actions.GET_PRODUCTS_DATA_FAIL, payload: err.message });
    });
};

export const getProductsImgsData = (data) => async (dispatch) => {
  dispatch({ type: actions.GET_PRODUCTS_IMGS_DATA_START });

  const url = "/shop/1";

  await axios
    .get(url)
    .then((res) => {
      dispatch({
        type: actions.GET_PRODUCTS_IMGS_DATA_SUCCESS,
        payload: res.data.data.imgs,
      });
    })
    .catch((err) => {
      dispatch({ type: actions.GET_PRODUCTS_IMGS_DATA_FAIL, payload: err.message });
    });
};


