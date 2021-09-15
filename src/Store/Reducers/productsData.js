import * as actions from "../Actions/actionTypes";

const initState = {
  loading: false,
  error: null,
  data: null,
  imgsData: null,
};

export const productsData = (state = initState, action) => {
  switch (action.type) {
    case actions.GET_PRODUCTS_DATA_START:
      return { ...state, loading: true };
    case actions.GET_PRODUCTS_DATA_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload };
    case actions.GET_PRODUCTS_DATA_FAIL:
      return { ...state, loading: false, error: true, data: null };
    case actions.GET_PRODUCTS_IMGS_DATA_START:
      return { ...state, loading: true };
    case actions.GET_PRODUCTS_IMGS_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        imgsData: action.payload,
      };
    case actions.GET_PRODUCTS_IMGS_DATA_FAIL:
      return { ...state, loading: false, error: true, imgsData: null };
    default:
      return state;
  }
};
