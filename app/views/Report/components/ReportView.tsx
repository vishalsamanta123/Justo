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

const ReportView = (props: any) => {
  const { roleId, handleDrawerPress, reportData, userData } = props;
  return (
    <View style={styles.mainContainer}>
      <Header
        leftImageSrc={images.menu}
        // rightFirstImageScr={images.filter}
        // rightSecondImageScr={images.notification}
        headerText={strings.reportHeader}
        handleOnLeftIconPress={handleDrawerPress}
        headerStyle={styles.headerStyle}
        RightFirstIconStyle={styles.RightFirstIconStyle}
        statusBarColor={PRIMARY_THEME_COLOR}
        barStyle={"light-content"}
      />
      {roleId === ROLE_IDS.sourcingmanager_id ? (
        <SMReportTable data={reportData}  />
      ) : roleId === ROLE_IDS.closingmanager_id ? (
        <CMReportTable data={reportData} userData={userData} />
      ) : roleId === ROLE_IDS.sourcingtl_id ? (
        <STReportTable data={reportData} />
      ) : roleId === ROLE_IDS.closingtl_id ? (
        <CTReportTable data={reportData} />
      ) : (
        <ComingSoonScreen />
      )}
    </View>
  );
};

export default ReportView;
