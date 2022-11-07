import { View, Text, StatusBar, FlatList } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PendingAgencyList from './PendingAgencyListItem';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../../components/Header';
import images from '../../../../assets/images';
import strings from '../../../../Localization';
import ConfirmModal from '../../../../components/Modals/ConfirmModal';
import { PRIMARY_THEME_COLOR_DARK } from '../../../../components/utilities/constant';

import {
  BLACK_COLOR,
  FONT_FAMILY_EXTRABOLD,
  FONT_FAMILY_SEMIBOLD,
  GRAY_COLOR,
  PRIMARY_THEME_COLOR,
  WHITE_COLOR,
} from '../../../../components/utilities/constant';
import { TouchableOpacity } from 'react-native-gesture-handler';



const PendingAgencyView = (props: any) => {
  const [isVisible, setIsVisible] = useState(false)
  const insets = useSafeAreaInsets();
  const navigation: any = useNavigation()
  const DATA: any = [
    {
      Projectname: 'ABC',
      Location: 'Indore',
      rerano: '123566648',
      visitor: 123,
      siteVisit: 234,
      closeVisit: 600,
      status: 'Active'
    },
    {
      Projectname: 'ABC',
      Location: 'Indore',
      rerano: '123566648',
      visitor: 123,
      siteVisit: 234,
      closeVisit: 600,
      status: 'Deactive'
    },
    {
      Projectname: 'ABC',
      Location: 'Indore',
      rerano: '123566648',
      visitor: 123,
      siteVisit: 234,
      closeVisit: 600,
      status: 'Active'
    },
    {
      Projectname: 'ABC',
      Location: 'Indore',
      rerano: '123566648',
      visitor: 123,
      siteVisit: 234,
      closeVisit: 600,
      status: 'Deactive'
    },
  ];

  const onPressView = () => {
    navigation.navigate('PropertyDetails')
  }
  const showpendinglist = () => {
    navigation.navigate('PendingAgencyList')
  }

  return (
    <View style={styles.mainContainer}>
      <Header
        leftImageSrc={images.backArrow}
        rightFirstImageScr={images.filter}
        rightSecondImageScr={images.notification}
        headerText={strings.agencyHeader}
        handleOnLeftIconPress={props.handleBackPress}
        headerStyle={styles.headerStyle}
        RightFirstIconStyle={styles.RightFirstIconStyle}
        leftImageIconStyle={styles.leftImageIconStyle}
        barStyle={'light-content'}
        statusBarColor={PRIMARY_THEME_COLOR}

      />
      <View style={styles.propertyListView}>
         {/* <View style={styles.btnView}>
            <TouchableOpacity
            onPress={() => null}
            style={[styles.button, { borderColor: BLACK_COLOR, backgroundColor: PRIMARY_THEME_COLOR }]} >
            <Text style={[styles.buttonTxt, {
              color: WHITE_COLOR
            }]}>{strings.addnewagency}</Text>

          </TouchableOpacity>
        </View> */}
        <View style={styles.propertyListViewsec}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={DATA}
            renderItem={({ item }) => <PendingAgencyList items={item} setIsVisible={setIsVisible} onPressView={onPressView} />}
          />
        </View>
      </View>
      <ConfirmModal Visible={isVisible} setIsVisible={setIsVisible} />
      {/* <FilterModal /> */}
    </View>
  );
};

export default PendingAgencyView;
