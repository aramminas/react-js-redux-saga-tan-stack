import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";

import { rootSaga } from "@/redux/sagas/rootSaga";
import customersReducer from "@/redux/reducers/customers";
import productsReducer from "@/redux/reducers/products";
import favoriteProductsReducer from "@/redux/reducers/favoriteProducts";
import dashboardDataReducer from "@/redux/reducers/dashboardData";

const reducer = combineReducers({
  customers: customersReducer,
  products: productsReducer,
  favoriteProducts: favoriteProductsReducer,
  dashboard: dashboardDataReducer,
});

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);

export default store;
