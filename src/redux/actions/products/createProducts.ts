import {
  CREATE_PRODUCTS_START,
  CREATE_PRODUCTS_SUCCESS,
  CREATE_PRODUCTS_FAILURE,
} from "@/redux/actionTypes";

export const createProduct = (payload) => ({ type: CREATE_PRODUCTS_START, payload });
export const createProductsSuccess = (payload) => ({ type: CREATE_PRODUCTS_SUCCESS, payload });
export const createProductsFailure = (payload) => ({ type: CREATE_PRODUCTS_FAILURE, payload });
