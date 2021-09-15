import * as actions from "../Actions/actionTypes";

const initState = {
  loading: false,
  error: null,
  data: null,
  numCart: 0,
};

export const addCart = (state = initState, action) => {
  switch (action.type) {
    case actions.POST_ADDCART_DATA_START:
      return { ...state, loading: true };
    case actions.POST_ADDCART_DATA_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload.numCart };
    case actions.POST_ADDCART_DATA_FAIL:
      return { ...state, loading: false, error: true, data: null };
    case actions.GET_NUMCART_DATA_START:
      return { ...state, loading: true };
    case actions.GET_NUMCART_DATA_SUCCESS:
      return { ...state, loading: false, error: false, numCart: action.payload };
    case actions.GET_NUMCART_DATA_FAIL:
      return { ...state, loading: false, error: true, numCart: null };
    default:
      return state;
  }
};
