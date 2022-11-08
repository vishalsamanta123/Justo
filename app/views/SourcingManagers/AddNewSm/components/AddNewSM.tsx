import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import images from '../../../../assets/images';
import Header from '../../../../components/Header';
import InputField from '../../../../components/InputField';
import styles from './styles';
import { RadioButton } from "react-native-paper";
import { BLACK_COLOR, PRIMARY_THEME_COLOR, WHITE_COLOR } from '../../../../components/utilities/constant';
import Button from '../../../../components/Button';
import strings from '../../../../components/utilities/Localization';

const AddNewSMView = (props: any) => {
    const [gender, setGender] = useState("Male");
    const [checked, setChecked] = React.useState("first");

    return (
        <View style={styles.mainContainer}>
            <Header
                headerText={props?.type === 'edit' ? strings.editSM : strings.addNewSM}
                headerStyle={styles.headerStyle}
                headerTextStyle={styles.headerTextStyle}
                leftImageSrc={images.backArrow}
                rightSecondImageScr={images.notification}
                RightSecondIconStyle={{ tintColor: WHITE_COLOR }}
                leftImageIconStyle={{ tintColor: WHITE_COLOR }}
                handleOnLeftIconPress={props.onPressBack}
                barStyle={'light-content'}
                statusBarColor={PRIMARY_THEME_COLOR}
            />
            <ScrollView contentContainerStyle={styles.wrap}>
                <View style={styles.inputWrap}>
                    <InputField
                        placeholderText={"Name"}
                        handleInputBtnPress={() => { }}
                        onChangeText={() => { }}
                        headingText={"SM Name"}
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
                <View style={{ marginVertical: 10, marginBottom: 20 }}>
                    <Button
                        handleBtnPress={props.onPressCreate}
                        buttonText={props?.type === 'edit' ? strings.updateSM : strings.createSM} />
                </View>
            </ScrollView>
        </View>
    )
}
export default AddNewSMView