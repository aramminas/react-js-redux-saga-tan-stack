import { put, call } from "redux-saga/effects";
import {
  addFavoriteProductSuccess,
  addFavoriteProductFailure,
} from "@/redux/actions/favoriteProducts/addFavoriteProduct";
import addFavouriteProductRequest from "@/redux/sagas/requests/favoriteProducts/addFavpriteProduct";

export function* addFavoriteProductHandler(action) {
  try {
    const response = yield call(addFavouriteProductRequest, action.payload);
    yield put(addFavoriteProductSuccess(response));
  } catch (error) {
    yield put(addFavoriteProductFailure(error.message));
  }
}
