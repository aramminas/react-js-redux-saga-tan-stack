import { put, call } from "redux-saga/effects";
import { editCustomerFailure, editCustomerSuccess } from "@/redux/actions/customers/editCustomer";
import editCustomerRequest from "@/redux/sagas/requests/customers/editCustomer";

export function* editCustomerHandler(action) {
  try {
    const response = yield call(editCustomerRequest, action.payload);

    yield put(editCustomerSuccess(response));
  } catch (error) {
    yield put(editCustomerFailure(error.message));
  }
}
