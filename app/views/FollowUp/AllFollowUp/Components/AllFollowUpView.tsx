import { View, Text, StatusBar, FlatList } from 'react-native'
import React from 'react'
import styles from './Styles'
import { PRIMARY_THEME_COLOR, PRIMARY_THEME_COLOR_DARK } from '../../../../components/utilities/constant'
import Header from '../../../../components/Header'
import images from '../../../../assets/images'
import strings from '../../../../components/utilities/Localization'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AllFolloeUpData } from '../../../../components/utilities/DemoData'
import AllFollowUpItem from './AllFollowUpItem'

const AllFollowUpView = (props: any) => {
    const insets = useSafeAreaInsets();
  return (
    <View style={styles.mainConatiner}>
      <Header
        leftImageSrc={images.backArrow}
        rightSecondImageScr={images.notification}
        headerText={strings.allfollowup}
        handleOnLeftIconPress={props.handleBackPres}
        headerStyle={styles.headerStyle}
        RightFirstIconStyle={styles.RightFirstIconStyle}
        leftImageIconStyle={styles.RightFirstIconStyle}
        barStyle={'light-content'}
        statusBarColor={PRIMARY_THEME_COLOR}
      />
      <View style={styles.iteamView}>
        <FlatList
        data={AllFolloeUpData}
        renderItem={({item}) => <AllFollowUpItem items={item} />}
         />
      </View>
    </View>
  )
}

export default AllFollowUpView