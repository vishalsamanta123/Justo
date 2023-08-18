import apiEndPoints from "app/components/utilities/apiEndPoints";
import {
  GET_REPORT_DETAILS,
  GET_REPORT_ERROR,
  START_LOADING,
  STOP_LOADING,
} from "../types";
import { apiCall } from "app/components/utilities/httpClient";

export const GetCMReport = (item: any) => async (dispatch: any) => {
  dispatch({ type: START_LOADING });
  try {
    const res = await apiCall("post", apiEndPoints.GET_CM_REPORT, item);
    if (res?.data?.status == 200) {
      dispatch({
        type: GET_REPORT_DETAILS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_REPORT_ERROR,
        payload: res.data,
      });
    }
  } catch (e) {
    dispatch({
      type: GET_REPORT_ERROR,
      payload: console.log(e),
    });
  } finally {
    dispatch({ type: STOP_LOADING });
  }
};

export const GetCTReport = (item: any) => async (dispatch: any) => {
  dispatch({ type: START_LOADING });
  try {
    const res = await apiCall("post", apiEndPoints.GET_CT_REPORT, item);
    if (res?.data?.status == 200) {
      dispatch({
        type: GET_REPORT_DETAILS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_REPORT_ERROR,
        payload: res.data,
      });
    }
  } catch (e) {
    dispatch({
      type: GET_REPORT_ERROR,
      payload: console.log(e),
    });
  } finally {
    dispatch({ type: STOP_LOADING });
  }
};

export const GetSMReport = (item: any) => async (dispatch: any) => {
  dispatch({ type: START_LOADING });
  try {
    const res = await apiCall("post", apiEndPoints.GET_ST_REPORT, item);
    if (res?.data?.status == 200) {
      dispatch({
        type: GET_REPORT_DETAILS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_REPORT_ERROR,
        payload: res.data,
      });
    }
  } catch (e) {
    dispatch({
      type: GET_REPORT_ERROR,
      payload: console.log(e),
    });
  } finally {
    dispatch({ type: STOP_LOADING });
  }
};

export const GetSTReport = (item: any) => async (dispatch: any) => {
  console.log("🚀 ~ file: ReportActions.tsx:86 ~ item:", item)
  dispatch({ type: START_LOADING });
  try {
    const res = await apiCall("post", apiEndPoints.GET_ST_REPORT, item);
    if (res?.data?.status == 200) {
      dispatch({
        type: GET_REPORT_DETAILS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_REPORT_ERROR,
        payload: res.data,
      });
    }
  } catch (e) {
    dispatch({
      type: GET_REPORT_ERROR,
      payload: console.log(e),
    });
  } finally {
    dispatch({ type: STOP_LOADING });
  }
};

export const GetSHCHreport = (item: any) => async (dispatch: any) => {
  dispatch({ type: START_LOADING });
  try {
    const res = await apiCall("post", apiEndPoints.GET_SH_CH_REPORT, item);
    if (res?.data?.status == 200) {
      dispatch({
        type: GET_REPORT_DETAILS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_REPORT_ERROR,
        payload: res.data,
      });
    }
  } catch (e) {
    dispatch({
      type: GET_REPORT_ERROR,
      payload: console.log(e),
    });
  } finally {
    dispatch({ type: STOP_LOADING });
  }
};

export const GetBMreport = (item: any) => async (dispatch: any) => {
  console.log("🚀 ~ file: ReportActions.tsx:112 ~ item:", item)

  dispatch({ type: START_LOADING });
  try {
    const res = await apiCall("post", apiEndPoints.GET_BM_REPORT, item);
    if (res?.data?.status == 200) {
      dispatch({
        type: GET_REPORT_DETAILS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_REPORT_ERROR,
        payload: res.data,
      });
    }
  } catch (e) {
    dispatch({
      type: GET_REPORT_ERROR,
      payload: console.log(e),
    });
  } finally {
    dispatch({ type: STOP_LOADING });
  }
};
