import * as actions from "../Actions/actionTypes";

const initState = {
  loading: false,
  error: null,
  data: null,
  postData: null,
};

export const checkoutData = (state = initState, action) => {
  switch (action.type) {
      case actions.POST_CHECKOUT_DATA_START:
      return { ...state, loading: true };
    case actions.POST_CHECKOUT_DATA_SUCCESS:
      return { ...state, loading: false, error: false, postData: action.payload };
    case actions.POST_CHECKOUT_DATA_FAIL:
      return { ...state, loading: false, error: true, postData: null };
    default:
      return state;
  }
};
