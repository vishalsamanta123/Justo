import { View, Text } from 'react-native'
import React from 'react'
import images from '../../../../assets/images'
import { PRIMARY_THEME_COLOR, WHITE_COLOR } from '../../../../components/utilities/constant'
import strings from '../../../../components/utilities/Localization'
import styles from './styles'
import Header from '../../../../components/Header'
import InputField from '../../../../components/InputField'
import Button from '../../../../components/Button'

const ChangePasswordView = (props: any) => {
    console.log('props', props)
    const {data} = props;
  return (
    <View style={styles.mainContainer}>
      <Header
        leftImageSrc={images.backArrow}
        rightSecondImageScr={images.notification}
        headerText={data.heading}
        headerStyle={styles.headerStyle}
        RightFirstIconStyle={styles.leftImageIconStyle}
        leftImageIconStyle={styles.leftImageIconStyle}
        handleOnLeftIconPress={props.handleBackPress}
        barStyle={'light-content'}
        statusBarColor={PRIMARY_THEME_COLOR}
      />
      <View style={styles.wrap}>
        <View style={styles.inputWrap}>
            <InputField
                placeholderText={"Old Password"}
                handleInputBtnPress={() => {}}
                onChangeText={() => {}}
                headingText={"Old Password"}
            />
        </View>
        <View style={styles.inputWrap}>
            <InputField
                placeholderText={"New Password"}
                handleInputBtnPress={() => {}}
                onChangeText={() => {}}
                headingText={"New Password"}
            />
        </View>
        <View style={styles.inputWrap}>
            <InputField
                placeholderText={"Confirm New Password"}
                handleInputBtnPress={() => {}}
                onChangeText={() => {}}
                headingText={"Confirm New Password"}
            />
        </View>
        <View style={styles.btnView}>
            <Button handleBtnPress={props.onPressNext} width={300} btnTxtsize={15} buttonText={strings.changePassword} textTransform={"uppercase"} />
        </View>
      </View>
    </View>
  )
}

export default ChangePasswordView