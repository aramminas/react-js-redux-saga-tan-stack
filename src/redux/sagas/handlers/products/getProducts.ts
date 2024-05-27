import { put, call } from "redux-saga/effects";
import { getProductsFailure, getProductsSuccess } from "@/redux/actions/products/getProducts";
import getProductsRequest from "@/redux/sagas/requests/products/getProducts";

export function* getProductsHandler() {
  try {
    const response = yield call(getProductsRequest);
    yield put(getProductsSuccess(response));
  } catch (error) {
    yield put(getProductsFailure(error.message));
  }
}
