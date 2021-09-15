import * as actions from "../Actions/actionTypes";

const initState = {
  loading: false,
  error: null,
  data: null,
};

export const reviewData = (state = initState, action) => {
  switch (action.type) {
    case actions.POST_REVIEW_DATA_START:
      return { ...state, loading: true };
    case actions.POST_REVIEW_DATA_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload };
    case actions.POST_REVIEW_DATA_FAIL:
      return { ...state, loading: false, error: true, data: null };
    default:
      return state;
  }
};
