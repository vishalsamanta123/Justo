import { View, Text, StatusBar, TextInput } from 'react-native'
import React from 'react'
import styles from './Styles'
import { PRIMARY_THEME_COLOR_DARK, WHITE_COLOR } from '../../../../components/utilities/constant';
import Header from '../../../../components/Header';
import images from '../../../../assets/images';
import strings from '../../../../components/utilities/Localization';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import InputField from '../../../../components/InputField';
import Button from '../../../../components/Button';

const EditFollowUp = ({ navigation }: any) => {
    const insets = useSafeAreaInsets();
    return (
        <View style={styles.mainContainer}>
            <View
                style={{
                    backgroundColor: PRIMARY_THEME_COLOR_DARK,
                    height: insets.top,
                }}
            />
            <StatusBar barStyle={"light-content"} />
            <Header
                leftImageSrc={images.backArrow}
                rightSecondImageScr={images.notification}
                headerText={strings.editfollowup}
                handleOnLeftIconPress={() => navigation.goBack()}
                leftImageIconStyle={styles.RightFirstIconStyle}
                headerStyle={styles.headerStyle}
                RightFirstIconStyle={styles.RightFirstIconStyle}
            />
            <View style={styles.editInputView}>
                <View style={styles.inputWarp}>
                    <InputField
                        placeholderText={"Date & Time"}
                        handleInputBtnPress={() => { }}
                        onChangeText={() => { }}
                        headingText={"Date & Time"}
                        rightImgSrc={images.event}
                    />
                </View>
                <View style={styles.inputWarp}>
                    <InputField
                        placeholderText={"Description"}
                        handleInputBtnPress={() => { }}
                        onChangeText={() => { }}
                        headingText={"Description"}
                        multiline={true}
                        inputheight={200}
                    />
                </View>
            </View>
            <View style={styles.editBtnContainer}>
                <Button
                    buttonText={strings.update}
                    width={250}
                    bgcolor={PRIMARY_THEME_COLOR_DARK}
                    btnTxtcolor={WHITE_COLOR}
                    btnTxtsize={18}
                    textTransform={"uppercase"}
                />
            </View>
        </View>
    )
}

export default EditFollowUp