import { View, Text, StatusBar, FlatList } from 'react-native'
import React, { useState } from 'react'
import styles from './Styles'
import { PRIMARY_THEME_COLOR_DARK } from '../../../../components/utilities/constant'
import Header from '../../../../components/Header'
import images from '../../../../assets/images'
import strings from '../../../../components/utilities/Localization'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import FollowUpItem from './FollowUpItem'
import { useNavigation } from '@react-navigation/native'
import FilterModal from './FollowUpModal'

const DATA: any = [
  {
    Projectname: 'ABC',
    Location: 'Indore',
    visitor: 123,
    siteVisit: 234,
    closeVisit: 600,
    status: 'confirmatin Pending',
    createddate: '11/10/2022'
  },
  {
    Projectname: 'ABC',
    Location: 'Indore',
    visitor: 123,
    siteVisit: 234,
    closeVisit: 600,
    status: 'Subscribe',
    createddate: '11/10/2022'
  },
  {
    Projectname: 'ABC',
    Location: 'Indore',
    visitor: 123,
    siteVisit: 234,
    closeVisit: 600,
    status: 'Unsubscribe',
    createddate: '11/10/2022'
  },
  {
    Projectname: 'ABC',
    Location: 'Indore',
    visitor: 123,
    siteVisit: 234,
    closeVisit: 600,
    status: 'confirmatin Pending',
    createddate: '11/10/2022'
  },
];

const FollowUpView = (props: any) => {
  const insets = useSafeAreaInsets();
  const navigation: any = useNavigation()
  const [FilterisVisible, setFilterisVisible] = useState(false)
  const onPressView = () => {
    navigation.navigate('FollowUpDetails')
  }
  const onPressEdit = () => {
    navigation.navigate('EditFollowUp')
  }
  const onPressAllFollowUp = () => {
    navigation.navigate('AllFollowUpScreen')
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
        leftImageSrc={images.menu}
        rightFirstImageScr={images.filter}
        rightSecondImageScr={images.notification}
        headerText={strings.followupHeader}
        handleOnLeftIconPress={props.handleDrawerPress}
        headerStyle={styles.headerStyle}
        RightFirstIconStyle={styles.RightFirstIconStyle}
        handleOnRightFirstIconPress={() => setFilterisVisible(true)}
      />
      <View style={styles.followupItemView}>
        <FlatList
          data={DATA}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <FollowUpItem items={item} onPressView={onPressView} onPressEdit={onPressEdit} onPressAllFollowUp={onPressAllFollowUp} />}
        />
      </View>
      <FilterModal Visible={FilterisVisible} setIsVisible={setFilterisVisible} />
    </View>
  )
}

export default FollowUpView