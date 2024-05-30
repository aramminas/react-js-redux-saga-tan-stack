import { put, call } from "redux-saga/effects";
import {
  deleteFavoriteProductFailure,
  deleteFavoriteProductSuccess,
} from "@/redux/actions/favoriteProducts/deleteFavoriteProduct";
import getFavouriteProductRequest from "@/redux/sagas/requests/favoriteProducts/getFavoriteProduct";
import deleteFavoriteProductRequest from "@/redux/sagas/requests/favoriteProducts/deleteFavoriteProduct";

export function* deleteFavoriteProductHandler(action) {
  try {
    const product = yield call(getFavouriteProductRequest, `/?_id=${action.payload}`);
    const id = product[0]?.id || "";
    const response = yield call(deleteFavoriteProductRequest, id);
    yield put(deleteFavoriteProductSuccess(response));
  } catch (error) {
    yield put(deleteFavoriteProductFailure(error.message));
  }
}
