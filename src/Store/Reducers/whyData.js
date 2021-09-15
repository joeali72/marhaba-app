import * as actions from "../Actions/actionTypes";

const initState = {
  loading: false,
  error: null,
  data: null,
  sliderData: null,
};

export const whyData = (state = initState, action) => {
  switch (action.type) {
    case actions.GET_WHY_DATA_START:
      return { ...state, loading: true };
    case actions.GET_WHY_DATA_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload };
    case actions.GET_WHY_DATA_FAIL:
      return { ...state, loading: false, error: true, data: null };
    case actions.GET_WHY_SLIDER_DATA_START:
      return { ...state, loading: true };
    case actions.GET_WHY_SLIDER_DATA_SUCCESS:
      return { ...state, loading: false, error: false, sliderData: action.payload };
    case actions.GET_WHY_SLIDER_DATA_FAIL:
      return { ...state, loading: false, error: true, data: null };
    default:
      return state;
  }
};
