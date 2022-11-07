import {View, Text, StatusBar, FlatList, Alert} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AgencyListItem from './AgencyListItem';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../../components/Header';
import images from '../../../../assets/images';
import strings from '../../../../Localization';
import ConfirmModal from '../../../../components/Modals/ConfirmModal';
import FilterModal from './AgencyFilterModel';
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


const AgencyView = (props: any) => {
  const [isVisible, setIsVisible] = useState(false)
  const [FilterisVisible, setFilterisVisible] = useState(false)
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
    navigation.navigate('AgencyDetails')
  }
  const ShowPendinglist = () => {
    navigation.navigate('PendingAgencyList')
  }
  const onPressAddnewAgency = () => {
    navigation.navigate('AddnewAgency')
  }

  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          backgroundColor: PRIMARY_THEME_COLOR_DARK,
          height: insets.top,
        }}
      />
      <StatusBar barStyle={'light-content'} />
      <Header
        leftImageSrc={images.menu}
        rightFirstImageScr={images.filter}
        rightSecondImageScr={images.notification}
        headerText={strings.agencyHeader}
        handleOnLeftIconPress={props.handleDrawerPress}
        headerStyle={styles.headerStyle}
        RightFirstIconStyle={styles.RightFirstIconStyle}
        handleOnRightFirstIconPress={() => setFilterisVisible(true)}
      />
      <View style={styles.propertyListView}>

      <View style={styles.btnView}>

      <TouchableOpacity
        onPress={() => onPressAddnewAgency()}
         style={[styles.button, { borderColor:  BLACK_COLOR,backgroundColor:PRIMARY_THEME_COLOR}]} >
          <Text style={[styles.buttonTxt,{
          color:WHITE_COLOR  }]}>{strings.addnewAgency}</Text>

        </TouchableOpacity>

      <TouchableOpacity
        onPress={() => ShowPendinglist()}
         style={[styles.button, { borderColor:  BLACK_COLOR,backgroundColor:PRIMARY_THEME_COLOR}]} >
          <Text style={[styles.buttonTxt,{
          color:WHITE_COLOR  }]}>{strings.pendingconfirm}</Text>

        </TouchableOpacity>



      </View>
      <View style={styles.propertyListViewsec}>
        <FlatList 
          showsVerticalScrollIndicator={false}
          data={DATA}
          renderItem={({item}) => <AgencyListItem items={item} setIsVisible={setIsVisible} onPressView={onPressView} 
          onPressAddnewAgency={onPressAddnewAgency} 
          />}
        />
        </View> 
      </View>
      <ConfirmModal 
        Visible={isVisible} 
        setIsVisible={setIsVisible}
        stringshow = {strings.confirmation}
        textshow = {strings.deactivconfirmation+' '+strings.agencyHeader+'?'}
        confirmtype = {'CONFIRMATION'}
      />
      <FilterModal Visible={FilterisVisible} setIsVisible={setFilterisVisible} />
    </View>
  );
};

export default AgencyView;
