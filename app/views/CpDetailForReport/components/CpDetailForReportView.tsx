import { View, Text, FlatList } from "react-native";
import React from "react";
import styles from "./styles";
import images from "app/assets/images";
import strings from "app/components/utilities/Localization";
import Header from "app/components/Header";
import {
  BLACK_COLOR,
  FONT_FAMILY_SEMIBOLD,
  Isios,
  PRIMARY_THEME_COLOR,
  WHITE_COLOR,
} from "app/components/utilities/constant";
import { normalize } from "app/components/scaleFontSize";
import moment from "moment";

const CpDetailForReportView = (props: any) => {
  const renderItem = (item: any) => {
    console.log("🚀 ~ file: CpDetailForReportView.tsx:19 ~ item:", item)
    return (
      <View style={styles.dataView}>
        {/* <Text style={styles.dataTxt}>{item?.user_name}</Text>
        <Text style={styles.dataTxt}>{item?.customer_name}</Text>
        <Text style={styles.dataTxt}>{item?.total_site_visit}</Text>
        <Text style={styles.dataTxt}>{moment(item.created_date).fromNow()}</Text> */}
        <View style={styles.dataBox}>
          <Text style={styles.dataTxt}>{item?.Cp_name}</Text>
        </View>
        <View style={styles.dataBox}>
          <Text style={styles.dataTxt}>{item?.leadCount ? item?.leadCount : 0}</Text>
        </View>
        <View style={styles.dataBox}>
          <Text style={styles.dataTxt}>{item?.bookingCount ? item?.bookingCount : 0}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <Header
        leftImageSrc={images.backArrow}
        rightSecondImageScr={images.notification}
        headerText={strings.smCpDetailHeader}
        headerStyle={styles.headerStyle}
        RightFirstIconStyle={styles.leftImageIconStyle}
        leftImageIconStyle={styles.leftImageIconStyle}
        handleOnLeftIconPress={props.handleBackPress}
        statusBarColor={PRIMARY_THEME_COLOR}
        barStyle={"light-content"}
      />

      <View style={[styles.Txtview, { borderBottomWidth: 0 }]}>
        {/* <View style={styles.projectContainer}>
          <Text style={styles.projectTxt}>{strings.nameOfCp} :</Text>
        </View> */}
        {/* <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}> SM Name: {props.smName}</Text>
        </View> */}
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.headingView}>
          <View style={styles.heddingBox}>
            <Text style={styles.headingText}>CP Name</Text>
          </View>
          <View style={styles.heddingBox}>
            <Text style={styles.headingText}>Site Visit</Text>
          </View>
          <View style={styles.heddingBox}>
            <Text style={styles.headingText}>Booking</Text>
          </View>
        </View>
        <FlatList
          data={props.cpList}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }: any) => renderItem(item)}
          style={styles.listView}
        />
      </View>
    </View>
  );
};

export default CpDetailForReportView;