import {
    ScrollView,
    Text,
    View,
  } from "react-native";
  import React, { useState } from "react";
  import { RadioButton } from "react-native-paper";
  import Header from "../../../../components/Header";
  import strings from "../../../../components/utilities/Localization";
  import styles from "./styles";
  import {
    BLACK_COLOR,
    PRIMARY_THEME_COLOR,
  } from "../../../../components/utilities/constant";
  import { useSafeAreaInsets } from "react-native-safe-area-context";
  import InputField from "../../../../components/InputField";
  import images from "../../../../assets/images";
  import Button from "../../../../components/Button";
  
  const EditProfileView = (props: any) => {
    const insets = useSafeAreaInsets();
    const [gender, setGender] = useState("Male");
    const [checked, setChecked] = React.useState("first");
  
    return (
      <ScrollView style={styles.mainContainer}>
        <Header
          headerText={strings.editProfile}
          headerStyle={styles.headerStyle}
          headerTextStyle={styles.headerTextStyle}
          leftImageSrc={images.backArrow}
          leftImageIconStyle={styles.leftImageIconStyle}
          handleOnLeftIconPress={props.onPressBack}
          barStyle={'light-content'}
          statusBarColor={PRIMARY_THEME_COLOR}
        />
        <View style={styles.wrap}>
         {/*  <Text style={styles.headingText}>{strings.basicInfoText}</Text> */}
          {/* <View style={styles.underlineStyle} /> */}
          <View style={styles.imageCircle}>
            <Text>Image</Text>
          </View>
          <View style={styles.inputWrap}>
            <InputField
              placeholderText={"Name"}
              handleInputBtnPress={() => {}}
              onChangeText={() => {}}
              headingText={"Agent Name"}
            />
          </View>
          <View style={styles.inputWrap}>
            <InputField
              placeholderText={"Adhar No."}
              handleInputBtnPress={() => {}}
              onChangeText={() => {}}
              headingText={"Adhar No."}
            />
          </View>
          <View style={styles.inputWrap}>
            <InputField
              placeholderText={"Pancard No."}
              handleInputBtnPress={() => {}}
              onChangeText={() => {}}
              headingText={"Pancard No."}
            />
          </View>
          <View style={styles.genderView}>
            <Text style={styles.genderTxt}>{strings.gender}</Text>
            <View style={styles.radioView}>
              {/* <RadioButton
                value="first"
                status={checked === "first" ? "checked" : "unchecked"}
                onPress={() => setChecked("first")}
                color={PRIMARY_THEME_COLOR}
              /> */}
              <Text
                style={[
                  styles.radioTxt,
                  {
                    color:
                      checked === "first" ? PRIMARY_THEME_COLOR : BLACK_COLOR,
                  },
                ]}
              >
                {strings.male}
              </Text>
            </View>
            <View style={styles.radioView}>
              {/* <RadioButton
                value="second"
                status={checked === "second" ? "checked" : "unchecked"}
                onPress={() => setChecked("second")}
                color={PRIMARY_THEME_COLOR}
              /> */}
              <Text
                style={[
                  styles.radioTxt,
                  {
                    color:
                      checked === "second" ? PRIMARY_THEME_COLOR : BLACK_COLOR,
                  },
                ]}
              >
                {strings.female}
              </Text>
            </View>
          </View>
          <View style={styles.inputWrap}>
            <InputField
              placeholderText={"Date of Birth"}
              handleInputBtnPress={() => {}}
              onChangeText={() => {}}
              headingText={"Date of Birth"}
              rightImgSrc={images.event}
            />
          </View>
          <View style={styles.inputWrap}>
            <InputField
              placeholderText={"Mobile No."}
              handleInputBtnPress={() => {}}
              onChangeText={() => {}}
              headingText={"Mobile No."}
            />
          </View>
          <View style={styles.inputWrap}>
            <InputField
              placeholderText={"WhatsApp No."}
              handleInputBtnPress={() => {}}
              onChangeText={() => {}}
              headingText={"WhatsApp No."}
            />
          </View>
          <View style={styles.inputWrap}>
            <InputField
              placeholderText={"Email Address"}
              handleInputBtnPress={() => {}}
              onChangeText={() => {}}
              headingText={"Email Address"}
            />
          </View>
         {/*  <View style={styles.inputWrap}>
            <InputField
              placeholderText={"Sourcing Manager"}
              handleInputBtnPress={() => {}}
              onChangeText={() => {}}
              headingText={"Sourcing Manager"}
            />
          </View> */}
          <View style={{marginTop: 10}}>
            <Button handleBtnPress={props.onPressNext} width={300} btnTxtsize={15} buttonText={strings.updateProfile} textTransform={"uppercase"} />
          </View>
        </View>
      </ScrollView>
    );
  };
  
  export default EditProfileView;
  