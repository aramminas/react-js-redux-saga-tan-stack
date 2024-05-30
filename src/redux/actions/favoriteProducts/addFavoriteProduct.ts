import {
  ADD_FAVORITE_PRODUCT_START,
  ADD_FAVORITE_PRODUCT_SUCCESS,
  ADD_FAVORITE_PRODUCT_FAILURE,
} from "@/redux/actionTypes";

export const addFavoriteProduct = (payload) => ({ type: ADD_FAVORITE_PRODUCT_START, payload });

export const addFavoriteProductSuccess = (payload) => ({
  type: ADD_FAVORITE_PRODUCT_SUCCESS,
  payload,
});

export const addFavoriteProductFailure = (payload) => ({
  type: ADD_FAVORITE_PRODUCT_FAILURE,
  payload,
});
