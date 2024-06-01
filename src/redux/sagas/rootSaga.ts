import { takeLatest, all, fork } from "redux-saga/effects";

import {
  GET_DASHBOARD_DATA_START,
  GET_CUSTOMERS_START,
  CREATE_CUSTOMER_START,
  EDIT_CUSTOMERS_START,
  DELETE_CUSTOMERS_START,
  GET_PRODUCTS_START,
  CREATE_PRODUCTS_START,
  GET_FAVORITE_PRODUCTS_START,
  ADD_FAVORITE_PRODUCT_START,
  DELETE_FAVORITE_PRODUCT_START,
} from "@/redux/actionTypes";

// dashboard
import { getDashboardHandler } from "@/redux/sagas/handlers/dashboardData/getDashboardData";
// customers
import { getCustomersHandler } from "@/redux/sagas/handlers/customers/getCustomers";
import { createCustomerHandler } from "@/redux/sagas/handlers/customers/createCustomer";
import { editCustomerHandler } from "@/redux/sagas/handlers/customers/editCustomer";
import { deleteCustomerHandler } from "@/redux/sagas/handlers/customers/deleteCustomer";
// products
import { getProductsHandler } from "@/redux/sagas/handlers/products/getProducts";
import { createProductHandler } from "@/redux/sagas/handlers/products/createProduct";
// Favorite Products
import { getFavoriteProductsHandler } from "@/redux/sagas/handlers/favoriteProducts/getFavoriteProducts";
import { addFavoriteProductHandler } from "@/redux/sagas/handlers/favoriteProducts/addFavoriteProduct";
import { deleteFavoriteProductHandler } from "@/redux/sagas/handlers/favoriteProducts/deleteFavoriteProduct";

export function* watcherSagaProducts() {
  // Dashboard
  yield takeLatest(GET_DASHBOARD_DATA_START, getDashboardHandler);

  // Customers
  yield takeLatest(GET_CUSTOMERS_START, getCustomersHandler);
  yield takeLatest(CREATE_CUSTOMER_START, createCustomerHandler);
  yield takeLatest(EDIT_CUSTOMERS_START, editCustomerHandler);
  yield takeLatest(DELETE_CUSTOMERS_START, deleteCustomerHandler);
  // Products
  yield takeLatest(GET_PRODUCTS_START, getProductsHandler);
  yield takeLatest(CREATE_PRODUCTS_START, createProductHandler);
  // Favorite Products
  yield takeLatest(GET_FAVORITE_PRODUCTS_START, getFavoriteProductsHandler);
  yield takeLatest(ADD_FAVORITE_PRODUCT_START, addFavoriteProductHandler);
  yield takeLatest(DELETE_FAVORITE_PRODUCT_START, deleteFavoriteProductHandler);
}

export function* rootSaga() {
  yield all([fork(watcherSagaProducts)]);
}
