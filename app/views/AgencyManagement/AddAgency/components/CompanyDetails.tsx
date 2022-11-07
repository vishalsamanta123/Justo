import { View, Text, StatusBar, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import styles from "./styles";
import { WHITE_COLOR } from "../../../../components/utilities/constant";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../../../../components/Header";
import strings from "../../../../components/utilities/Localization";
import InputField from "../../../../components/InputField";
import Button from "../../../../components/Button";
import images from "../../../../assets/images";

const CompanyDetails = ({navigation}: any) => {
  const insets = useSafeAreaInsets();
  const onPressBack = () => {
    navigation.goBack('')
  }
  const onPressRegister = () => {
    navigation.navigate('OtpVerificationScreenView')
  }
  return (
    <ScrollView style={styles.mainContainer}>
      <View
        style={{
          backgroundColor: WHITE_COLOR,
          height: insets.top,
        }}
      />

      <StatusBar barStyle={"dark-content"} />
      <Header
        headerText={strings.companyDetails}
        headerStyle={styles.headerStyle}
        headerTextStyle={styles.headerTextStyle}
        leftImageSrc={images.backArrow}
        handleOnLeftIconPress={onPressBack}
      />
      <View style={styles.wrap}>
        <View style={styles.inputWrap}>
          <InputField
            placeholderText={"Agency Name"}
            handleInputBtnPress={() => {}}
            onChangeText={() => {}}
            headingText={"RealeEstate Company"}
          />
        </View>
        <View style={styles.inputWrap}>
          <InputField
            placeholderText={"GST"}
            handleInputBtnPress={() => {}}
            onChangeText={() => {}}
          />
        </View>
        <View style={styles.inputWrap}>
          <InputField
            placeholderText={"RERA Registration"}
            handleInputBtnPress={() => {}}
            onChangeText={() => {}}
          />
        </View>
        <View style={[styles.inputWrap, { flexDirection: "row" }]}>
          <InputField
            inputWidth={"60%"}
            btnWidth={"30%"}
            browse={"browse"}
            handleInputBtnPress={() => {}}
            onChangeText={() => {}}
            headingText={"Pan Card"}
          />
          <TouchableOpacity 
            style={{
              width: "25%",
              backgroundColor: WHITE_COLOR,
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 10,
              borderRadius: 10
            }}
          >
            <Text>browse</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.inputWrap, { flexDirection: "row" }]}>
          <InputField
            inputWidth={"60%"}
            btnWidth={"30%"}
            browse={"browse"}
            handleInputBtnPress={() => {}}
            onChangeText={() => {}}
            headingText={"Decalaration Latter of Company"}
          />
          <TouchableOpacity 
            style={{
              width: "25%",
              backgroundColor: WHITE_COLOR,
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 10,
              borderRadius: 10
            }}
          >
            <Text>browse</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputWrap}>
          <Text style={styles.headingText}>Bank details</Text>
        </View>
        <View style={styles.inputWrap}>
          <InputField
            placeholderText={"Bank Name"}
            handleInputBtnPress={() => {}}
            onChangeText={() => {}}
            headingText={"Bank Name"}
          />
        </View>
        <View style={styles.inputWrap}>
          <InputField
            placeholderText={"Branch Name"}
            handleInputBtnPress={() => {}}
            onChangeText={() => {}}
            headingText={"Branch Name"}
          />
        </View>
        <View style={styles.inputWrap}>
          <InputField
            placeholderText={"Account No."}
            handleInputBtnPress={() => {}}
            onChangeText={() => {}}
            headingText={"Account No."}
          />
        </View>
        <View style={styles.inputWrap}>
          <InputField
            placeholderText={"IFSC Code"}
            handleInputBtnPress={() => {}}
            onChangeText={() => {}}
            headingText={"IFSC Code"}
          />
        </View>
      </View>
      <View style={styles.btnView}>
        <Button handleBtnPress={onPressRegister}  buttonText={strings.createnewagency} textTransform={'uppercase'}  />
      </View>
    </ScrollView>
  );
};

export default CompanyDetails;
