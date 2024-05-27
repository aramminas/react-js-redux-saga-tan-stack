import { put, call } from "redux-saga/effects";
import { getCustomersSuccess, getCustomersFailure } from "@/redux/actions/customers/getCustomers";
import getCustomersRequest from "@/redux/sagas/requests/customers/getCustomers";

export function* getCustomersHandler() {
  try {
    const response = yield call(getCustomersRequest);
    yield put(getCustomersSuccess(response));
  } catch (error) {
    yield put(getCustomersFailure(error.message));
  }
}
