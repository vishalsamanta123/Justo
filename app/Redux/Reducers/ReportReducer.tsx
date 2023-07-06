import { GET_CM_REPORT_DETAILS, GET_CM_REPORT_ERROR} from "../types";
const initialStateForm = {
  response: null,
};


export function CMReportReducer(state = initialStateForm, action: any) {
    switch (action.type) {
      case GET_CM_REPORT_DETAILS:
        return {
          ...state,
          response: action.payload,
        };
      case GET_CM_REPORT_ERROR:
        return {
          ...state,
          response: action.payload,
        };
      default:
        return state;
    }
  }