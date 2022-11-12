import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from "./styles";
import TopScreensViewer from './TopScreensViewer'
import Header from "../../../../components/Header";
import images from "../../../../assets/images";
import strings from "../../../../components/utilities/Localization";
import { BLACK_COLOR, PRIMARY_THEME_COLOR } from "../../../../components/utilities/constant";
import InputField from "../../../../components/InputField";
import { RadioButton } from "react-native-paper";
import Button from "../../../../components/Button";
import { normalize } from "../../../../components/scaleFontSize";

const VisitorUpdateView = (props: any) => {
    return (
        <View style={styles.mainContainer}>
            <Header
                leftImageSrc={images.backArrow}
                rightSecondImageScr={images.notification}
                headerText={strings.visitor + " " + strings.update}
                headerStyle={styles.headerStyle}
                RightFirstIconStyle={styles.leftImageIconStyle}
                leftImageIconStyle={styles.leftImageIconStyle}
                handleOnLeftIconPress={props.handleBackPress}
                barStyle={'light-content'}
                statusBarColor={PRIMARY_THEME_COLOR}
            />
            <View style={styles.noMoveVw}>
                <TopScreensViewer type={props.screenType} />
            </View>
            <ScrollView contentContainerStyle={styles.wrap}>
                <View style={styles.inputWrap}>
                    <InputField
                        placeholderText={"Name"}
                        handleInputBtnPress={() => { }}
                        onChangeText={() => { }}
                        headingText={"Property Name"}
                    />
                </View>
                <View style={styles.typeVw}>
                    <Text style={styles.typeTxt}>Visitor Details</Text>
                    <View style={styles.typeBorders} />
                </View>
                <View style={styles.inputWrap}>
                    <InputField
                        placeholderText={"Name"}
                        handleInputBtnPress={() => { }}
                        onChangeText={() => { }}
                        headingText={"Visitor Name"}
                    />
                </View>
                <View style={styles.inputWrap}>
                    <InputField
                        placeholderText={"Aadhar No."}
                        handleInputBtnPress={() => { }}
                        onChangeText={() => { }}
                        headingText={"Aadhar No."}
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
                <View style={styles.selectsView}>
                    <Text style={styles.selectsTxt}>{strings.gender}</Text>
                    <View style={styles.radioView}>
                        <RadioButton
                            value="first"
                            status={props.updateForm.gender === "male" ? "checked" : "unchecked"}
                            onPress={() => props.setUpdateForm({
                                gender: 'male'
                            })}
                            color={PRIMARY_THEME_COLOR}
                        />
                        <Text
                            style={[
                                styles.radioTxt,
                                {
                                    color:
                                        props.updateForm.gender === "male" ? PRIMARY_THEME_COLOR : BLACK_COLOR,
                                },
                            ]}
                        >
                            {strings.male}
                        </Text>
                    </View>
                    <View style={styles.radioView}>
                        <RadioButton
                            value="second"
                            status={props.updateForm.gender === "female" ? "checked" : "unchecked"}
                            onPress={() => props.setUpdateForm({
                                gender: 'female'
                            })}
                            color={PRIMARY_THEME_COLOR}
                        />
                        <Text
                            style={[
                                styles.radioTxt,
                                {
                                    color:
                                        props.updateForm.gender === "female" ? PRIMARY_THEME_COLOR : BLACK_COLOR,
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
                <View style={[styles.inputWrap, { marginBottom: normalize(10) }]}>
                    <InputField
                        placeholderText={"Location"}
                        handleInputBtnPress={() => { }}
                        onChangeText={() => { }}
                        headingText={"Location"}
                    />
                </View>
            </ScrollView>
            <View style={styles.noMoveVw}>
                <Button
                    handleBtnPress={(type: any) => props.onPressNext(1)}
                    rightImage={images.forwardArrow}
                    buttonText={strings.next}
                    textTransform={"uppercase"}
                />
            </View>
        </View>
    )
}
export default VisitorUpdateView