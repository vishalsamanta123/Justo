import { View, Text, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Styles'
import { PRIMARY_THEME_COLOR_DARK } from '../../../../components/utilities/constant'
import Header from '../../../../components/Header'
import images from '../../../../assets/images'
import strings from '../../../../components/utilities/Localization'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { normalizeSpacing } from '../../../../components/scaleFontSize'

const BulkUpload = ({ navigation }: any) => {
    const insets = useSafeAreaInsets();
    const handleBackPress = () => {
        navigation.goBack()
    }
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
                handleOnLeftIconPress={handleBackPress}
                leftImageIconStyle={styles.RightFirstIconStyle}
                leftImageSrc={images.backArrow}
                rightSecondImageScr={images.notification}
                headerText={strings.bulkupload}
                headerStyle={styles.headerStyle}
                RightFirstIconStyle={styles.RightFirstIconStyle}
            //   handleOnRightFirstIconPress={() => setFilterisVisible(true)}
            />
            <View style={styles.BulkMainView}>
                <TouchableOpacity style={styles.uploadView}>
                    <Text style={styles.uploadTxt}>{strings.uploadCSV}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.uploadView,{marginTop: normalizeSpacing(50)}]}>
                    <Text style={styles.uploadTxt}>{strings.uploadimage}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BulkUpload