import {
  EDIT_CUSTOMERS_START,
  EDIT_CUSTOMERS_SUCCESS,
  EDIT_CUSTOMERS_FAILURE,
} from "@/redux/actionTypes";

export const editCustomer = (payload) => ({ type: EDIT_CUSTOMERS_START, payload });
export const editCustomerSuccess = (payload) => ({ type: EDIT_CUSTOMERS_SUCCESS, payload });
export const editCustomerFailure = (payload) => ({ type: EDIT_CUSTOMERS_FAILURE, payload });
