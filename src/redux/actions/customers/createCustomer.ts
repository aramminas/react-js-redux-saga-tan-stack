import {
  CREATE_CUSTOMER_START,
  CREATE_CUSTOMER_SUCCESS,
  CREATE_CUSTOMER_FAILURE,
} from "@/redux/actionTypes";

export const createCustomer = (payload) => ({ type: CREATE_CUSTOMER_START, payload });
export const createCustomerSuccess = (payload) => ({ type: CREATE_CUSTOMER_SUCCESS, payload });
export const createCustomerFailure = (payload) => ({ type: CREATE_CUSTOMER_FAILURE, payload });
