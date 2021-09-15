import * as actions from "../Actions/actionTypes";

const initState = {
  loading: false,
  error: null,
  data: null,
  postData: null,
  socialData: null,
};

export const contactData = (state = initState, action) => {
  switch (action.type) {
    case actions.GET_CONTACT_DATA_START:
      return { ...state, loading: true };
    case actions.GET_CONTACT_DATA_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload };
    case actions.GET_CONTACT_DATA_FAIL:
      return { ...state, loading: false, error: true, data: null };
    case actions.POST_CONTACT_DATA_START:
      return { ...state, loading: true };
    case actions.POST_CONTACT_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        postData: action.payload,
      };
    case actions.POST_CONTACT_DATA_FAIL:
      return { ...state, loading: false, error: true, postData: null };
    case actions.GET_SOCIAL_CONTACT_DATA_START:
      return { ...state, loading: true };
    case actions.GET_SOCIAL_CONTACT_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        socialData: action.payload,
      };
    case actions.GET_SOCIAL_CONTACT_DATA_FAIL:
      return { ...state, loading: false, error: true, socialData: null };
    default:
      return state;
  }
};
