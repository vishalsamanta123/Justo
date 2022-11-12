import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import styles from "../../../../components/Modals/styles";
import images from "../../../../assets/images";
import strings from "../../../../components/utilities/Localization";
import Button from "../../../../components/Button";
import InputField from "../../../../components/InputField";
import { Dropdown } from "react-native-element-dropdown";
import { dropdownData } from "../../../../components/utilities/DemoData";
import DropdownInput from "../../../../components/DropDown";

const CancelModal = (props: any) => {
    const [cancelValue, setCancelValue] = useState({
        reason: '',
        property: ''
    });
    return (
        <View>
            <Modal isVisible={props.Visible}>
                <View style={styles.mainContainer}>
                    <View style={styles.topContainer}>
                        <Text style={styles.topTxt}>{strings.cancel + " " + strings.bookingRequestHead}</Text>
                        <View>
                            <TouchableOpacity onPress={() => props.setIsVisible(false)}>
                                <Image source={images.close} style={styles.closeIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.borderView} />
                    <View style={{ marginHorizontal: 10, }}>
                        <View style={styles.inputWrap}>
                            <Text style={styles.titleTxt}>{strings.reason}</Text>
                            <DropdownInput
                                placeholder={strings.reason}
                                value={cancelValue.reason}
                                setValue={(data: any) =>
                                    setCancelValue({
                                        ...cancelValue,
                                        reason: data
                                    })
                                }
                            />
                        </View>
                        <View style={styles.inputWrap}>
                            <Text style={styles.titleTxt}>{strings.selectproperty}</Text>
                            <DropdownInput
                                placeholder={strings.selectproperty}
                                value={cancelValue.property}
                                setValue={(data: any) =>
                                    setCancelValue({
                                        ...cancelValue,
                                        property: data
                                    })
                                }
                            />
                        </View>
                        <View style={styles.inputWrap}>
                            <Text style={styles.titleTxt}>{"Comment"}</Text>
                            <InputField
                                placeholderText={"Comment"}
                                handleInputBtnPress={() => { }}
                                inputheight={80}
                                onChangeText={() => { }}
                            />
                        </View>
                    </View>
                    <View style={{ marginVertical: 20 }}>
                        <Button
                            handleBtnPress={() => props.setIsVisible(false)}
                            buttonText={strings.cancelBooking} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default CancelModal;
