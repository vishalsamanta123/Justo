import { View, Text, Image, TouchableOpacity, StatusBar, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles';
import images from '../assets/images';
import strings from '../components/utilities/Localization';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { DrawerContentScrollView, useDrawerStatus } from '@react-navigation/drawer';
import { PRIMARY_THEME_COLOR } from '../components/utilities/constant';
import AsyncStorage from '@react-native-async-storage/async-storage';

const customDrawer = ({ navigation }: any) => {
  const isDrawerOpen = useDrawerStatus() === 'open';
  const insets = useSafeAreaInsets()
  const [userData, setUserData] = useState<any>([])
  console.log('useData: ', userData);

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data: any = await AsyncStorage.getItem('userData')
    console.log('data: ', data);
    setUserData(JSON.parse(data))
  }
  const toggleDrawer = () => {
    navigation.toggleDrawer();
  }
  const onpressLogout = async () => {
    await AsyncStorage.removeItem('userData')
    navigation.replace('LoginScreenView');
  }
  const ProfileSection = () => {


    return (
      <TouchableOpacity style={styles.MainContainer}>
        <View style={styles.ContainerView}>
          <View style={styles.NameContainer}>
            <Image
              style={styles.UserImge}
              source={{ uri: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' }}
            />
            <View style={styles.UserNameView}>
              <Text
                numberOfLines={1}
                style={[styles.UserNameText, { width: 120 }]}
              >
                {userData?.name}
                {/* Warren Hussen */}
              </Text>
              <Text style={[styles.UserAddress, { width: 140 }]}>
                Florida, US
              </Text>
            </View>
            <TouchableOpacity style={styles.closeDrawerView} onPress={toggleDrawer}>
              {isDrawerOpen && <Image style={styles.closeDrawerImage} source={images.leftArrow} />}
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  const DrawerTabSection = (props: any) => {
    return (
      <>
        {props.type == userData.type || props.type == 'all' ?
          <TouchableOpacity style={styles.drawerTouch} onPress={props.handleDrawerNavigation}>
            <Image source={props.iconSource} style={styles.drawerIconStyle} />
            <Text style={styles.drawerText}>{props.tabTitle}</Text>
          </TouchableOpacity>
          : null}
      </>
    )
  }
  return (
    <View style={styles.drawerMain}>
      <View style={{ backgroundColor: PRIMARY_THEME_COLOR, height: insets.top }} />
      <StatusBar barStyle={'light-content'} />
      <ProfileSection />
      <DrawerContentScrollView
        contentContainerStyle={{
          paddingTop: 0,
        }}
      >
        { }
        <DrawerTabSection type={'all'} iconSource={images.dashboard} tabTitle={strings.dashboardHeader} handleDrawerNavigation={() => { navigation.navigate('DashboardScreen') }} />
        <DrawerTabSection type={'sourcinghead'} iconSource={images.property} tabTitle={strings.propertyManagementHeader} handleDrawerNavigation={() => { navigation.navigate('PropertyScreenView') }} />
        <DrawerTabSection type={'sourcinghead'} iconSource={images.property} tabTitle={strings.SourcingManagersHeader} handleDrawerNavigation={() => { navigation.navigate('SourcingManager') }} />

        <DrawerTabSection type={'sourcinghead'} iconSource={images.agency} tabTitle={strings.agencyHeader} handleDrawerNavigation={() => { navigation.navigate('AgencyListing') }} />

        <DrawerTabSection type={'sourcinghead'} iconSource={images.lead} tabTitle={strings.leadManagementHeader} handleDrawerNavigation={() => { navigation.navigate('LeadManagementScreen') }} />
        <DrawerTabSection
          type={'sourcinghead'}
          iconSource={images.event}
          tabTitle={strings.followupHeader}
          handleDrawerNavigation={() => {
            navigation.navigate('FollowUpScreen');
          }}
        />
        <DrawerTabSection
        type={'sourcinghead'}
          iconSource={images.event}
          tabTitle={strings.appointmentWithCPHeader}
          handleDrawerNavigation={() => {
            navigation.navigate('AppointmentScreenCPSM');
          }}
        />
        <DrawerTabSection type={'sourcinghead'} iconSource={images.event} tabTitle={strings.appointmentForVisitHeader} />
        <DrawerTabSection
        type={'sourcinghead'}
          iconSource={images.event}
          tabTitle={strings.PickuprequestHeader}
        />
        <DrawerTabSection iconSource={images.report} tabTitle={strings.reportHeader} />
        <DrawerTabSection iconSource={images.chat} tabTitle={strings.chatHeader} />
        <DrawerTabSection iconSource={images.support} tabTitle={strings.supportHeader} />
        <DrawerTabSection iconSource={images.setting} tabTitle={strings.settingHeader} />
        <DrawerTabSection
          type={'all'}
          iconSource={images.logout}
          tabTitle={strings.logout}
          handleDrawerNavigation={() => onpressLogout()}
        />
      </DrawerContentScrollView>
      <View style={styles.versionView}>
        <View style={styles.drawerTouch}>
          <Text style={styles.drawerText}>{strings.versionText}{' 1.00.00'}</Text>
        </View>
      </View>
    </View>
  )
}

export default customDrawer;
