import { put, call } from "redux-saga/effects";
import {
  createCustomerFailure,
  createCustomerSuccess,
} from "@/redux/actions/customers/createCustomer";
import createCustomerRequest from "@/redux/sagas/requests/customers/createCustomer";

export function* createCustomerHandler(action) {
  try {
    const response = yield call(createCustomerRequest, action.payload);

    yield put(createCustomerSuccess(response));
  } catch (error) {
    yield put(createCustomerFailure(error.message));
  }
}
