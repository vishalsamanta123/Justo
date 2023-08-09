import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import ErrorMessage from "app/components/ErrorMessage";
import { GREEN_COLOR, ROLE_IDS } from "app/components/utilities/constant";
import { getAllAgentList } from "app/Redux/Actions/AgencyActions";
import { getClosingManagerList } from "app/Redux/Actions/ClosingManager";
import {
  dashboardClosingData,
  dashboardPostSaleData,
  dashboardReceptionistData,
  dashboardSiteHeadData,
  dashboardSourcingData,
  userStatusUpdateData,
  userStatusUpdater,
} from "app/Redux/Actions/Dashboard";
import { getPermission } from "app/Redux/Actions/permissionAction";
import {
  getAssignCPList,
  getSourcingManagerList,
} from "app/Redux/Actions/SourcingManagerActions";
import React, { useEffect, useState } from "react";
import { Alert, BackHandler } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import DashboardView from "./components/DashboardView";
import { userLogout } from "app/Redux/Actions/AuthActions";

const DashboardScreen = ({ navigation }: any) => {
  const dispatch: any = useDispatch();
  const getLoginType = useSelector((state: any) => state.login);
  const statusData = useSelector((state: any) => state.statusUpdateData) || {};
  const { response = {} } = useSelector((state: any) => state.dashboardData);
  const SMListData = useSelector((state: any) => state.SourcingManager);
  const CMListData = useSelector((state: any) => state.ClosingManager);
  const [dashboardData, setDashboardData] = useState<any>({});
  const [listData, setListData] = useState<any>([]);
  const [isEnabled, setIsEnabled] = useState<any>();
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        Alert.alert("Hold on!", "Are you sure you want to close this app ?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel",
          },
          { text: "YES", onPress: () => BackHandler.exitApp() },
        ]);
        return true;
      };
      BackHandler.addEventListener("hardwareBackPress", onBackPress);
      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [])
  );
  useFocusEffect(
    React.useCallback(() => {
      getDashboard();
      return () => { };
    }, [navigation, isEnabled, getLoginType])
  );
  useFocusEffect(
    React.useCallback(() => {
      dispatch(getPermission({}))
      return () => { };
    }, [navigation])
  )
  useEffect(() => {
    console.log("🚀 ~ file: index.tsx:68 ~ response:", response)
    if (response?.status === 200) {
      setDashboardData(response?.data);
      setIsEnabled(response?.data?.online_status);
    } else if (response?.status === 401) {
      setDashboardData({});
      setIsEnabled(null);
      dispatch(userLogout())
      navigation.navigate('AuthLoading');
    } else {
      setDashboardData({});
      setIsEnabled(null);
    }
    if (
      getLoginType?.response?.data?.role_id === ROLE_IDS.sourcingtl_id ||
      getLoginType?.response?.data?.role_id === ROLE_IDS.sourcingmanager_id
    ) {
      if (SMListData?.response?.status === 200) {
        setListData(SMListData?.response?.data);
      } else {
        setListData([]);
      }
    } if (getLoginType?.response?.data?.role_id === ROLE_IDS.closingtl_id
    ) {
      if (CMListData?.response?.status === 200) {
        setListData(CMListData?.response?.data);
      } else {
        setListData([]);
      }
    }
  }, [response, SMListData, CMListData]);
  const getDashboard = async () => {
    if (
      getLoginType?.response?.data?.role_id === ROLE_IDS.sourcingtl_id ||
      getLoginType?.response?.data?.role_id === ROLE_IDS.sourcingmanager_id
    ) {
      dispatch(dashboardSourcingData({}));
      if (getLoginType?.response?.data?.role_id === ROLE_IDS.sourcingtl_id) {
        dispatch(getSourcingManagerList({}));
      } else if (
        getLoginType?.response?.data?.role_id === ROLE_IDS.sourcingmanager_id
      ) {
        dispatch(
          getAssignCPList({
            user_id: getLoginType?.response?.data?.user_id,
          })
        );
      } else {
        setListData([]);
      }
    } else if (
      getLoginType?.response?.data?.role_id === ROLE_IDS.closingtl_id ||
      getLoginType?.response?.data?.role_id === ROLE_IDS.closingmanager_id
    ) {
      dispatch(dashboardClosingData({}));
      if (getLoginType?.response?.data?.role_id === ROLE_IDS.closingtl_id) {
        dispatch(getClosingManagerList({}))
      } else {
        setListData([]);
      }
    } else if (
      getLoginType?.response?.data?.role_id === ROLE_IDS.postsales_id
    ) {
      dispatch(dashboardPostSaleData({}));
    } else if (
      getLoginType?.response?.data?.role_id === ROLE_IDS.receptionist_id
    ) {
      dispatch(dashboardReceptionistData({}));
    } else if (
      getLoginType?.response?.data?.role_id === ROLE_IDS.sitehead_id ||
      getLoginType?.response?.data?.role_id === ROLE_IDS.clusterhead_id ||
      getLoginType?.response?.data?.role_id === ROLE_IDS.businesshead_id
    ) {
      dispatch(dashboardSiteHeadData({}));
    } else {
      setDashboardData({});
      setIsEnabled(null);
    }
  };
  const updateStatusPress = (data: any) => {
    dispatch(
      userStatusUpdateData({
        online_status: data === 1 ? 2 : 1,
      })
    );
  };
  useEffect(() => {
    if (statusData?.data && statusData?.response?.status === 200) {
      setIsEnabled(isEnabled === 1 ? 2 : 1);
      dispatch(userStatusUpdater());
      ErrorMessage({
        msg: statusData?.response?.message,
        backgroundColor: GREEN_COLOR,
      });
    }
  }, [statusData]);
  const handleDrawerPress = () => {
    navigation.toggleDrawer();
  };

  const onPressTodayVisit = (type: any) => {
    navigation.navigate("LeadManagementScreen", type);
  };
  const onPressSiteVisit = (type: any) => {
    if (
      getLoginType?.response?.data?.role_id === ROLE_IDS.closingtl_id ||
      getLoginType?.response?.data?.role_id === ROLE_IDS.closingmanager_id
    ) {
      navigation.navigate("Appointments", type);
    } else {
      navigation.navigate("AppointmentForSite", type);
    }
  };
  const onPressSMList = (type: any, data: any) => {
    if (type === "details") {
      navigation.navigate("SMDetails", data);
    } else {
      navigation.navigate("SourcingManager", {type: 'active'});
    }
  };
  const onPressCPList = (type: any, data: any) => {
    if (type === "details") {
      navigation.navigate("AgencyDetails", { data });
    } else {
      navigation.navigate("AgencyListing", {type: 'active'});
    }
  };
  const onPressCMLIST = (type: any, item: any) => {
    if (type === "details") {
      navigation.navigate('CMDetails', item)
    } else {
      navigation.navigate("ClosingManager");
    }
  }

  const onpressBooking = (type: any, onpressType: any) => {
    if (type === "request") {
      navigation.navigate("BookingList", { type: "request", onpressType });
    } else if (type === "register") {
      navigation.navigate("BookingList", { type: "register", onpressType });
    } else if (type === "cancel") {
      navigation.navigate("CancelBooking");
    }
    else {
      navigation.navigate("BookingList", { type: "readyToBook", onpressType });
    }
  };
  const onpressSMList = () => {
    navigation.navigate("ClosingManager", {type: 'active'});
  };

  return (
    <DashboardView
      dashboardData={dashboardData}
      handleDrawerPress={handleDrawerPress}
      updateStatusPress={updateStatusPress}
      isEnabled={isEnabled}
      listData={listData}
      getLoginType={getLoginType}
      onPressTodayVisit={onPressTodayVisit}
      onPressSiteVisit={onPressSiteVisit}
      onPressSMList={onPressSMList}
      onPressCPList={onPressCPList}
      onPressCMLIST={onPressCMLIST}
      onpressBooking={onpressBooking}
      onpressSMList={onpressSMList}
      getDashboard={getDashboard}
    />
  );
};

export default DashboardScreen;
