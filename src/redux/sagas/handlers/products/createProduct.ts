import { put, call } from "redux-saga/effects";
import {
  createProductsFailure,
  createProductsSuccess,
} from "@/redux/actions/products/createProducts";
import createProductRequest from "@/redux/sagas/requests/products/createProduct";

export function* createProductHandler(action) {
  try {
    const response = yield call(createProductRequest, action.payload);

    yield put(createProductsSuccess(response));
  } catch (error) {
    yield put(createProductsFailure(error.message));
  }
}
