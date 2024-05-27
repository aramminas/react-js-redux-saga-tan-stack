import {
  DELETE_CUSTOMERS_START,
  DELETE_CUSTOMERS_SUCCESS,
  DELETE_CUSTOMERS_FAILURE,
} from "@/redux/actionTypes";

export const deleteCustomer = (payload) => ({ type: DELETE_CUSTOMERS_START, payload });
export const deleteCustomerSuccess = (payload) => ({ type: DELETE_CUSTOMERS_SUCCESS, payload });
export const deleteCustomerFailure = (payload) => ({ type: DELETE_CUSTOMERS_FAILURE, payload });
