import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import images from "../../../assets/images";
import Header from "../../../components/Header";
import { PRIMARY_THEME_COLOR } from "../../../components/utilities/constant";
import strings from "../../../components/utilities/Localization";
import styles from "./styels";

const ScanQrView = (props: any) => {
    return (
        <View style={styles.mainContainer}>
            <Header
                leftImageSrc={images.backArrow}
                rightSecondImageScr={images.notification}
                headerText={strings.scanQrCode}
                leftImageIconStyle={styles.RightFirstIconStyle}
                handleOnLeftIconPress={props.handleBackPress}
                headerStyle={styles.headerStyle}
                barStyle={'light-content'}
                statusBarColor={PRIMARY_THEME_COLOR}
            />
            <TouchableOpacity>
                <Image
                    source={images.qrCode}
                    style={{ width: '80%', height: '80%', alignSelf: 'center' }}
                    resizeMode={'contain'}
                />
            </TouchableOpacity>
        </View>
    )
}
export default ScanQrView