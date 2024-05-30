import {
  DELETE_FAVORITE_PRODUCT_START,
  DELETE_FAVORITE_PRODUCT_SUCCESS,
  DELETE_FAVORITE_PRODUCT_FAILURE,
} from "@/redux/actionTypes";

export const deleteFavoriteProduct = (payload) => ({
  type: DELETE_FAVORITE_PRODUCT_START,
  payload,
});

export const deleteFavoriteProductSuccess = (payload) => ({
  type: DELETE_FAVORITE_PRODUCT_SUCCESS,
  payload,
});

export const deleteFavoriteProductFailure = (payload) => ({
  type: DELETE_FAVORITE_PRODUCT_FAILURE,
  payload,
});
