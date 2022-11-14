import React from "react";
import { View, Text, Image } from 'react-native';
import images from "../../../../assets/images";
import Button from "../../../../components/Button";
import Header from "../../../../components/Header";
import InputField from "../../../../components/InputField";
import PicturePickerModal from "../../../../components/Modals/PicturePicker";
import { normalize } from "../../../../components/scaleFontSize";
import { BLUE_COLOR, CALL_COLOR, Isios, PRIMARY_THEME_COLOR } from "../../../../components/utilities/constant";
import strings from "../../../../components/utilities/Localization";
import styles from "./styles";

const BookingView = (props: any) => {
    return (
        <View style={styles.mainContainer}>
            <Header
                leftImageSrc={images.backArrow}
                rightSecondImageScr={images.notification}
                headerText={strings.bookNow}
                headerStyle={styles.headerStyle}
                RightFirstIconStyle={styles.leftImageIconStyle}
                leftImageIconStyle={styles.leftImageIconStyle}
                handleOnLeftIconPress={props.handleBackPress}
                barStyle={'light-content'}
                statusBarColor={PRIMARY_THEME_COLOR}
            />
            <View style={styles.containerVw}>
                <View style={styles.inputWrap}>
                    <InputField
                        placeholderText={"Amount"}
                        handleInputBtnPress={() => { }}
                        onChangeText={() => { }}
                        headingText={"Booking Amount"}
                    />
                </View>
                <View style={styles.inputWrap}>
                    <InputField
                        placeholderText={"Number"}
                        handleInputBtnPress={() => { }}
                        onChangeText={() => { }}
                        headingText={"Cheque No."}
                    />
                </View>
                <View style={styles.inputWrap}>
                    <InputField
                        placeholderText={"Payment Type"}
                        handleInputBtnPress={() => { }}
                        onChangeText={() => { }}
                        headingText={"Type"}
                    />
                </View>
                <View style={styles.straightVw}>
                    <Text style={styles.titleTxt}>Cheque Photo    :</Text>
                    <Button
                        width={130}
                        height={45}
                        buttonText={strings.browse}
                        bgcolor={CALL_COLOR}
                        border={14}
                        handleBtnPress={() => props.setBrowse(true)}
                    />
                </View>
                <View style={[styles.straightVw, { marginTop: normalize(20) }]}>
                    <View style={{ width: '48%' }}>
                        <InputField
                            headTxtSize={Isios ? 12 : 12}
                            placeholderText={"Configuration"}
                            handleInputBtnPress={() => { }}
                            onChangeText={() => { }}
                            headingText={"Purchase Configuration"}
                        />
                    </View>
                    <View style={{ width: '48%' }}>
                        <InputField
                            placeholderText={"Qty"}
                            handleInputBtnPress={() => { }}
                            onChangeText={() => { }}
                            headingText={"Qty"}
                        />
                    </View>
                </View>
                <View style={styles.inputWrap}>
                    <InputField
                        headingText={"Comment"}
                        placeholderText={"Comment"}
                        handleInputBtnPress={() => { }}
                        inputheight={80}
                        onChangeText={() => { }}
                    />
                </View>
                <View style={{ marginVertical: normalize(30) }}>
                    <Button
                        buttonText={strings.bookNow}
                        bgcolor={CALL_COLOR}
                        border={14}
                        handleBtnPress={() => props.handleBookPress()}
                    />
                </View>
            </View>
            <PicturePickerModal
                Visible={props.browse}
                setVisible={props.setBrowse}
            />
        </View>
    )
}
export default BookingView