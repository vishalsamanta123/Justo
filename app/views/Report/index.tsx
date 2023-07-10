import React, { useEffect, useLayoutEffect, useState } from "react";
import ReportView from "./components/ReportView";
import { useDispatch, useSelector } from "react-redux";
import {
  GetCMReport,
  GetCTReport,
  GetSMReport,
  GetSTReport,
} from "app/Redux/Actions/ReportActions";
import { ROLE_IDS } from "app/components/utilities/constant";
import moment from "moment";

const ReportScreen = ({ navigation }: any) => {
  const [reportData, setReportData] = useState([]);
  const dispatch: any = useDispatch();
  const handleDrawerPress = () => {
    navigation.toggleDrawer();
  };
  const { userData = {} } = useSelector((state: any) => state.userData);
  const ReportData = useSelector((state: any) => state.reportData);
  const roleId = userData?.data?.role_id || "";
  var currentDate = new Date();
  currentDate.setDate(1);
  var firstDayOfMonth = `01`;
  var currentMonth: any = currentDate.getMonth() + 1;
  currentMonth = currentMonth <= 9 ? `0${currentMonth}` : currentMonth;
  var currentYear = currentDate.getFullYear();
  var date = new Date();
  var firstdDate = currentYear + "-" + currentMonth + "-" + firstDayOfMonth;
  var currentDay: any = date.getDate();
  currentDay = currentDay <= 9 ? `0${currentDay}` : currentDay;
  var currentMonths: any = currentDate.getMonth() + 1;
  currentMonths = currentMonths <= 9 ? `0${currentMonths}` : currentMonths;
  var currentYears = currentDate.getFullYear();
  var todayDate = currentYears + "-" + currentMonths + "-" + currentDay;

  useLayoutEffect(() => {
    if (roleId === ROLE_IDS.closingmanager_id) {
      dispatch(
        GetCMReport({
          start_date: firstdDate.toString(),
          end_date: todayDate.toString(),
        })
      );
    } else if (roleId === ROLE_IDS.closingtl_id) {
      dispatch(
        GetCTReport({
          start_date: firstdDate.toString(),
          end_date: todayDate.toString(),
        })
      );
    } else if (roleId === ROLE_IDS.sourcingmanager_id) {
      dispatch(
        GetSMReport({
          start_date: firstdDate.toString(),
          end_date: todayDate.toString(),
        })
      );
    } else if (roleId === ROLE_IDS.sourcingtl_id) {
      dispatch(
        GetSTReport({
          start_date: firstdDate.toString(),
          end_date: todayDate.toString(),
        })
      );
    }
  }, []);
  useEffect(() => {
    if (ReportData?.response?.data.length > 0) {
      setReportData(ReportData?.response?.data);
    }
  }, [ReportData]);
  return (
    <>
      <ReportView
        handleDrawerPress={handleDrawerPress}
        roleId={roleId}
        reportData={reportData}
        userData={userData}
      />
    </>
  );
};

export default ReportScreen;
