import { View, Text, FlatList, StatusBar } from "react-native";
import React, { useState } from "react";
import styles from "./Styles";
import images from "../../../../assets/images";
import ConfirmModal from "../../../../components/Modals/ConfirmModal";
import { PRIMARY_THEME_COLOR, PRIMARY_THEME_COLOR_DARK } from "../../../../components/utilities/constant";
import strings from "../../../../components/utilities/Localization";
import PropertyListItem from "../../../PropertyMangement/PropertyScreen/components/PropertyListItem";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../../../../components/Header";
import Button from "../../../../components/Button";
import LeadManagementItem from "./LeadManagementItem";
import { useNavigation } from "@react-navigation/native";
import FilterModal from "./LeadManagementModal";
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

const LeadManagementView = (props: any) => {
  const insets = useSafeAreaInsets();
  const navigation: any = useNavigation()
  const [FilterisVisible, setFilterisVisible] = useState(false)
  
  const onPressView = () => {
    navigation.navigate('LeadDetails')
  }
  return (
    <View style={styles.mainContainer}>
      <Header
        leftImageSrc={images.menu}
        rightFirstImageScr={images.filter}
        rightSecondImageScr={images.notification}
        headerText={strings.visitor}
        handleOnLeftIconPress={props.handleDrawerPress}
        headerStyle={styles.headerStyle}
        RightFirstIconStyle={styles.RightFirstIconStyle}
        handleOnRightFirstIconPress={() => setFilterisVisible(true)}
        statusBarColor={PRIMARY_THEME_COLOR}
        barStyle={'light-content'}
      />
      <View style={styles.propertyListView}>
        <FlatList
          data={DATA}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <LeadManagementItem items={item} onPressView={onPressView} />}
        />
      </View>
      {/* <ConfirmModal Visible={isVisible} setIsVisible={setIsVisible} /> */}
      <FilterModal Visible={FilterisVisible} setIsVisible={setFilterisVisible} />
    </View>
  );
};

export default LeadManagementView;
