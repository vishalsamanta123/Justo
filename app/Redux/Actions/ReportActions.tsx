import apiEndPoints from "app/components/utilities/apiEndPoints";
import { GET_CM_REPORT_DETAILS, GET_CM_REPORT_ERROR, START_LOADING, STOP_LOADING } from "../types";
import { apiCall } from "app/components/utilities/httpClient";

export const GetCMReport =(item: any) => async (dispatch: any) => {
    dispatch({ type: START_LOADING })
    try {
      const res = await apiCall("post", apiEndPoints.GET_CM_REPORT, item);
      console.log("🚀 ~ file: ReportActions.tsx:9 ~ res:", res)
      if (res?.data?.status == 200) {
        dispatch({
          type: GET_CM_REPORT_DETAILS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: GET_CM_REPORT_ERROR,
          payload: res.data,
        });
      }
    } catch (e) {
      dispatch({
        type: GET_CM_REPORT_ERROR,
        payload: console.log(e),
      });
    }
    finally {
      dispatch({ type: STOP_LOADING })
    }
  };