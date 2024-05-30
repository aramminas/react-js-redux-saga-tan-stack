import { put, call } from "redux-saga/effects";
import {
  getFavoriteProductsFailure,
  getFavoriteProductsSuccess,
} from "@/redux/actions/favoriteProducts/getFavoriteProducts";
import getFavoriteProductsRequest from "@/redux/sagas/requests/favoriteProducts/getFavoriteProducts";

export function* getFavoriteProductsHandler() {
  try {
    const response = yield call(getFavoriteProductsRequest);
    yield put(getFavoriteProductsSuccess(response));
  } catch (error) {
    yield put(getFavoriteProductsFailure(error.message));
  }
}
