import {
  GET_CUSTOMERS_START,
  GET_CUSTOMERS_SUCCESS,
  GET_CUSTOMERS_FAILURE,
} from "@/redux/actionTypes";

export const getCustomers = () => ({ type: GET_CUSTOMERS_START });
export const getCustomersSuccess = (payload) => ({ type: GET_CUSTOMERS_SUCCESS, payload });
export const getCustomersFailure = (payload) => ({ type: GET_CUSTOMERS_FAILURE, payload });
