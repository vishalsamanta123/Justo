import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './Styles'
import InputField from '../../../../components/InputField'
import DropdownInput from '../../../../components/DropDown'
import strings from '../../../../components/utilities/Localization'
import images from '../../../../assets/images'
import { RadioButton } from 'react-native-paper'
import { PRIMARY_THEME_COLOR, BLACK_COLOR } from '../../../../components/utilities/constant'
import Button from '../../../../components/Button'

const AddAppointmentItem = (props: any) => {
    return (
        <ScrollView>
            <View style={styles.wrap}>
                <View style={styles.inputWrap}>
                    <InputField
                        placeholderText={strings.appointmentDate}
                        handleInputBtnPress={() => { }}
                        onChangeText={() => { }}
                        headingText={strings.appointmentDate}
                        rightImgSrc={images.event}
                    />
                </View>
                <View style={styles.inputWrap}>
                    <InputField
                        placeholderText={strings.appointmentTime}
                        handleInputBtnPress={() => { }}
                        onChangeText={() => { }}
                        headingText={strings.appointmentTime}
                        rightImgSrc={images.timer}
                    />
                </View>
                <View style={styles.inputWrap}>
                    <DropdownInput
                        headingText={strings.appointmentType}
                        placeholder={strings.appointmentType}
                        value={props.value}
                        setValue={props.setValue}
                    />
                </View>
                <View style={styles.inputWrap}>
                    <DropdownInput
                        headingText={strings.appointmentWith}
                        placeholder={strings.appointmentWith}
                        value={props.value}
                        setValue={props.setValue}
                    />
                </View>
                <View style={styles.btnView}>
                    <Button btnTxtsize={16} handleBtnPress={() => props.handleBtnPress()} buttonText={strings.addNewappointment} />
                </View>
            </View>
        </ScrollView>
    )
}

export default AddAppointmentItem