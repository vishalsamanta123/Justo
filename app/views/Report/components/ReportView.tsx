import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import Header from "app/components/Header";
import images from "app/assets/images";
import strings from "app/components/utilities/Localization";
import {
  PRIMARY_THEME_COLOR,
  ROLE_IDS,
} from "app/components/utilities/constant";
import ComingSoonScreen from "app/components/CommonScreen/ComingSoon";
import SMReportTable from "./SMReportTable";
import CMReportTable from "./CMReportTable";
import STReportTable from "./STReportTable";
import CTReportTable from "./CTReportTable";
import ClusterHeadReportTable from "./ClusterHeadReportTable";
import FilterModal from "./modal/ReportFilterModal";

const ReportView = (props: any) => {
  const {
    roleId,
    handleDrawerPress,
    reportData,
    userData,
    handleOnFilterPress,
    FilterModalVisible,
    setIsFilterModalVisible,
    setFilterData,
    filterData,
    handleFilter,
    onReset
  } = props;
  return (
    <>
      <View style={styles.mainContainer}>
        <Header
          leftImageSrc={images.menu}
          rightFirstImageScr={images.filter}
          rightSecondImageScr={images.notification}
          headerText={strings.reportHeader}
          handleOnLeftIconPress={handleDrawerPress}
          headerStyle={styles.headerStyle}
          handleOnRightFirstIconPress={handleOnFilterPress}
          RightFirstIconStyle={styles.RightFirstIconStyle}
          statusBarColor={PRIMARY_THEME_COLOR}
          barStyle={"light-content"}
        />
          {console.log("🚀 ~ file: ReportView.tsx:55 ~ ReportView ~ roleId === ROLE_IDS.closingtl_id:", roleId , ROLE_IDS.closingtl_id)}
        {roleId === ROLE_IDS.sourcingmanager_id ? (
          <SMReportTable data={reportData} />
        ) : roleId === ROLE_IDS.closingmanager_id ? (
          <CMReportTable data={reportData} userData={userData} />
        ) : roleId === ROLE_IDS.sourcingtl_id ? (
          <STReportTable data={reportData} />
        ) : roleId === ROLE_IDS.closingtl_id ? (
          <CTReportTable data={reportData} />
        ) : roleId === ROLE_IDS.clusterhead_id ? (
          <ClusterHeadReportTable />
        ) : (
          <ComingSoonScreen />
        )}
      </View>
      <FilterModal
        Visible={FilterModalVisible}
        setIsVisible={setIsFilterModalVisible}
        filterData={filterData}
        setFilterData={setFilterData}
        handleFilter={handleFilter}
        onReset={onReset}
      />
    </>
  );
};

export default ReportView;
