import { put, call } from "redux-saga/effects";
import {
  deleteCustomerFailure,
  deleteCustomerSuccess,
} from "@/redux/actions/customers/deleteCustomer";
import deleteCustomerRequest from "@/redux/sagas/requests/customers/deleteCustomer";

export function* deleteCustomerHandler(action) {
  try {
    const response = yield call(deleteCustomerRequest, action.payload);

    yield put(deleteCustomerSuccess(response.id));
  } catch (error) {
    yield put(deleteCustomerFailure(error.message));
  }
}
