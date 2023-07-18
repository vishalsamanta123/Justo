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
import { useIsFocused } from "@react-navigation/native";
import moment from "moment";

const ReportScreen = ({ navigation }: any) => {
  const [reportData, setReportData] = useState([]);
  const [filterModalVisible, setIsFilterModalVisible] = useState(false);
  const [filterData, setFilterData] = useState({
    startdate: "",
    enddate: "",
  });
  const dispatch: any = useDispatch();
  const handleDrawerPress = () => {
    navigation.toggleDrawer();
  };
  const isFocused = useIsFocused();
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
    getData(firstdDate, todayDate);
  }, [isFocused]);
  useEffect(() => {
    if (ReportData?.response?.data.length > 0) {
      setReportData(ReportData?.response?.data);
    }
  }, [ReportData]);

  const getData = (startDate: any, endDate: any) => {
    if (roleId === ROLE_IDS.closingmanager_id) {
      dispatch(
        GetCMReport({
          start_date: startDate.toString(),
          end_date: endDate.toString(),
        })
      );
    } else if (roleId === ROLE_IDS.closingtl_id) {
      dispatch(
        GetCTReport({
          start_date: startDate.toString(),
          end_date: endDate.toString(),
        })
      );
    } else if (roleId === ROLE_IDS.sourcingmanager_id) {
      dispatch(
        GetSMReport({
          start_date: startDate.toString(),
          end_date: endDate.toString(),
        })
      );
    } else if (roleId === ROLE_IDS.sourcingtl_id) {
      dispatch(
        GetSTReport({
          start_date: startDate.toString(),
          end_date: endDate.toString(),
        })
      );
    }
  };

  const handleOnFilterPress = () => {
    setIsFilterModalVisible(true);
  };

  const onReset = () => {
    setIsFilterModalVisible(false);
    setFilterData({
      startdate: "",
      enddate: "",
    });
    getData(firstdDate, todayDate);
  };

  const handleFilter = () => {
    setIsFilterModalVisible(false);
    getData(filterData?.startdate, filterData?.enddate);
  };
  return (
    <>
      <ReportView
        handleDrawerPress={handleDrawerPress}
        roleId={roleId}
        reportData={reportData}
        userData={userData}
        handleOnFilterPress={handleOnFilterPress}
        setIsFilterModalVisible={setIsFilterModalVisible}
        FilterModalVisible={filterModalVisible}
        filterData={filterData}
        setFilterData={setFilterData}
        handleFilter={handleFilter}
        onReset={onReset}
      />
    </>
  );
};

export default ReportScreen;
