import {
  GET_DASHBOARD_DATA_START,
  GET_DASHBOARD_DATA_SUCCESS,
  GET_DASHBOARD_DATA_FAILURE,
} from "@/redux/actionTypes";

export const getDashboardData = () => ({ type: GET_DASHBOARD_DATA_START });
export const getDashboardDataSuccess = (payload) => ({ type: GET_DASHBOARD_DATA_SUCCESS, payload });
export const getDashboardDataFailure = (payload) => ({ type: GET_DASHBOARD_DATA_FAILURE, payload });
