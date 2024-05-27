import {
  GET_CUSTOMERS_START,
  GET_CUSTOMERS_SUCCESS,
  GET_CUSTOMERS_FAILURE,
  CREATE_CUSTOMER_SUCCESS,
  CREATE_CUSTOMER_FAILURE,
  CREATE_CUSTOMER_START,
  EDIT_CUSTOMERS_START,
  EDIT_CUSTOMERS_SUCCESS,
  EDIT_CUSTOMERS_FAILURE,
  DELETE_CUSTOMERS_START,
  DELETE_CUSTOMERS_SUCCESS,
  DELETE_CUSTOMERS_FAILURE,
} from "@/redux/actionTypes";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const reducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    // get
    case GET_CUSTOMERS_START:
      return { ...state, loading: true };
    case GET_CUSTOMERS_SUCCESS:
      return { ...state, loading: false, data: payload };
    case GET_CUSTOMERS_FAILURE:
      return { ...state, loading: false, error: payload };
    //  create
    case CREATE_CUSTOMER_START:
      return { ...state, loading: true };
    case CREATE_CUSTOMER_SUCCESS:
      const updatedCustomers = [...state.data, payload];
      return { ...state, loading: false, data: updatedCustomers };
    case CREATE_CUSTOMER_FAILURE:
      return { ...state, loading: false, error: payload };
    //  edit
    case EDIT_CUSTOMERS_START:
      return { ...state, loading: true };
    case EDIT_CUSTOMERS_SUCCESS:
      const editedCustomers = state.data.map((customer) => {
        if (customer.id === payload.id) {
          return payload;
        }
        return customer;
      });
      return { ...state, loading: false, data: editedCustomers };
    case EDIT_CUSTOMERS_FAILURE:
      return { ...state, loading: false, error: payload };
    //  delete
    case DELETE_CUSTOMERS_START:
      return { ...state, loading: true };
    case DELETE_CUSTOMERS_SUCCESS:
      const restCustomers = state.data.filter((customer) => customer.id !== payload);
      return { ...state, loading: false, data: restCustomers };
    case DELETE_CUSTOMERS_FAILURE:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export default reducers;
