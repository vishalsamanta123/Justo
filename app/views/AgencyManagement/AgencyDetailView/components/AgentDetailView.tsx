import { View, Text, StatusBar, Image, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import Header from '../../../../components/Header'
import { PRIMARY_THEME_COLOR, PRIMARY_THEME_COLOR_DARK, TABBAR_COLOR, WHITE_COLOR } from '../../../../components/utilities/constant'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import images from '../../../../assets/images'
import strings from '../../../../components/utilities/Localization'
import { normalizeSpacing } from "../../../../components/scaleFontSize";
import styles from './styles'
import AgentDetailInfo from './AgentDetailInfo'
import AgentDetailStats from './AgentDetailStats'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';


const PropertyDetailView = (props: any) => {
  const insets = useSafeAreaInsets();

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Agency Info' },
    { key: 'second', title: 'Agency Stats' },
  ]);


  const DATAINFO: any =
  {
    status: 'Active',
    AgentName: 'ABC',
    Mobileno: '12586663',
    Email: 'Abc@gmail.com',
    whatsappno: 'Abc@gmail.com',
    rerano: '12345699',
    aadharno: '12345699',
    pancardno: 'AAAAA2225A',
    location: 'Indore',
    workingfrom: '22/10/2021',
    workinglocation: ['indoe', 'Dewash'],

  };
  const DATASTATS: any =
  {

    closingper: 10,
    visitor: 123,
    siteVisit: 234,
    closeVisit: 600,
    lastlogin: '2 min ago',
    lastvisit: '2 min ago',
    lastsitevisit: '2 min ago',
    lastclosevisit: '2 min ago',
  };

  const FirstRoute = () => (
    <AgentDetailInfo items={DATAINFO} />
  );

  const SecondRoute = () => (
    <AgentDetailStats items={DATASTATS} />
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });


  /*   const renderTabBar = props => {
      return (
        <TabBar
          {...props}
          renderLabel={({ focused, route }) => {
            return (
              <TextView
                size={20}
                category="Medium"
                color={focused ? 'BLACK' : 'GRAY3'}>
                {route.title}
              </TextView>
            );
          }}
          indicatorStyle={styles.indicatorStyle}
          style={styles.tabBar}
        />
      );
    }; */

  const renderTabBar = (props: any) => (

    <TabBar
      activeColor={TABBAR_COLOR}
      //inactiveColor={'#F4F4F4'} 
      {...props}
      indicatorStyle={{ borderWidth: 2, borderColor: TABBAR_COLOR }}
      style={{ backgroundColor: PRIMARY_THEME_COLOR_DARK }} />

  );



  return (
    <View style={styles.mainContainer}>
      <Header
        leftImageSrc={images.backArrow}
        rightSecondImageScr={images.notification}
        headerText={strings.Agencydetail}
        headerStyle={styles.headerStyle}
        RightFirstIconStyle={styles.leftImageIconStyle}
        leftImageIconStyle={styles.leftImageIconStyle}
        handleOnLeftIconPress={props.handleBackPress}
        statusBarColor={PRIMARY_THEME_COLOR}
        barStyle={'light-content'}
      />
      <View style={styles.propertyListView}>

        <TabView
          renderTabBar={renderTabBar}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          //pagerStyle={{backgroundColor:'red'}}

        />

        {/* <AgentDetailInfo items={DATAINFO} /> */}
      </View>
    </View>
  )
}

export default PropertyDetailView