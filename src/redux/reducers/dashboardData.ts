import {
  GET_DASHBOARD_DATA_START,
  GET_DASHBOARD_DATA_SUCCESS,
  GET_DASHBOARD_DATA_FAILURE,
} from "@/redux/actionTypes";

export enum DataKeys {
  USER_PROFILE = "userProfile",
  PRODUCTS = "products",
}

const initialState = {
  data: { userProfile: {}, products: [] },
  loading: false,
  error: null,
};

const reducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    // get user profile
    case GET_DASHBOARD_DATA_START:
      return { ...state, loading: true };
    case GET_DASHBOARD_DATA_SUCCESS:
      return { ...state, loading: false, data: { ...state.data, [payload.key]: payload.value } };
    case GET_DASHBOARD_DATA_FAILURE:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export default reducers;
