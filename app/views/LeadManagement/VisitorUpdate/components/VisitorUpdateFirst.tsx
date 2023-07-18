import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import styles from "./styles";
import TopScreensViewer from './TopScreensViewer'
import Header from "../../../../components/Header";
import images from "../../../../assets/images";
import strings from "../../../../components/utilities/Localization";
import { BLACK_COLOR, DATE_FORMAT, Isios, PRIMARY_THEME_COLOR } from "../../../../components/utilities/constant";
import InputField from "../../../../components/InputField";
import { RadioButton } from "react-native-paper";
import Button from "../../../../components/Button";
import { normalize } from "../../../../components/scaleFontSize";
import moment from "moment";
import InputCalender from "app/components/InputCalender";
import DropdownInput from "app/components/DropDown";
import Styles from '../../../../components/Modals/styles'
import { useSelector } from "react-redux";

const VisitorUpdateView = (props: any) => {
    const { userData = {} } = useSelector((state: any) => state.userData)
    const userId = userData?.data ? userData?.data : {}
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
                {/* <TopScreensViewer type={props.screenType} /> */}
            </View>
            <ScrollView keyboardShouldPersistTaps={'handled'}
                automaticallyAdjustKeyboardInsets={Isios ? true : false}
                contentContainerStyle={styles.wrap}>
                <View style={styles.inputWrap}>
                    {props?.updateForm?.property_id !== '' && props?.updateForm?.property_id !== null ?
                        (<InputField
                            placeholderText={"Name"}
                            editable={false}
                            handleInputBtnPress={() => { }}
                            onChangeText={(text: any) => {
                                props.setUpdateForm({
                                    ...props.updateForm,
                                    property_title: text
                                })
                            }}
                            valueshow={props?.updateForm?.property_title}
                            headingText={"Property Name"}
                        />)
                        :
                        (<DropdownInput
                            // require={true}
                            headingText={"Property Name"}
                            placeholder={props.updateForm?.property_title ?
                                props.updateForm?.property_title : 'Property'}
                            data={props?.allProperty}
                            // disable={props.type == 'edit' || props.type == 'propertySelect' ? true : false}
                            inputWidth={'100%'}
                            paddingLeft={16}
                            maxHeight={300}
                            labelField="property_title"
                            valueField={'_id'}
                            value={props?.updateForm?.propertyuid}
                            onChange={(item: any) => {
                                props.setUpdateForm({
                                    ...props.updateForm,
                                    property_id: item.property_id,
                                    property_type_title: item.property_type,
                                    property_title: item.property_title,
                                })
                            }}
                            newRenderItem={(item: any) => {
                                return (
                                    <>
                                        <View style={Styles.item}>
                                            <Text style={Styles.textItem}>{item.property_title}</Text>
                                        </View>
                                    </>
                                );
                            }}
                        />)}
                </View>
                <View style={styles.typeVw}>
                    <Text style={styles.typeTxt}>Visitor Details</Text>
                    <View style={styles.typeBorders} />
                </View>
                <View style={styles.inputWrap}>
                    <InputField
                        disableSpecialCharacters={true}
                        placeholderText={"Name"}
                        handleInputBtnPress={() => { }}
                        onChangeText={(text: any) => {
                            props.setUpdateForm({
                                ...props.updateForm,
                                first_name: text
                            })
                        }}
                        valueshow={props?.updateForm?.first_name}
                        headingText={"Visitor Name"}
                    />
                </View>
                <View style={styles.inputWrap}>
                    <InputField
                        disableSpecialCharacters={true}
                        placeholderText={strings.mobileNo}
                        handleInputBtnPress={() => { }}
                        onChangeText={(text: any) => {
                            props.setUpdateForm({
                                ...props.updateForm,
                                mobile: text
                            })
                        }}
                        editable={props?.updateForm?.create_by === userId._id ? true : false}
                        valueshow={
                            props?.updateForm?.create_by === userId._id ? props?.updateForm?.mobile?.toString() : `${props?.updateForm?.mobile?.slice(0, 2)}******${props?.updateForm?.mobile?.slice(-2)}`
                        }
                        headingText={"Mobile No."}
                        keyboardtype={'number-pad'}
                        maxLength={10}
                    />
                </View>
                <View style={styles.inputWrap}>
                    <InputField
                        placeholderText={"3675 9834 6012"}
                        handleInputBtnPress={() => { }}
                        onChangeText={(text: any) => {
                            props.setUpdateForm({
                                ...props.updateForm,
                                adhar_no: text
                            })
                        }}
                        valueshow={props?.updateForm?.adhar_no?.toString()}
                        headingText={"Aadhaar No."}
                        inputType={'aadhaar'}
                        maxLength={14}
                        keyboardtype={'number-pad'}
                    />
                </View>
                <View style={styles.inputWrap}>
                    <InputField
                        disableSpecialCharacters={true}
                        placeholderText={"BNZAA2318JM"}
                        handleInputBtnPress={() => { }}
                        onChangeText={(text: any) => {
                            props.setUpdateForm({
                                ...props.updateForm,
                                pancard_no: text
                            })
                        }}
                        valueshow={props?.updateForm?.pancard_no?.toString()}
                        headingText={"Pancard No."}
                        maxLength={10}
                    />
                </View>
                <View style={styles.selectsView}>
                    <Text style={styles.selectsTxt}>{strings.gender}</Text>
                    <View style={styles.radioView}>
                        <RadioButton.Android
                            value="1"
                            status={props.updateForm.gender === 1 ? "checked" : "unchecked"}
                            onPress={() => props.setUpdateForm({
                                ...props.updateForm,
                                gender: 1
                            })}
                            color={PRIMARY_THEME_COLOR}
                        />
                        <Text
                            style={[
                                styles.radioTxt,
                                {
                                    color:
                                        props.updateForm.gender === 1 ? PRIMARY_THEME_COLOR : BLACK_COLOR,
                                },
                            ]}
                        >
                            {strings.male}
                        </Text>
                    </View>
                    <View style={styles.radioView}>
                        <RadioButton.Android
                            value="2"
                            status={props.updateForm.gender === 2 ? "checked" : "unchecked"}
                            onPress={() => props.setUpdateForm({
                                ...props.updateForm,
                                gender: 2
                            })}
                            color={PRIMARY_THEME_COLOR}
                        />
                        <Text
                            style={[
                                styles.radioTxt,
                                {
                                    color:
                                        props.updateForm.gender === 2 ? PRIMARY_THEME_COLOR : BLACK_COLOR,
                                },
                            ]}
                        >
                            {strings.female}
                        </Text>
                    </View>
                </View>
                <View style={styles.inputWrap}>
                    <InputCalender
                        leftIcon={images.event}
                        mode={"date"}
                        placeholderText={strings.dateOfBirth}
                        headingText={strings.dateOfBirth}
                        editable={false}
                        dateData={(data: any) => {
                            props.setUpdateForm({
                                ...props.updateForm,
                                birth_date: moment(data).format(DATE_FORMAT),
                            });
                        }}
                        setDateshow={(data: any) => {
                            props.setUpdateForm({
                                ...props.updateForm,
                                birth_date: moment(data).format(DATE_FORMAT),
                            });
                        }}
                        value={props?.updateForm?.birth_date === '' ||
                            props?.updateForm?.birth_date === undefined ||
                            props?.updateForm?.birth_date === null ?
                            "" :
                            moment(props?.updateForm?.birth_date).format(DATE_FORMAT)
                        }
                    />
                </View>
                <View style={styles.inputWrap}>
                    <InputField
                        disableSpecialCharacters={true}
                        placeholderText={strings.whatsappNo}
                        handleInputBtnPress={() => { }}
                        onChangeText={(text: any) => {
                            props.setUpdateForm({
                                ...props.updateForm,
                                whatsapp_no: text
                            })
                        }}
                        valueshow={props?.updateForm?.whatsapp_no?.toString()}
                        headingText={strings.whatsappNo}
                        keyboardtype={'number-pad'}
                        maxLength={10}
                    />
                </View>
                <View style={styles.inputWrap}>
                    <InputField
                        placeholderText={strings.email + " " + strings.address}
                        handleInputBtnPress={() => { }}
                        onChangeText={(text: any) => {
                            props.setUpdateForm({
                                ...props.updateForm,
                                email: text
                            })
                        }}
                        valueshow={props?.updateForm?.email}
                        headingText={strings.email + " " + strings.address}
                    />
                </View>
                <View style={[styles.inputWrap, { marginBottom: normalize(10) }]}>
                    <InputField
                        inputType={'location'}
                        placeholderText={"Location"}
                        headingText={"Location"}
                        valueshow={props?.updateForm?.location}
                        onChangeText={(data: any) => {
                            props.setUpdateForm({
                                ...props.updateForm,
                                location: data ? data : props?.updateForm?.location,
                            })
                        }}
                        onPressSelect={(data: any, detail: any) => {
                            props.setUpdateForm({
                                ...props.updateForm,
                                location: data?.description,
                                latitude: detail?.geometry?.location?.lat,
                                longitude: detail?.geometry?.location?.lng,
                            })
                        }}
                    />
                </View>
                <View style={[styles.inputWrap, { marginBottom: normalize(10) }]}>
                    <InputField
                        disableSpecialCharacters={true}
                        placeholderText={"Locality"}
                        handleInputBtnPress={() => { }}
                        onChangeText={(text: any) => {
                            props.setUpdateForm({
                                ...props.updateForm,
                                locality: text
                            })
                        }}
                        valueshow={props?.updateForm?.locality}
                        headingText={"Locality"}
                    />
                </View>
                <View style={[styles.inputWrap]}>
                    <DropdownInput
                        headingText={'Marital Status'}
                        placeholder={props.updateForm?.marital_status ?
                            props.updateForm?.marital_status?.toString() === "1" ? strings.Unmarried :
                                props.updateForm?.marital_status?.toString() === "2" && strings.Married : 'Marital Status'}
                        data={[
                            { label: strings.Married, value: 2 },
                            { label: strings.Unmarried, value: 1 },
                        ]}
                        inputWidth={'100%'}
                        paddingLeft={16}
                        maxHeight={300}
                        labelField={"label"}
                        valueField={'value'}
                        value={props?.updateForm?.marital_status}
                        onChange={(item: any) => {
                            props.setUpdateForm({
                                ...props.updateForm,
                                marital_status: item.value,
                            })
                        }}
                        newRenderItem={(item: any) => {
                            return (
                                <View style={Styles.item}>
                                    <Text style={Styles.textItem}>{item.label}</Text>
                                </View>
                            );
                        }}
                    />
                </View>
                <View style={[styles.inputWrap, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }]}>
                    <Text style={[styles.selectsTxt, { width: '40%', textAlign: 'center' }]}>No. of family member</Text>
                    <TextInput
                        value={props?.updateForm?.no_of_family_member?.toString()}
                        onChangeText={(data: any) => {
                            props.setUpdateForm({
                                ...props.updateForm,
                                no_of_family_member: data
                            })
                        }}
                        maxLength={2}
                        keyboardType={'number-pad'}
                        placeholder='No. of family member'
                        style={styles.budgetInput} />
                </View>

                <View style={[styles.inputWrap]}>
                    <DropdownInput
                        headingText={'Currently Staying As'}
                        placeholder={props.updateForm?.current_stay ?
                            props.updateForm?.current_stay : 'Currently Staying As'}
                        data={[
                            { label: strings.Rented, value: strings.Rented },
                            { label: strings.Owned, value: strings.Owned },
                        ]}
                        inputWidth={'100%'}
                        paddingLeft={16}
                        maxHeight={300}
                        labelField={"label"}
                        valueField={'value'}
                        value={props?.updateForm?.current_stay}
                        onChange={(item: any) => {
                            props.setUpdateForm({
                                ...props.updateForm,
                                current_stay: item.value,
                            })
                        }}
                        newRenderItem={(item: any) => {
                            return (
                                <View style={Styles.item}>
                                    <Text style={Styles.textItem}>{item.label}</Text>
                                </View>
                            );
                        }}
                    />
                </View>
                <View style={[styles.inputWrap]}>
                    <DropdownInput
                        headingText={'Property Type'}
                        placeholder={props.updateForm?.property_type ?
                            props.updateForm?.property_type : 'Property Type'}
                        data={[
                            { label: strings.MoveIn, value: strings.MoveIn },
                            { label: strings.Underonstruction, value: strings.MoveIn },
                        ]}
                        inputWidth={'100%'}
                        paddingLeft={16}
                        maxHeight={300}
                        labelField={"label"}
                        valueField={'value'}
                        value={props?.updateForm?.property_type}
                        onChange={(item: any) => {
                            props.setUpdateForm({
                                ...props.updateForm,
                                property_type: item.value,
                            })
                        }}
                        newRenderItem={(item: any) => {
                            return (
                                <View style={Styles.item}>
                                    <Text style={Styles.textItem}>{item.label}</Text>
                                </View>
                            );
                        }}
                    />
                </View>
                <View style={styles.radioBtnView}>
                    <Text style={styles.selectsTxt}>Preferred Bank</Text>
                    <View style={{ flexDirection: "row" }}>
                        <View style={styles.radioView}>
                            <RadioButton.Android
                                value={strings.yes}
                                status={props?.updateForm?.preferred_bank === strings.yes ? "checked" : "unchecked"}
                                onPress={() => props.setUpdateForm({
                                    ...props.updateForm,
                                    preferred_bank: strings.yes,
                                })}
                                color={PRIMARY_THEME_COLOR}
                            />
                            <Text
                                style={[
                                    styles.radioTxt,
                                    {
                                        color:
                                            props?.updateForm?.preferred_bank === strings.yes ? PRIMARY_THEME_COLOR : BLACK_COLOR,
                                    },
                                ]}
                            >
                                {strings.yes}
                            </Text>
                        </View>
                        <View style={styles.radioView}>
                            <RadioButton.Android
                                value={strings.no}
                                status={props?.updateForm?.preferred_bank === strings.no ? "checked" : "unchecked"}
                                onPress={() => props.setUpdateForm({
                                    ...props.updateForm,
                                    preferred_bank: strings.no,
                                })}
                                color={PRIMARY_THEME_COLOR}
                            />
                            <Text
                                style={[
                                    styles.radioTxt,
                                    {
                                        color:
                                            props?.updateForm?.preferred_bank === strings.no ? PRIMARY_THEME_COLOR : BLACK_COLOR,
                                    },
                                ]}
                            >
                                {strings.no}
                            </Text>
                        </View>
                    </View>
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