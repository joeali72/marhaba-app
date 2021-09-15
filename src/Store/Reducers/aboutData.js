import * as actions from "../Actions/actionTypes";

const initState = {
  loading: false,
  error: null, 
  data: null,
};

export const aboutData = (state = initState, action) => {
  switch (action.type) {
    case actions.GET_ABOUT_DATA_START:
      return { ...state, loading: true };
    case actions.GET_ABOUT_DATA_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload };
    case actions.GET_ABOUT_DATA_FAIL:
      return { ...state, loading: false, error: true, data: null };
    default:
      return state;
  }
};
