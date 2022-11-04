import { View, Text, StatusBar, FlatList } from "react-native";
import React from "react";
import Header from "../../../../components/Header";
import {
  BLACK_COLOR,
  GRAY_COLOR,
  PRIMARY_THEME_COLOR,
  PRIMARY_THEME_COLOR_DARK,
  YELLOW_COLOR,
} from "../../../../components/utilities/constant";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import images from "../../../../assets/images";
import strings from "../../../../components/utilities/Localization";
import styles from "./styles";
import PropertyDetailItem from "./PropertyDetailItem";
import { useNavigation } from "@react-navigation/native";
import Button from "../../../../components/Button";

const PropertyDetailView = (props: any) => {
  const insets = useSafeAreaInsets();
  const navigation: any = useNavigation();
  const DATA: any = {
    Projectname: props.data.Projectname,
    Location: props.data.Location,
    visitor: props.data.visitor,
    siteVisit: props.data.siteVisit,
    closeVisit: props.data.closeVisit,
    status: props.data.status,
    createddate: props.data.createddate,
    propertyType: "Flat",
    startDate: "11/10/2022",
    EndDate: "11/10/2022",
    lead: "12/11/2022",
    configuration: "1BHK / Min-25 L / Max-75 L",
    amenity: "Sawimming Pool",
    pickup: "yes",
  };

  const onpresContent = (name: any) => {
    navigation.navigate(name);
  };
  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          backgroundColor: PRIMARY_THEME_COLOR_DARK,
          height: insets.top,
        }}
      />
      <StatusBar barStyle={"light-content"} />
      <Header
        leftImageSrc={images.backArrow}
        rightSecondImageScr={images.notification}
        headerText={strings.propertyDetailHeader}
        headerStyle={styles.headerStyle}
        RightFirstIconStyle={styles.leftImageIconStyle}
        leftImageIconStyle={styles.leftImageIconStyle}
        handleOnLeftIconPress={props.handleBackPress}
      />
      <View style={styles.propertyListView}>
        <PropertyDetailItem items={DATA} onpresContent={onpresContent} />
      </View>
      <View style={styles.btnContainer}>
        <Button
          buttonText={
            DATA.status == "confirmatin Pending"
              ? strings.active
              : DATA.status == "Subscribe"
              ? strings.unsubscribe
              : strings.subscribe
          }
          width={150}
          height={45}
          bgcolor={""}
          bordercolor={
            DATA.status == "confirmatin Pending"
              ? BLACK_COLOR
              : DATA.status == "Subscribe"
              ? "red"
              : YELLOW_COLOR
          }
          borderWidth={1.5}
          btnTxtcolor={
            DATA.status == "confirmatin Pending"
              ? BLACK_COLOR
              : DATA.status == "Subscribe"
              ? "red"
              : YELLOW_COLOR
          }
          btnTxtsize={15}
          textTransform={"uppercase"}
        />
        {DATA.status !== "confirmatin Pending" &&
        DATA.status !== "Unsubscribe" ? (
          <Button
            buttonText={strings.createVisit}
            width={150}
            height={45}
            bordercolor={GRAY_COLOR}
            borderWidth={1}
            // btnTxtcolor={PRIMARY_THEME_COLOR}
            btnTxtsize={15}
            textTransform={"uppercase"}
          />
        ) : null}
      </View>
    </View>
  );
};

export default PropertyDetailView;
