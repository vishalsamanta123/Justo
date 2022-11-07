import { View, Text, StatusBar, FlatList } from 'react-native'
import React, { useState } from 'react'
import styles from './Styles'
import { PRIMARY_THEME_COLOR, PRIMARY_THEME_COLOR_DARK } from '../../../../components/utilities/constant'
import Header from '../../../../components/Header'
import images from '../../../../assets/images'
import strings from '../../../../components/utilities/Localization'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import FollowUpItem from './FollowUpItem'
import { useNavigation } from '@react-navigation/native'
import FilterModal from './FollowUpModal'

const DATA: any = [
  {
    visitor: 123,
    date: '11/10/2022',
    visitorname: 'Anil Kumar',
    config: 'Indore',
    budget: '90L',
    type: 600,
  },
  {
    visitor: 123,
    date: '11/10/2022',
    visitorname: 'Anil Kumar',
    config: 'Indore',
    budget: '90L',
    type: 600,
  },
  {
    visitor: 123,
    date: '11/10/2022',
    visitorname: 'Anil Kumar',
    config: 'Indore',
    budget: '90L',
    type: 600,
  },
  {
    visitor: 123,
    date: '11/10/2022',
    visitorname: 'Anil Kumar',
    config: 'Indore',
    budget: '90L',
    type: 600,
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
      <Header
        leftImageSrc={images.menu}
        rightFirstImageScr={images.filter}
        rightSecondImageScr={images.notification}
        headerText={strings.followupHeader}
        handleOnLeftIconPress={props.handleDrawerPress}
        headerStyle={styles.headerStyle}
        RightFirstIconStyle={styles.RightFirstIconStyle}
        handleOnRightFirstIconPress={() => setFilterisVisible(true)}
        barStyle={'light-content'}
        statusBarColor={PRIMARY_THEME_COLOR}
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