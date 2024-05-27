import { takeLatest, all, fork } from "redux-saga/effects";

import {
  GET_CUSTOMERS_START,
  CREATE_CUSTOMER_START,
  EDIT_CUSTOMERS_START,
  DELETE_CUSTOMERS_START,
  GET_PRODUCTS_START,
  CREATE_PRODUCTS_START,
} from "@/redux/actionTypes";
// customers
import { getCustomersHandler } from "@/redux/sagas/handlers/customers/getCustomers";
import { createCustomerHandler } from "@/redux/sagas/handlers/customers/createCustomer";
import { editCustomerHandler } from "@/redux/sagas/handlers/customers/editCustomer";
import { deleteCustomerHandler } from "@/redux/sagas/handlers/customers/deleteCustomer";
// products
import { getProductsHandler } from "@/redux/sagas/handlers/products/getProducts";
import { createProductHandler } from "@/redux/sagas/handlers/products/createProduct";

export function* watcherSagaProducts() {
  // Customers
  yield takeLatest(GET_CUSTOMERS_START, getCustomersHandler);
  yield takeLatest(CREATE_CUSTOMER_START, createCustomerHandler);
  yield takeLatest(EDIT_CUSTOMERS_START, editCustomerHandler);
  yield takeLatest(DELETE_CUSTOMERS_START, deleteCustomerHandler);
  // Products
  yield takeLatest(GET_PRODUCTS_START, getProductsHandler);
  yield takeLatest(CREATE_PRODUCTS_START, createProductHandler);
}

export function* rootSaga() {
  yield all([fork(watcherSagaProducts)]);
}
