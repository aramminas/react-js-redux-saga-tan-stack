import {
  GET_FAVORITE_PRODUCTS_START,
  GET_FAVORITE_PRODUCTS_SUCCESS,
  GET_FAVORITE_PRODUCTS_FAILURE,
} from "@/redux/actionTypes";

export const getFavoriteProducts = () => ({ type: GET_FAVORITE_PRODUCTS_START });

export const getFavoriteProductsSuccess = (payload) => ({
  type: GET_FAVORITE_PRODUCTS_SUCCESS,
  payload,
});

export const getFavoriteProductsFailure = (payload) => ({
  type: GET_FAVORITE_PRODUCTS_FAILURE,
  payload,
});
