import { View, Text } from "react-native";
import React from "react";
import CpDetailForReportView from "./components/CpDetailForReportView";

const CpDetailForReport = ({ navigation, route }: any) => {
  const { cpList, smName } = route.params;
  console.log("🚀 ~ file: index.tsx:7 ~ cpList:", cpList);
  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <CpDetailForReportView
      handleBackPress={handleBackPress}
      smName={smName}
      cpList={cpList}
    />
  );
};

export default CpDetailForReport;
