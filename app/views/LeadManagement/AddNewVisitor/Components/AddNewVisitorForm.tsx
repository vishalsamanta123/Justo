import { View, Text, ScrollView, StatusBar, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { RadioButton } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import images from '../../../../assets/images';
import InputField from '../../../../components/InputField';
import { WHITE_COLOR, PRIMARY_THEME_COLOR, BLACK_COLOR } from '../../../../components/utilities/constant';
import strings from '../../../../components/utilities/Localization';
import styles from './Styles';
import Header from '../../../../components/Header';
import Button from '../../../../components/Button';

const AddNewVisitorForm = (props: any) => {
    const insets = useSafeAreaInsets();
    const [gender, setGender] = useState("Male");
    const [checked, setChecked] = React.useState("first");

    return (
        <ScrollView style={styles.mainContainer}>
            <View
                style={{
                    backgroundColor: WHITE_COLOR,
                    height: insets.top,
                }}
            />
            <StatusBar backgroundColor={PRIMARY_THEME_COLOR} barStyle={"light-content"} />
            <Header
                headerText={
                    props.type == 'edit' ?
                        strings.editVisitor :
                        strings.addnewvisitor
                }
                headerStyle={styles.headerStyle}
                headerTextStyle={styles.headerTextStyle}
                leftImageSrc={images.backArrow}
                handleOnLeftIconPress={props.handleBackPress}
            />
            <View style={styles.wrap}>
                <Text style={styles.headingText}>{strings.visitordetails}</Text>
                <View style={styles.inputWrap}>
                    <InputField
                        placeholderText={"Visitor Name"}
                        handleInputBtnPress={() => { }}
                        onChangeText={() => { }}
                        headingText={"Visitor Name"}
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
                <View style={styles.inputWrap}>
                    <InputField
                        placeholderText={"Location"}
                        handleInputBtnPress={() => { }}
                        onChangeText={() => { }}
                        headingText={"Location"}
                    />
                </View>
                <View style={styles.inputWrap}>
                    <InputField
                        placeholderText={"Localitiy"}
                        handleInputBtnPress={() => { }}
                        onChangeText={() => { }}
                        headingText={"Localitiy"}
                    />
                </View>
                <Text style={[styles.headingText, { marginTop: 20 }]}>{strings.propertyrequire}</Text>
                <View style={styles.inputWrap}>
                    <InputField
                        placeholderText={"Configuration"}
                        handleInputBtnPress={() => { }}
                        onChangeText={() => { }}
                        headingText={"Configuration"}
                    />
                </View>
                <View style={styles.inputWrap}>
                    <InputField
                        placeholderText={"Expected Possession Date"}
                        handleInputBtnPress={() => { }}
                        onChangeText={() => { }}
                        headingText={"Expected Possession Date"}
                    />
                </View>
                <View style={styles.inputWrap}>
                    <InputField
                        placeholderText={"Area"}
                        handleInputBtnPress={() => { }}
                        onChangeText={() => { }}
                        headingText={"Area"}
                    />
                </View>
                <View style={[styles.inputWrap, { flexDirection: "row" }]}>
                    <View style={styles.budgetView}>
                        <TextInput placeholder='Min Budget' style={styles.budgetInput} />
                        <TouchableOpacity
                            style={{
                                width: "15%",
                                backgroundColor: WHITE_COLOR,
                                alignItems: "center",
                                justifyContent: "center",
                                marginLeft: 5,
                                borderRadius: 10
                            }}
                        >
                            <Text>L</Text>
                        </TouchableOpacity>
                        <TextInput placeholder='Max Budget' style={[styles.budgetInput, { marginLeft: 20 }]} />
                        <TouchableOpacity
                            style={{
                                width: "15%",
                                backgroundColor: WHITE_COLOR,
                                alignItems: "center",
                                justifyContent: "center",
                                marginLeft: 5,
                                borderRadius: 10
                            }}
                        >
                            <Text>C</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.radioBtnView}>
                    <Text style={styles.headingsTxt}>Nature Of Funding</Text>
                    <View style={{ flexDirection: "row" }}>
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
                                Loan
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
                                Self Funding
                            </Text>
                        </View>
                        <View style={styles.radioView}>
                            <RadioButton
                                value="third"
                                status={checked === "third" ? "checked" : "unchecked"}
                                onPress={() => setChecked("third")}
                                color={PRIMARY_THEME_COLOR}
                            />
                            <Text
                                style={[
                                    styles.radioTxt,
                                    {
                                        color:
                                            checked === "third" ? PRIMARY_THEME_COLOR : BLACK_COLOR,
                                    },
                                ]}
                            >
                                Both
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', width: '100%' }}>
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
                            Min EMI Pay
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
                            Max EMI Pay
                        </Text>
                    </View>
                </View>
                <View style={styles.radioBtnView}>
                    <Text style={styles.headingsTxt}>Purpose</Text>
                    <View style={{ flexDirection: "row" }}>
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
                                End User
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
                                Investment
                            </Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.headingText}>Company Details</Text>
                <View style={styles.radioBtnView}>
                    <Text style={styles.headingsTxt}>Occupation</Text>
                    <View style={{ flexDirection: "row", width: '100%' }}>
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
                                Salaried
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
                                Self Employed
                            </Text>
                        </View>
                        <View style={styles.radioView}>
                            <RadioButton
                                value="third"
                                status={checked === "third" ? "checked" : "unchecked"}
                                onPress={() => setChecked("third")}
                                color={PRIMARY_THEME_COLOR}
                            />
                            <Text
                                style={[
                                    styles.radioTxt,
                                    {
                                        color:
                                            checked === "third" ? PRIMARY_THEME_COLOR : BLACK_COLOR,
                                    },
                                ]}
                            >
                                Professional
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.inputWrap}>
                    <InputField
                        placeholderText={"Designation"}
                        handleInputBtnPress={() => { }}
                        onChangeText={() => { }}
                        headingText={"Designation"}
                    />
                </View>
                <View style={styles.inputWrap}>
                    <InputField
                        placeholderText={"Office Address"}
                        handleInputBtnPress={() => { }}
                        onChangeText={() => { }}
                        headingText={"Office Address"}
                    />
                </View>
                <View style={styles.btnView}>
                    {props.type == 'edit'
                        ?
                        < Button width={150} height={45} buttonText={strings.editVisitor} btnTxtsize={16} />
                        :
                        <>
                            < Button width={150} height={45} buttonText={strings.createVisitor} btnTxtsize={16} />
                            <Button width={150} height={45} buttonText={strings.createandschedule} btnTxtsize={14} />
                        </>

                    }
                </View>
            </View>
        </ScrollView>
    )
}

export default AddNewVisitorForm