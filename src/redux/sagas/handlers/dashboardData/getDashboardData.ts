import { put, call, fork, all } from "redux-saga/effects";

import { DataKeys } from "@/redux/reducers/dashboardData";
import {
  getDashboardDataFailure,
  getDashboardDataSuccess,
} from "@/redux/actions/dashboardData/getDashboardData";
import getUserProfileRequest from "@/redux/sagas/requests/dashboardData/getUserProfile";
import getMainProductsRequest from "@/redux/sagas/requests/dashboardData/getMainProducts";

export function* getUserProfileHandler() {
  try {
    const response = yield call(getUserProfileRequest);
    yield put(getDashboardDataSuccess({ key: DataKeys.USER_PROFILE, value: response || {} }));
  } catch (error) {
    yield put(getDashboardDataFailure(error.message));
  }
}

export function* getMainProductsHandler() {
  try {
    const response = yield call(getMainProductsRequest);
    yield put(getDashboardDataSuccess({ key: DataKeys.PRODUCTS, value: response?.products || [] }));
  } catch (error) {
    yield put(getDashboardDataFailure(error.message));
  }
}

export function* getDashboardHandler() {
  try {
    yield all([fork(getUserProfileHandler), fork(getMainProductsHandler)]);
  } catch (error) {
    yield put(getDashboardDataFailure(error.message));
  }
}
