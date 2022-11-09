import { View, Text, Image } from 'react-native'
import React from 'react'
import Header from '../../../../components/Header'
import images from '../../../../assets/images'
import { BLACK_COLOR, PRIMARY_THEME_COLOR, WHITE_COLOR } from '../../../../components/utilities/constant'
import styles from './styles'
import Button from '../../../../components/Button'
import strings from '../../../../components/utilities/Localization'

const SeparateLinkView = (props: any) => {
    const {data, handleBackPress} = props;
  return (
    <View style={styles.mainContainer}>
      <Header
        leftImageSrc={images.backArrow}
        rightSecondImageScr={images.notification}
        headerText={data.heading}
        headerStyle={styles.headerStyle}
        RightFirstIconStyle={styles.leftImageIconStyle}
        leftImageIconStyle={styles.leftImageIconStyle}
        handleOnLeftIconPress={handleBackPress}
        barStyle={'light-content'}
        statusBarColor={PRIMARY_THEME_COLOR}
      />
      <View style={styles.warp}>
        <Image style={styles.qrcodeImage} source={images.qrCode} />
      </View>
      <View style={styles.btnCopyLinkView}>
        <Button handleBtnPress={props.onPressNext} width={300} btnTxtcolor={BLACK_COLOR} btnTxtsize={15} bgcolor={WHITE_COLOR} buttonText={strings.copyLink} textTransform={"uppercase"} />
      </View>
    </View>
  )
}

export default SeparateLinkView