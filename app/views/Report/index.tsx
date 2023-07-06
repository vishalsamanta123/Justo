import React, { useEffect, useLayoutEffect, useState } from "react";
import ReportView from "./components/ReportView";
import { useDispatch, useSelector } from "react-redux";
import { GetCMReport } from "app/Redux/Actions/ReportActions";
import { ROLE_IDS } from "app/components/utilities/constant";

const ReportScreen = ({ navigation }: any) => {
  const [reportData, setReportData] = useState([]);
  const dispatch: any = useDispatch();
  const handleDrawerPress = () => {
    navigation.toggleDrawer();
  };
  const { userData = {} } = useSelector((state: any) => state.userData);
  const cmReportData = useSelector((state: any) => state.cmReportData);
  const roleId = userData?.data?.role_id || "";
  useLayoutEffect(() => {
    if (roleId === ROLE_IDS.closingmanager_id) {
      dispatch(
        GetCMReport({
          start_date: "",
          end_date: "",
        })
      );
    }
  }, []);

  useEffect(() => {
    if (cmReportData?.response?.data.length > 0) {
      setReportData(cmReportData?.response?.data);
    }
  }, [cmReportData]);
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
