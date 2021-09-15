import * as actions from "./actionTypes";

export const postAddCart = (data) => async (dispatch) => {
  const setCart = (data) => {
    localStorage.setItem("numCart", data.numCart);
    return localStorage;
  };
  dispatch({ type: actions.POST_ADDCART_DATA_START });
  dispatch(
    { type: actions.POST_ADDCART_DATA_SUCCESS, payload: setCart(data) },
    setCart(data)
  );
  //   dispatch({ type: actions.POST_ADDCART_DATA_FAIL });
};

export const getNumCart = (data) => async (dispatch) => {
  dispatch({ type: actions.GET_NUMCART_DATA_START });
  dispatch({
    type: actions.GET_NUMCART_DATA_SUCCESS,
    payload: localStorage.getItem("numCart"),
  });
  // dispatch({ type: actions.GET_NUMCART_DATA_FAIL });
};
