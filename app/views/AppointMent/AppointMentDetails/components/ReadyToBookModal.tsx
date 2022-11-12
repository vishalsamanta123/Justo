
import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import styles from "./styles";
import images from "../../../../assets/images";
import strings from "../../../../components/utilities/Localization";
import { Dropdown } from "react-native-element-dropdown";
import Button from "../../../../components/Button";
import InputField from "../../../../components/InputField";
import { WHITE_COLOR } from "../../../../components/utilities/constant";

const ReadyToBookModal = (props: any) => {
    return (
        <View>
            <Modal isVisible={props.Visible}>
                <View style={styles.bookingModelVw}>
                    <View style={styles.topContainer}>
                        <Text style={styles.topTxt}>{'Booking Confirmation'}</Text>
                        <View>
                            <TouchableOpacity onPress={() => props.setIsVisible(false)}>
                                <Image source={images.close} style={styles.closeIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.inputWrap}>
                        <InputField
                            placeholderText={'Booking Date'}
                            handleInputBtnPress={() => { }}
                            onChangeText={() => { }}
                            rightImgSrc={images.event}
                        />
                    </View>
                    <View style={styles.inputWrap}>
                        <InputField
                            placeholderText={"Comment"}
                            handleInputBtnPress={() => { }}
                            inputheight={80}
                            onChangeText={() => { }}
                        />
                    </View>
                    <View style={{ marginVertical: 20 }}>
                        <Button
                            handleBtnPress={() => props.setIsVisible(false)}
                            buttonText={props.doneBttnTxt ? props.doneBttnTxt : strings.Confirm} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};
export default ReadyToBookModal