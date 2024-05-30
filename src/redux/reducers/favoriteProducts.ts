import {
  GET_FAVORITE_PRODUCTS_START,
  GET_FAVORITE_PRODUCTS_SUCCESS,
  GET_FAVORITE_PRODUCTS_FAILURE,
  ADD_FAVORITE_PRODUCT_START,
  ADD_FAVORITE_PRODUCT_SUCCESS,
  ADD_FAVORITE_PRODUCT_FAILURE,
  DELETE_FAVORITE_PRODUCT_START,
  DELETE_FAVORITE_PRODUCT_SUCCESS,
  DELETE_FAVORITE_PRODUCT_FAILURE,
} from "@/redux/actionTypes";

const initialState = {
  data: [],
  ids: [],
  loading: false,
  error: null,
};

const reducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    // get favorite products
    case GET_FAVORITE_PRODUCTS_START:
      return { ...state, loading: true };
    case GET_FAVORITE_PRODUCTS_SUCCESS:
      const ids = payload.map((product) => product._id);
      return { ...state, loading: false, data: payload, ids };
    case GET_FAVORITE_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: payload };
    // add favorite products
    case ADD_FAVORITE_PRODUCT_START:
      return { ...state, loading: true };
    case ADD_FAVORITE_PRODUCT_SUCCESS:
      const addIds = [...state.ids, payload._id];
      const updatedFavoritesProducts = [...state.data, payload];
      return { ...state, loading: false, data: updatedFavoritesProducts, ids: addIds };
    case ADD_FAVORITE_PRODUCT_FAILURE:
      return { ...state, loading: false, error: payload };
    // delete favorite products
    case DELETE_FAVORITE_PRODUCT_START:
      return { ...state, loading: true };
    case DELETE_FAVORITE_PRODUCT_SUCCESS:
      const restIds = state.ids.filter((id) => id !== payload._id);
      const restFavoritesProducts = state.data.filter((product) => product._id !== payload._id);
      return { ...state, loading: false, data: restFavoritesProducts, ids: restIds };
    case DELETE_FAVORITE_PRODUCT_FAILURE:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export default reducers;
