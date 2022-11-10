import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
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
  WHITE_COLOR,
} from "../../../../components/utilities/constant";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import InputField from "../../../../components/InputField";
import images from "../../../../assets/images";
import Button from "../../../../components/Button";
import PicturePickerModal from "../../../../components/Modals/PicturePicker";

const AgentBasicInfoView = (props: any) => {
  const insets = useSafeAreaInsets();
  const [gender, setGender] = useState("Male");
  const [checked, setChecked] = React.useState("first");

  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <Header
        headerText={strings.basicInfoText}
        headerStyle={styles.headerStyle}
        headerTextStyle={styles.headerTextStyle}
        leftImageSrc={images.backArrow}
        handleOnLeftIconPress={props.onPressBack}
        barStyle={'light-content'}
        statusBarColor={PRIMARY_THEME_COLOR}
      />
      <View style={styles.wrap}>
        <TouchableOpacity onPress={() => props.setImagePicker(true)}
          style={styles.imageCircle}>
          {props.agencyData.image === '' ?
            <Text>Image</Text>
            :
            <Image
              source={{ uri: props?.agencyData?.image?.path }}
              style={styles.pickerImageVw}
            />
          }
        </TouchableOpacity>
        <View style={styles.inputWrap}>
          <InputField
            placeholderText={"Name"}
            handleInputBtnPress={() => { }}
            onChangeText={() => { }}
            headingText={"Agent Name"}
          />
        </View>
        <View style={styles.inputWrap}>
          <InputField
            placeholderText={"Adhar No."}
            handleInputBtnPress={() => { }}
            onChangeText={() => { }}
            headingText={"Adhar No."}
          />
        </View>
        <View style={styles.inputWrap}>
          <InputField
            placeholderText={"Pancard No."}
            handleInputBtnPress={() => { }}
            onChangeText={() => { }}
            headingText={"Pancard No."}
          />
        </View>
        <View style={styles.genderView}>
          <Text style={styles.genderTxt}>{strings.gender}</Text>
          <View style={styles.radioView}>
            <RadioButton
              value="first"
              status={checked === "first" ? "checked" : "unchecked"}
              onPress={() => setChecked("first")}
              color={PRIMARY_THEME_COLOR}
            />
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
            <RadioButton
              value="second"
              status={checked === "second" ? "checked" : "unchecked"}
              onPress={() => setChecked("second")}
              color={PRIMARY_THEME_COLOR}
            />
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
            handleInputBtnPress={() => { }}
            onChangeText={() => { }}
            headingText={"Date of Birth"}
            rightImgSrc={images.event}
          />
        </View>
        <View style={styles.inputWrap}>
          <InputField
            placeholderText={"Mobile No."}
            handleInputBtnPress={() => { }}
            onChangeText={() => { }}
            headingText={"Mobile No."}
          />
        </View>
        <View style={styles.inputWrap}>
          <InputField
            placeholderText={"WhatsApp No."}
            handleInputBtnPress={() => { }}
            onChangeText={() => { }}
            headingText={"WhatsApp No."}
          />
        </View>
        <View style={styles.inputWrap}>
          <InputField
            placeholderText={"Email Address"}
            handleInputBtnPress={() => { }}
            onChangeText={() => { }}
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
        <View style={styles.workingView}>
          <View>
            <Text style={styles.workTxt}>Working Location</Text>
          </View>
          <TouchableOpacity style={styles.addBtn}>
            <Text style={styles.addTxt}>+ Add location</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Button handleBtnPress={props.onPressNext} rightImage={images.forwardArrow} buttonText={strings.next} textTransform={"uppercase"} />
        </View>
      </View>
    </ScrollView>
  );
};

export default AgentBasicInfoView;
