import {
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  CREATE_PRODUCTS_START,
  CREATE_PRODUCTS_SUCCESS,
  CREATE_PRODUCTS_FAILURE,
} from "@/redux/actionTypes";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const reducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    // get products
    case GET_PRODUCTS_START:
      return { ...state, loading: true };
    case GET_PRODUCTS_SUCCESS:
      return { ...state, loading: false, data: payload };
    case GET_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: payload };
    //  create product
    case CREATE_PRODUCTS_START:
      return { ...state, loading: true };
    case CREATE_PRODUCTS_SUCCESS:
      const updatedProducts = [...state.data, payload];
      return { ...state, loading: false, data: updatedProducts };
    case CREATE_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export default reducers;
